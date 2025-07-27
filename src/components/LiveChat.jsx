import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import {
  addMessages,
  toggleLiveChat,
  openChat,
  closeChat,
} from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  const isLiveChatOpen = useSelector((store) => store.chat.isLiveChatVisible);

  const isChatClosed = useSelector((store) => store.chat.isChatClosed);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      // console.log("API Polling");

      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  // Early Return Pattern
  if (isChatClosed)
    return (
      <div className="w-full flex justify-center">
        <button
          className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold hover:bg-gray-200"
          onClick={() => dispatch(openChat())}
        >
          Show chat replay
        </button>
      </div>
    );

  return (
    <div
      className="w-full border border-gray-300 rounded-xl flex flex-col"
      style={{
        height: isLiveChatOpen ? "520px" : "auto",
      }}
    >
      {/* Header */}
      <div
        className="flex justify-between items-center p-3 border-b border-b-gray-300"
        onClick={() => dispatch(toggleLiveChat())}
      >
        <span className="font-semibold">
          Top chat {isLiveChatOpen ? "▾" : "▴"}
        </span>
        <div className="flex items-center gap-3">
          <div
            className="cursor-pointer text-xl px-2 py-2 rounded-full hover:bg-gray-200"
            onClick={() => dispatch(closeChat())}
          >
            <img
              alt="cross-icon"
              src="https://www.svgrepo.com/show/520676/cross.svg"
              className="h-6"
            />
          </div>
        </div>
      </div>

      {isLiveChatOpen && (
        <>
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto px-3 py-2 text-sm flex flex-col-reverse">
            {chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))}
          </div>

          {/* Input */}
          <form
            className="border-t border-t-gray-300 p-3 flex items-center gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                addMessages({
                  name: "Atulya Jaiswal",
                  message: liveMessage,
                })
              );
              setLiveMessage("");
            }}
          >
            <input
              className="flex-1 border border-gray-200 bg-gray-200 rounded-full px-4 py-2 text-sm outline-none"
              placeholder="Chat..."
              value={liveMessage}
              onChange={(e) => setLiveMessage(e.target.value)}
            />
            <button className="hover:bg-gray-200 text-sm px-2 py-2 rounded-full cursor-pointer">
              <img
                alt="submit-icon"
                src="https://www.svgrepo.com/show/489792/sent.svg"
                className="h-6"
              />
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default LiveChat;
