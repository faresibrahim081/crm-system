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
        className="px-2 py-1 bg-[#0d3d2c] text-emerald-400 font-bold rounded-md hover:bg-emerald-400 hover:text-gray-900 transition duration-200"
      >
        رد
      </button>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
          <div className="w-full p-4 max-h-[90vh] overflow-y-auto bg-[#292929] rounded-lg shadow-lg md:w-1/2 lg:w-1/3">
            <h2 className="mb-4 font-bold text-right">إرسال الرد</h2>
            <textarea rows={6}
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="اكتب ردك هنا"
              className="w-full p-2 mb-2 text-right text-white border rounded"
            ></textarea>
            {error && <p className="mb-2 text-red-500">{error}</p>}
            <div className="flex justify-between">
              {/* Cancel button */}
              <button
                onClick={() => setIsPopupVisible(false)}
                className="px-4 py-2 text-white transition bg-gray-500 rounded hover:bg-gray-700"
                disabled={isSending}
              >
                إلغاء
              </button>

              {/* Send button */}
              <button
                onClick={handleReply}
                disabled={isSending}
                className={`bg-green-600 text-white px-4 py-2 rounded shadow ${
                  isSending
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-green-800 transition"
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
