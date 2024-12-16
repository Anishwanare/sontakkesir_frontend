import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HashLoader } from 'react-spinners';

const UpdateSchool = () => {
    const { id } = useParams(); // Retrieve the school ID from the URL
    const navigate = useNavigate();

    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        schoolId: '',
        password: '',
        schoolVillage: '',
        talukka: '',
        district: '',
        coordinator: '',
        headMasterName: '',
        headMasterMobile: '',
    });

    // State to manage loading and errors
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchSchoolDetails = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/api/v2/school/get-school/${id}`);
                setFormData(response.data.getSchool);
                console.log(response.data.getSchool)
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError('Failed to fetch school details');
            }
        };
        fetchSchoolDetails();
    }, [id]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            setLoading(true);
            await axios.put(`${import.meta.env.VITE_APP_API_BASE_URL}/api/v2/school/edit-school/${id}`, formData, { withCredentials: true, new: true });
            setLoading(false);
            navigate('/admin-dashboard');
        } catch (err) {
            setLoading(false);
            setError(err.response?.data?.message || 'Failed to update school');
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Update School Details</h2>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            {loading ? (
                <div className="flex justify-center items-center h-screen" color="#1276e2"><HashLoader /></div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium">School Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="schoolId" className="block font-medium">School ID</label>
                        <input
                            type="text"
                            id="schoolId"
                            name="schoolId"
                            value={formData.schoolId}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="schoolVillage" className="block font-medium">Village</label>
                        <input
                            type="text"
                            id="schoolVillage"
                            name="schoolVillage"
                            value={formData.schoolVillage}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="talukka" className="block font-medium">Talukka</label>
                        <input
                            type="text"
                            id="talukka"
                            name="talukka"
                            value={formData.talukka}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="district" className="block font-medium">District</label>
                        <input
                            type="text"
                            id="district"
                            name="district"
                            value={formData.district}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="coordinator" className="block font-medium">Coordinator</label>
                        <input
                            type="text"
                            id="coordinator"
                            name="coordinator"
                            value={formData.coordinator}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="headMasterName" className="block font-medium">Head Master Name</label>
                        <input
                            type="text"
                            id="headMasterName"
                            name="headMasterName"
                            value={formData.headMasterName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="headMasterMobile" className="block font-medium">Head Master Mobile</label>
                        <input
                            type="text"
                            id="headMasterMobile"
                            name="headMasterMobile"
                            value={formData.headMasterMobile}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        disabled={loading}
                    >
                        {loading ? 'Updating...' : 'Update School'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default UpdateSchool;
