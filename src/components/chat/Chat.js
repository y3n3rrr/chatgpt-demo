import React, { useState, useEffect } from "react";
import Message from "./Message";
import "./style.css";
import axios from "axios";
import { BASE_URL } from "../../utils/config";

export const Chat = (props) => {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/abb/Message/GetMessages`);
      if (response.status == 200) {
        setMessages(response.data);
      } else {
        alert("Hata Olustu");
      }
    } catch (error) {
      
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  const renderChat = () => {
    return messages.map((el, i) => <Message key={i} {...el} />);
  };

  return <div className="chat">{renderChat()}</div>;
};
