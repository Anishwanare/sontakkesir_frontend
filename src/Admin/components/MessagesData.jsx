import axios from "axios";
import React, { useEffect, useState } from "react";

const MessagesData = () => {
  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_BASE_URL}/api/v1/message/get`
        );
        console.log(response?.data?.getAllMessagesResponse);
        setMessageData(response?.data?.getAllMessagesResponse);
      } catch (error) {
        console.error("Error fetching Messages data:", error);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div className="p-4">
      {messageData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Message</th>
              </tr>
            </thead>
            <tbody>
              {messageData.map((message, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{message.name}</td>
                  <td className="py-2 px-4 border-b">{message.email}</td>
                  <td className="py-2 px-4 border-b">{message.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-4">Messages Not Found!</div>
      )}
    </div>
  );
};

export default MessagesData;
