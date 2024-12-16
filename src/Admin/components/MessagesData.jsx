import axios from "axios";
import React, { useEffect, useState } from "react";

const MessagesData = () => {
  const [messageData, setMessageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_BASE_URL}/api/v1/message/get`
        );
        setMessageData(response?.data?.getAllMessagesResponse || []);
      } catch (err) {
        console.error("Error fetching Messages data:", err);
        setError("Failed to fetch messages. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  const tableStyles = "py-2 px-4 border-b";

  return (
    <div className="p-4">
      {loading ? (
        <div className="text-center py-4">Loading messages...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-4">{error}</div>
      ) : messageData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className={tableStyles}>Name</th>
                <th className={tableStyles}>Email</th>
                <th className={tableStyles}>Message</th>
              </tr>
            </thead>
            <tbody>
              {messageData.map((message) => (
                <tr key={message.id || message.email} className="hover:bg-gray-100">
                  <td className={tableStyles}>{message.name}</td>
                  <td className={tableStyles}>{message.email}</td>
                  <td className={tableStyles}>{message.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-4">No messages found!</div>
      )}
    </div>
  );
};

export default MessagesData;
