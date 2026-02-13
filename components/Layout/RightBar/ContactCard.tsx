"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { Contact } from "../../../types/rightbar_types";

interface ContactCardProps {
  contact: Contact;
  onChatClick: (contact: Contact) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, onChatClick }) => {
  return (
    <div
      onClick={() => onChatClick(contact)}
      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer group"
    >
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
          <p className="font-medium text-gray-900">{contact.name}</p>
          <p
            className={`text-xs ${contact.online ? "text-green-500" : "text-gray-500"}`}
          >
            {contact.online ? "Online" : contact.lastSeen}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onChatClick(contact);
          }}
          className="p-1.5 rounded-full hover:bg-blue-50 text-blue-500"
        >
          <MessageCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
