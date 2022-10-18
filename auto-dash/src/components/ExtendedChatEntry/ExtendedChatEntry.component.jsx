import React from "react";
import "./ExtendedChatEntry.styles.scss";

import { useSelector } from "react-redux";

const ExtendedChatEntry = ({ imageUrl, msg }) => {
  const LoggedInImage = useSelector((state) => state.user.userImg);

  return (
    <div className={`extended-chat-entry ${msg.type}`}>
      <div className="img-container">
        <img src={msg.type === "sender" ? LoggedInImage : imageUrl} alt="" />
      </div>
      <div className="msg-details">
        <div className="msg-content">{msg.content}</div>
        <div className="timestamp">{msg.timeStamp}</div>
      </div>
    </div>
  );
};

export default ExtendedChatEntry;
