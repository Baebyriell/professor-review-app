// Chatbot.js
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { sender: "AI", text: "How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "User", text: input }]);
      setInput("");
      // Simulate AI response (replace with actual AI logic)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "AI", text: "That's an interesting question! Let me think..." }, 
        ]);
      }, 1000); 
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl w-full max-w-lg p-4"
          >
            <div className="flex justify-between items-center mb-4 border-b border-gray-300/20 pb-2"> 
              <h2 className="text-xl font-semibold text-white">
                Chat with AI
              </h2>
              <button onClick={onClose}>
                <X className="h-6 w-6 text-gray-300 hover:text-white transition-colors duration-200" />
              </button>
            </div>

            <div className="flex flex-col h-64 overflow-y-auto">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-2 p-3 rounded-lg flex ${
                    message.sender === "AI" ? "justify-start" : "justify-end" 
                  }`}
                  style={{
                    maxWidth: "80%",
                    marginLeft: message.sender === "AI" ? "0" : "auto",
                    marginRight: message.sender === "AI" ? "auto" : "0", 
                  }}
                >
                  <div className="flex items-start">
                    {message.sender === "AI" && ( 
                      <img 
                        src="/professor.png" 
                        alt="Bot Profile"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                    )}
                    <div 
                      className={`px-3 py-2 rounded-lg ${
                        message.sender === "AI"
                          ? "bg-blue-600/50 backdrop-blur-md text-white"
                          : "bg-gray-800/50 backdrop-blur-md text-gray-200"
                      }`}
                    >
                      <p className="text-sm">
                        {message.text}
                      </p>
                    </div>
                    {message.sender === "User" && ( 
                      <img 
                        src="/profile.png" 
                        alt="User Profile"
                        className="w-8 h-8 rounded-full ml-2"
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex items-center space-x-2 border-t border-gray-300/20 pt-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-grow bg-gray-800/50 backdrop-blur-md text-gray-300 rounded-lg p-2 outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                className="p-2 bg-blue-600/70 backdrop-blur-md text-white rounded-lg hover:bg-blue-700/70 transition-colors duration-200"
              >
                <Send className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;