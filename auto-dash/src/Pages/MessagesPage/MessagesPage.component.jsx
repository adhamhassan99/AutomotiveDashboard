import React, { useState } from "react";
import "./MessagesPage.styles.scss";
import chatData from "./chatData";
import ChatNav from "../../components/ChatNav/ChatNav.component";
import ActiveChat from "../../components/ActiveChat/ActiveChat.component";

const MessagesPage = () => {
  const [chatMsg, setChatMsg] = useState(chatData);
  const [activeChatMsg, setActiveChatMsg] = useState(chatMsg[0]);

  return (
    <div className="messages-page-container">
      <ChatNav setActiveChatMsg={setActiveChatMsg} messages={chatMsg} />
      <ActiveChat {...activeChatMsg} />
    </div>
  );
};

export default MessagesPage;
