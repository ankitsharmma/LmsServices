import { useState, useEffect } from "react";
import { MessageSquare, X, Send, Building } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMessages([{ text: "Welcome to SSL Cloud Solution! How can I assist you today?", sender: "bot" }]);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    const userMessage = input;
    setInput("");

    try {
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta3/models/gemini-pro:generateMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `AIzaSyDWg2b7XU0eeIaW-lQL-jUxfTJwrYUsNHQ,`,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userMessage }] }],
        }),
      });

      const data = await response.json();
      const botMessage = data?.candidates?.[1]?.content?.parts?.[1]?.text || "Sorry, I couldn't process that.";

      // Add bot response to chat
      setMessages([...newMessages, { text: botMessage, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages([...newMessages, { text: "Error connecting to AI.", sender: "bot" }]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-20 z-50 right-4">
      {/* Chatbot Icon Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="bg-blue-600 text-white p-3 rounded-full shadow-lg">
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chatbot Popup */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-96 bg-white rounded-2xl shadow-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Building size={24} className="text-blue-600 mr-2" />
              <span className="font-bold text-lg">SSL Cloud Solution</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900">
              <X size={24} />
            </button>
          </div>
          <div className="h-80 overflow-y-auto space-y-2 p-2">
            {messages.map((msg, index) => (
              <div key={index} className={`p-3 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-blue-500 text-white self-end ml-auto" : "bg-gray-300 text-black"}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-4 border-t pt-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-grow p-2 border rounded-lg"
            />
            <button onClick={sendMessage} className="bg-blue-600 text-white p-2 rounded-lg">
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
