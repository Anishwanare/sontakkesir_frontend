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
    fetchMessages()
  }, []);
  return (
    <div>{messageData.length > 0 ? messageData.map((message)=>(
        <>
        <div>{message.name}</div>
        <div>{message.email}</div>
        <div>{message.message}</div>
        </>
    )) : "Messages Not Found!!"}</div>
  );
};

export default MessagesData;
