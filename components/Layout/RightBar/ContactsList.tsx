"use client";

import React from "react";
import { Search, Video, MoreHorizontal } from "lucide-react";
import ContactCard from "./ContactCard";
import { Contact } from "../../../types/rightbar_types";

interface ContactsListProps {
  contacts: Contact[];
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onChatOpen: (contact: Contact) => void;
}

const ContactsList: React.FC<ContactsListProps> = ({
  contacts,
  searchQuery,
  onSearchChange,
  onChatOpen,
}) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">
          Contacts ({contacts.length})
        </h3>
        <div className="flex items-center space-x-2">
          <button className="p-1.5 rounded-full hover:bg-gray-100">
            <Video className="w-4 h-4 text-gray-500" />
          </button>
          <button className="p-1.5 rounded-full hover:bg-gray-100">
            <Search className="w-4 h-4 text-gray-500" />
          </button>
          <button className="p-1.5 rounded-full hover:bg-gray-100">
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-600"
        />
      </div>

      {/* Contacts List */}
      <div className="space-y-2">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onChatClick={onChatOpen}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">No contacts found</p>
        )}
      </div>
    </div>
  );
};

export default ContactsList;
