import React from "react";
import ChatEntry from "../ChatEntry/ChatEntry.component";
import "./ActiveChatHeader.styles.scss";

import { ReactComponent as VideoCall } from "../../Assets/videoCall.svg";
import { ReactComponent as AudioCall } from "../../Assets/AudioCall.svg";
import { ReactComponent as More } from "../../Assets/More.svg";

const ActiveChatHeader = ({ props }) => {
  return (
    <div className="chat-header-container">
      <ChatEntry {...props} />
      <div className="icon-btn-container">
        <button>
          <VideoCall />
        </button>
        <button>
          <AudioCall />
        </button>
        <button>
          <More />
        </button>
      </div>
    </div>
  );
};

export default ActiveChatHeader;
