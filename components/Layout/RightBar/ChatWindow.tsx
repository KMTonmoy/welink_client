"use client";

import React, { useRef } from "react";
import { X, Phone, Video, MoreHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Contact, Message } from "../../../types/rightbar_types";

import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { useClickOutside } from "./useClickOutside";

interface ChatWindowProps {
  contact: Contact | null;
  messages: Message[];
  currentUserId: number;
  onClose: () => void;
  onSendMessage: (contactId: number, text: string, image?: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  contact,
  messages,
  currentUserId,
  onClose,
  onSendMessage,
}) => {
  const chatRef = useRef<HTMLDivElement>(null);
  useClickOutside(chatRef, onClose);

  if (!contact) return null;

  const handleSendMessage = (text: string, image?: string) => {
    onSendMessage(contact.id, text, image);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/20 z-40 flex items-end justify-end p-4">
        <motion.div
          ref={chatRef}
          initial={{ opacity: 0, x: 300, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 300, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                  {contact.avatar}
                </div>
                {contact.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                <p className="text-xs text-green-500">
                  {contact.online ? "Online" : contact.lastSeen}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                <Video className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <MessageList messages={messages} currentUserId={currentUserId} />

          {/* Message Input */}
          <MessageInput onSendMessage={handleSendMessage} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ChatWindow;
