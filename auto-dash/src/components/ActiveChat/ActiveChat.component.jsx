import React, { useState } from "react";
import ActiveChatBody from "../ActiveChatBody/ActiveChatBody.component";
import ActiveChatFooter from "../ActiveChatFooter/ActiveChatFooter.component";
import ActiveChatHeader from "../ActiveChatHeader/ActiveChatHeader.component";
import "./ActiveChat.styles.scss";
import ScrollToBottom from "react-scroll-to-bottom";

const ActiveChat = ({ imageUrl, contactName, messages }) => {
  const [chatMessages, setChatMessages] = useState(messages);
  const [newMsg, setNewMsg] = useState("");
  const handleChange = (e) => {
    setNewMsg(e.target.value);
  };
  const handleSend = () => {
    const date = new Date();
    const NewUserMsg = {
      id: chatMessages.length + 1,
      content: newMsg,
      timeStamp: date.getHours() + ":" + date.getMinutes(),
      type: "sender",
    };

    setChatMessages([...chatMessages, NewUserMsg]);
    setNewMsg("");
  };

  return (
    <ScrollToBottom>
      <div className="active-chat-container">
        <ActiveChatHeader props={{ contactName, imageUrl }} />
        <ActiveChatBody props={{ chatMessages, imageUrl }} />
        <ActiveChatFooter
          value={newMsg}
          onChange={handleChange}
          onClick={handleSend}
        />
      </div>
    </ScrollToBottom>
  );
};

export default ActiveChat;
