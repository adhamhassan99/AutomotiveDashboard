import React from "react";
import ActiveChatBody from "../ActiveChatBody/ActiveChatBody.component";
import ActiveChatHeader from "../ActiveChatHeader/ActiveChatHeader.component";
import "./ActiveChat.styles.scss";

const ActiveChat = ({ imageUrl, contactName, messages }) => {
  return (
    <div className="active-chat-container">
      <ActiveChatHeader props={{ contactName, imageUrl }} />
      <ActiveChatBody props={messages} />
    </div>
  );
};

export default ActiveChat;
