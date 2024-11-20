import React, { useState } from "react";

const ReplyButton = ({ ticket, API_URL }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup visibility state
  const [replyText, setReplyText] = useState(""); // Reply text state
  const [isSending, setIsSending] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleReply = async () => {
    if (!replyText.trim()) {
      setError("Reply text cannot be empty!"); // Validate empty input
      return;
    }

    setIsSending(true); // Start loading
    setError(null); // Clear previous errors
    try {
      const response = await fetch(`${API_URL}/send-reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: ticket.sender,
          title: ticket.title,
          reply: replyText,
        }),
      });

      if (response.ok) {
        setReplyText(""); // Clear the input field
        setIsPopupVisible(false); // Hide the popup
      } else {
        throw new Error("Failed to send reply");
      }
    } catch (err) {
      setError(err.message); // Display error in popup
    } finally {
      setIsSending(false); // Stop loading
    }
  };

  return (
    <div className="relative">
      {/* Reply button to open the popup */}
      <button
        onClick={() => setIsPopupVisible(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-800 transition"
      >
        رد
      </button>

      {/* Popup */}
      {isPopupVisible && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-[300px] text-center text-black">
            <h2 className="font-bold mb-4">إرسال الرد</h2>
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="اكتب ردك هنا"
              className="w-full p-2 border rounded mb-2 text-black"
            ></textarea>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <div className="flex justify-between">
              {/* Cancel button */}
              <button
                onClick={() => setIsPopupVisible(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                disabled={isSending}
              >
                إلغاء
              </button>

              {/* Send button */}
              <button
                onClick={handleReply}
                disabled={isSending}
                className={`bg-green-600 text-white px-4 py-2 rounded shadow ${
                  isSending ? "opacity-50 cursor-not-allowed" : "hover:bg-green-800 transition"
                }`}
              >
                {isSending ? "جارٍ الإرسال..." : "إرسال"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReplyButton;
