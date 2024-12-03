import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateStudent = () => {
    const { id } = useParams(); // Extract student ID from the URL
    const navigate = useNavigate(); // For redirecting after update
    const [student, setStudent] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        phone: "",
        school: "",
        coordinator: "",
        className: "",
        talukka: "",
        district: "",
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_APP_API_BASE_URL}/api/v3/student/getme/student/${id}`
                );
                setStudent(response.data.getStudent);
                console.log(response.data.getStudent);

            } catch (error) {
                console.error("Error fetching student data:", error);
            }
        };

        fetchStudent();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((prevStudent) => ({
            ...prevStudent,
            [name]: value,
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.put(
                `${import.meta.env.VITE_APP_API_BASE_URL}/api/v3/student/update/student/${id}`,
                student,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            toast.success("Student updated successfully!");
            navigate("/admin-dashboard");
        } catch (error) {
            console.error("Error updating student:", error);
            toast.error("Failed to update student.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Update Student</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                    <label htmlFor="firstName" className="block font-medium mb-1">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={student.firstName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="middleName" className="block font-medium mb-1">
                        Middle Name
                    </label>
                    <input
                        type="text"
                        id="middleName"
                        name="middleName"
                        value={student.middleName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="lastName" className="block font-medium mb-1">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={student.lastName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block font-medium mb-1">
                        Phone
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={student.phone}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="school" className="block font-medium mb-1">
                        School
                    </label>
                    <input
                        type="text"
                        id="school"
                        name="school"
                        value={student.school}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="coordinator" className="block font-medium mb-1">
                        Coordinator
                    </label>
                    <input
                        type="text"
                        id="coordinator"
                        name="coordinator"
                        value={student.coordinator}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="className" className="block font-medium mb-1">
                        Class
                    </label>
                    <input
                        type="text"
                        id="className"
                        name="className"
                        value={student.className}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="talukka" className="block font-medium mb-1">
                        Talukka
                    </label>
                    <input
                        type="text"
                        id="talukka"
                        name="talukka"
                        value={student.talukka}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="district" className="block font-medium mb-1">
                        District
                    </label>
                    <input
                        type="text"
                        id="district"
                        name="district"
                        value={student.district}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded"
                    disabled={loading}
                >
                    {loading ? "Updating..." : "Update Student"}
                </button>
            </form>
        </div>
    );
};

export default UpdateStudent;
