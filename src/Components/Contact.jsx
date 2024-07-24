import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // console.log(name, email, message);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_BASE_URL}/api/v1/message/send`,
        {
          name,
          email,
          message,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response?.data?.status) {
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.data?.message);
      }
      // Clear form fields after submission
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-start p-6 bg-gray-100 md:px-[200px] px-0">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="name"
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contacts@company.com"
                className="w-full p-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here"
                className="w-full p-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              {loading ? "SENDING....." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="bg-zinc-100 p-4 rounded-md">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29754.34105181647!2d77.32801415189131!3d21.220241486001942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6fa96fadb1903%3A0x5690a371909f73dc!2sPathrot%2C%20Maharashtra%20444808%2C%20India!5e0!3m2!1sen!2sus!4v1718096205938!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <p className="mt-4">
              At post Pathrot Tq Achalpur Dist Amravati 444808
            </p>
            <p>Whatsapp us +91 96231 61432</p>
            <p>
              Facebook:{" "}
              <a
                href="https://www.facebook.com/profile.php?id=61555652351984&mibextid=ZbWKwL"
                className="text-blue-500 hover:underline text-wrap"
              >
                Visit to Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
