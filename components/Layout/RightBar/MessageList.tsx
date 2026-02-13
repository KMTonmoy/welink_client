"use client";

import React, { useEffect, useRef } from "react";
import { Message } from "../../../types/rightbar_types";
import { Check, CheckCheck } from "lucide-react";

interface MessageListProps {
  messages: Message[];
  currentUserId: number;
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
  currentUserId,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.senderId === currentUserId ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`flex items-end space-x-2 max-w-[70%] ${message.senderId === currentUserId ? "flex-row-reverse" : ""}`}
          >
            {message.senderId !== currentUserId && (
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {message.senderId}
              </div>
            )}

            <div
              className={`rounded-2xl px-4 py-2 ${
                message.senderId === currentUserId
                  ? "bg-purple-600 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-900 rounded-bl-none"
              }`}
            >
              {message.image && (
                <img
                  src={message.image}
                  alt="Shared"
                  className="rounded-lg mb-2 max-w-full max-h-48 object-cover"
                />
              )}
              <p className="text-sm break-words ">{message.text}</p>
              <div
                className={`flex items-center justify-end space-x-1 mt-1 text-xs ${
                  message.senderId === currentUserId
                    ? "text-purple-200"
                    : "text-gray-500"
                }`}
              >
                <span>{message.time}</span>
                {message.senderId === currentUserId &&
                  (message.id === messages.length ? (
                    <CheckCheck className="w-3 h-3" />
                  ) : (
                    <Check className="w-3 h-3" />
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
