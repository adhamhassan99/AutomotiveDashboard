import React from "react";
import "./ChatNav.styles.scss";

import { ReactComponent as PinnedIcon } from "../../Assets/PinnedIcon.svg";
import { ReactComponent as AllIcon } from "../../Assets/AllIcon.svg";
import { ReactComponent as LensIcon } from "../../Assets/LensIcon.svg";
import { ReactComponent as MsgIcon } from "../../Assets/newMsg.svg";
import { useState } from "react";
import ChatEntry from "../ChatEntry/ChatEntry.component";

const ChatNav = ({ messages }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="chat-nav-container">
      <div className="header">
        <span className="title">Messages</span>
        <button className="new-msg-btn">
          <MsgIcon />
        </button>
      </div>
      <div className="input-field">
        <LensIcon />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
      <div className="messages-container">
        <div className="pinned-msgs msg-container">
          <div className="headline">
            <PinnedIcon />
            <span>Pinned</span>
          </div>
          {messages.map((entry) => {
            return <ChatEntry key={entry.id} {...entry} />;
          })}
        </div>
        <div className="all-messages msg-container">
          <div className="headline">
            <AllIcon />
            <span>All Messages</span>
          </div>
          {messages.map((entry) => {
            return <ChatEntry key={entry.id} {...entry} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatNav;
