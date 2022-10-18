import React, { useState } from "react";
import ActiveChatBody from "../ActiveChatBody/ActiveChatBody.component";
import ActiveChatFooter from "../ActiveChatFooter/ActiveChatFooter.component";
import ActiveChatHeader from "../ActiveChatHeader/ActiveChatHeader.component";
import "./ActiveChat.styles.scss";

const ActiveChat = ({ imageUrl, contactName, messages }) => {
  const [chatMessages, setChatMessages] = useState(messages);
  const [newMsg, setNewMsg] = useState("");
  const handleChange = (e) => {
    setNewMsg(e.target.value);
  };
  const handleSend = () => {
    const NewUserMsg = {
      id: chatMessages.length + 1,
      content: newMsg,
      timeStamp: "6:30 PM",
      type: "sender",
    };
    var newArrayChat = chatMessages;
    newArrayChat.push(NewUserMsg);
    setChatMessages(newArrayChat);
    setNewMsg("");
  };

  return (
    <div className="active-chat-container">
      <ActiveChatHeader props={{ contactName, imageUrl }} />
      <ActiveChatBody props={{ chatMessages, imageUrl }} />
      <ActiveChatFooter
        value={newMsg}
        onChange={handleChange}
        onClick={handleSend}
      />
    </div>
  );
};

export default ActiveChat;
