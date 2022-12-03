import React from "react";
import "./ChatEntry.styles.scss";

const ChatEntry = ({ imageUrl, contactName, isPinned, messages }) => {
  return (
    <div className="chat-entry-container">
      <div className="image-name-container">
        <div className="img-container">
          <img src={imageUrl} alt="l" />
        </div>
        <div className="title-msg">
          <div className="name">{contactName}</div>
          <div className="msg">
            {messages ? messages[messages.length - 1].content : "Active Now"}
          </div>
        </div>
      </div>
      {messages ? (
        <div className="timestamp-container">
          <span className="timestamp">
            {messages ? messages[messages.length - 1].timeStamp : null}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default ChatEntry;
