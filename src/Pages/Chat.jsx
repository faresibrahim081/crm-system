import { useState } from "react";

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "It's over Anakin,\nI have the high ground.",
      isUser: false,
    },
    {
      text: "You underestimate my power!",
      isUser: true,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, isUser: true }]);
      setNewMessage("");
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 dark:hover:bg-purple-500"
      >
        Open Chat
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
          <div className="w-full p-4 max-h-[90vh] overflow-y-auto bg-[#292929] rounded-lg shadow-lg md:w-1/2 lg:w-1/3">
            <h2 className="mb-1 text-lg font-bold text-right text-white">
              محادثة
            </h2>
            <div className="flex flex-col mt-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat ${msg.isUser ? "chat-end" : "chat-start"}`}
                >
                  <div
                    className={`chat-bubble ${
                      msg.isUser ? "bg-gray-500" : "bg-green-600"
                    } text-white`}
                  >
                    {msg.text.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full p-2 bg-[#292929] text-white border border-gray-500 rounded text-right"
                  rows={3}
                />
                <div className="flex justify-between mt-2">
                  <button
                    onClick={handleClose}
                    className="w-1/2 text-white btn btn-ghost"
                  >
                    إغلاق
                  </button>
                  <button
                    onClick={handleSendMessage}
                    className="w-1/2 text-white bg-green-700 btn"
                  >
                    إرسال
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatModal;
