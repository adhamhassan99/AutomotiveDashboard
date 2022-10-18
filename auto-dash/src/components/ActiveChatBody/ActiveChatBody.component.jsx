import React from "react";
import ChatEntry from "../ChatEntry/ChatEntry.component";
import ExtendedChatEntry from "../ExtendedChatEntry/ExtendedChatEntry.component";
import "./ActiveChatBody.styles.scss";

const ActiveChatBody = ({ props }) => {
  return (
    <div id="activeChatBody" className="active-chat-body">
      {props.chatMessages.map((msg) => {
        return (
          <ExtendedChatEntry key={msg.id} msg={msg} imageUrl={props.imageUrl} />
        );
      })}
    </div>
  );
};

export default ActiveChatBody;
