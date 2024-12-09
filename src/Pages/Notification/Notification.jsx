import React from "react";
import Message from "./Message/Message";
import Notify from "./Notify/Notify";
import mic from "../../assets/mic.svg";
function Notification() {
  const Notifies = [
    {
      id: 1,
      image: mic,
      name: "Niles ",
      message: "sent you a friend request",
    },
    {
      id: 2,
      image: mic,
      name: "Daphne ",
      message: "accepted your friend request",
    },
    {
      id: 3,
      image: mic,
      name: "Roz ",
      message: "mentioned you",
    },
    {
      id: 4,
      image: mic,
      name: "Frasiers ",
      message: "has commented on your",
    },
    {
      id: 5,
      image: mic,
      name: "Dan ",
      message: "has invited you to",
    },
    {
      id: 6,
      image: mic,
      name: "Roz ",
      message: "accepted your friend request",
    },
    {
      id: 7,
      image: mic,
      name: "Roz ",
      message: "mentioned you",
    },
    {
      id: 8,
      image: mic,
      name: "Niles ",
      message: "has an available space for",
    },
  ];
  return (
    <>
      <div className="bg-[#102F47] min-h-screen">
        <Message name="Notifications" time="6 new"/>

        {
          Notifies.map((notify)=>
          (
            <Notify key={notify.id} image={notify.image} name={notify.name} message={notify.message} />
          ))
        }
      </div>
    </>
  );
}

export default Notification;