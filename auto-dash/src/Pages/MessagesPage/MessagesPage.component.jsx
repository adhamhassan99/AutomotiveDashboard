import React, { useState } from "react";
import "./MessagesPage.styles.scss";
import chatData from "./chatData";
import ChatNav from "../../components/ChatNav/ChatNav.component";
import ActiveChat from "../../components/ActiveChat/ActiveChat.component";

const MessagesPage = () => {
  const [chatMsg, setChatMsg] = useState(chatData);
  return (
    <div className="messages-page-container">
      <ChatNav messages={chatMsg} />
      <ActiveChat {...chatMsg[0]} />
    </div>
  );
};

export default MessagesPage;
