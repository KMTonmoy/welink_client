"use client";

import React, { useState } from "react";
import { Users, UserPlus, Search } from "lucide-react";
import {
  Contact,
  Message,
  FriendRequest,
  SuggestedFriend,
} from "../../../types/rightbar_types";
import ContactsList from "./ContactsList";
import ChatWindow from "./ChatWindow";
import FriendRequests from "./FriendRequests";
import SuggestedFriends from "./SuggestedFriends";

const Rightbar = () => {
  const [activeTab, setActiveTab] = useState("contacts");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState<Contact | null>(null);
  const [currentUserId] = useState(999); // Current user ID

  // Contacts Data
  const [contacts] = useState<Contact[]>([
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "AJ",
      online: true,
      lastSeen: "2 min ago",
    },
    {
      id: 2,
      name: "Sarah Miller",
      avatar: "SM",
      online: true,
      lastSeen: "5 min ago",
    },
    {
      id: 3,
      name: "Mike Wilson",
      avatar: "MW",
      online: false,
      lastSeen: "1 hour ago",
    },
    {
      id: 4,
      name: "Emma Davis",
      avatar: "ED",
      online: true,
      lastSeen: "Online",
    },
    {
      id: 5,
      name: "Robert Brown",
      avatar: "RB",
      online: false,
      lastSeen: "2 hours ago",
    },
    {
      id: 6,
      name: "Lisa Wang",
      avatar: "LW",
      online: true,
      lastSeen: "Online",
    },
    {
      id: 7,
      name: "John Smith",
      avatar: "JS",
      online: false,
      lastSeen: "Yesterday",
    },
    {
      id: 8,
      name: "Maria Garcia",
      avatar: "MG",
      online: true,
      lastSeen: "Online",
    },
  ]);

  // Friend Requests Data
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([
    { id: 1, name: "David Lee", mutual: 12, avatar: "DL", time: "5 min ago" },
    { id: 2, name: "Sophia Chen", mutual: 8, avatar: "SC", time: "1 hour ago" },
    {
      id: 3,
      name: "James Wilson",
      mutual: 25,
      avatar: "JW",
      time: "2 hours ago",
    },
    {
      id: 4,
      name: "Olivia Taylor",
      mutual: 5,
      avatar: "OT",
      time: "1 day ago",
    },
  ]);

  // Suggested Friends Data
  const [suggestedFriends] = useState<SuggestedFriend[]>([
    { id: 1, name: "Chris Evans", mutual: 15, avatar: "CE" },
    { id: 2, name: "Emma Watson", mutual: 8, avatar: "EW" },
    { id: 3, name: "Tom Holland", mutual: 20, avatar: "TH" },
  ]);

  // Messages Data
  const [messages, setMessages] = useState<{ [key: number]: Message[] }>({
    1: [
      {
        id: 1,
        senderId: 1,
        text: "Hey! How are you?",
        time: "10:30 AM",
        isMe: false,
      },
      {
        id: 2,
        senderId: 999,
        text: "I'm good! How about you?",
        time: "10:31 AM",
        isMe: true,
      },
      {
        id: 3,
        senderId: 1,
        text: "Check out this photo!",
        time: "10:32 AM",
        isMe: false,
        image: "https://picsum.photos/200/200?random=1",
      },
    ],
    2: [
      {
        id: 1,
        senderId: 2,
        text: "Are we still meeting tomorrow?",
        time: "9:15 AM",
        isMe: false,
      },
      {
        id: 2,
        senderId: 999,
        text: "Yes, 3 PM works!",
        time: "9:16 AM",
        isMe: true,
      },
    ],
    4: [
      {
        id: 1,
        senderId: 4,
        text: "Thanks for your help yesterday!",
        time: "11:00 AM",
        isMe: false,
      },
      {
        id: 2,
        senderId: 999,
        text: "You're welcome! Happy to help 😊",
        time: "11:02 AM",
        isMe: true,
      },
    ],
  });

  // Handlers
  const handleAcceptRequest = (id: number) => {
    setFriendRequests((prev) => prev.filter((req) => req.id !== id));
  };

  const handleDeclineRequest = (id: number) => {
    setFriendRequests((prev) => prev.filter((req) => req.id !== id));
  };

  const handleAddFriend = (id: number) => {
    console.log(`Add friend: ${id}`);
  };

  const handleSendMessage = (
    contactId: number,
    text: string,
    image?: string,
  ) => {
    const newMessage: Message = {
      id: messages[contactId]?.length + 1 || 1,
      senderId: currentUserId,
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isMe: true,
      image,
    };

    setMessages((prev) => ({
      ...prev,
      [contactId]: [...(prev[contactId] || []), newMessage],
    }));
  };

  return (
    <>
      <aside className="hidden xl:block w-80 border-l border-gray-200 bg-white overflow-y-auto sticky top-16 h-[calc(100vh-4rem)] scrollbar-hide">
        <div className="p-4">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-4">
            <button
              onClick={() => setActiveTab("contacts")}
              className={`flex-1 py-3 text-center font-medium text-sm ${
                activeTab === "contacts"
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Contacts</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("requests")}
              className={`flex-1 py-3 text-center font-medium text-sm ${
                activeTab === "requests"
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <UserPlus className="w-4 h-4" />
                <span>Requests</span>
                {friendRequests.length > 0 && (
                  <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {friendRequests.length}
                  </span>
                )}
              </div>
            </button>
          </div>

          {/* Content */}
          {activeTab === "contacts" ? (
            <ContactsList
              contacts={contacts}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onChatOpen={setSelectedChat}
            />
          ) : (
            <>
              <FriendRequests
                requests={friendRequests}
                onAccept={handleAcceptRequest}
                onDecline={handleDeclineRequest}
              />
              <SuggestedFriends
                suggestions={suggestedFriends}
                onAdd={handleAddFriend}
              />
            </>
          )}
        </div>
      </aside>

      {/* Chat Window */}
      <ChatWindow
        contact={selectedChat}
        messages={selectedChat ? messages[selectedChat.id] || [] : []}
        currentUserId={currentUserId}
        onClose={() => setSelectedChat(null)}
        onSendMessage={handleSendMessage}
      />
    </>
  );
};

export default Rightbar;
