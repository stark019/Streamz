import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../src/utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(),
        })
      );
    }, 1500);

    // Garbage collection
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div>
        <div className="flex">
          <img
            className="w-10 h-10 px-1 ml-3 mb-1"
            alt="chat-icon"
            src="https://www.svgrepo.com/show/529481/chat-round-dots.svg"
          />
          <h1 className="font-bold py-1.5 text-xl">Live Chat</h1>
        </div>
        <div className="ml-2 p-2 border border-slate-300 h-[408px] w-full bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
          {
            // Disclaimer: Don't use indexes as keys
            ChatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: name,
              message: liveMessage,
            })
          );
          setLiveMessage("");
          setName("");
        }}
      >
      <div>
      <input
      className="w-1/4 p-2 rounded-lg border border-slate-300"
      type="text"
      placeholder="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
        <input
          className="w-2/4 p-2 rounded-lg border border-slate-300"
          type="text"
          placeholder="type your message here..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 ml-4 bg-red-600 text-white rounded-lg">
          Send
        </button>
      </div>
      </form>
    </>
  );
};

export default LiveChat;