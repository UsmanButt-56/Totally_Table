import React from "react";
import Message from "../Notification/Message/Message";
import Chat from "./Chat/Chat";
function Email() {
  return (
    <>
      <div className="bg-[#102F47] min-h-screen">
        <Message name="Messages" time="2 new" />
        <Chat />
      </div>
    </>
  );
}

export default Email;