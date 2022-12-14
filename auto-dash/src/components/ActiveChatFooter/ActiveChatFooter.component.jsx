import React from "react";
import "./ActiveChatFooter.styles.scss";
import { ReactComponent as AttachIcon } from "../../Assets/AttachIcon.svg";
import { ReactComponent as SendIcon } from "../../Assets/SendIcon.svg";

const ActiveChatFooter = ({ onChange, onClick, value }) => {
  const keydown = (e) => {
    if (e.key === "Enter") onClick();
  };
  return (
    <div className="active-chat-footer">
      <div className="left-col">
        <AttachIcon />
        <input
          onKeyDown={keydown}
          value={value}
          onChange={onChange}
          type="text"
          name="msgContent"
          id="msgContent"
        />
      </div>
      <div className="right-col">
        <button onClick={onClick}>
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default ActiveChatFooter;
