"use client";

import React, { useState } from "react";
import {
  Search,
  Video,
  MoreHorizontal,
  UserPlus,
  Users,
  UserCheck,
  UserX,
  MessageCircle,
  Mail,
  Phone,
  Camera,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
} from "lucide-react";

const Rightbar = () => {
  const [activeTab, setActiveTab] = useState("contacts");

  const contacts = [
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
  ];

  const friendRequests = [
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
  ];

  const birthdays = [
    { id: 1, name: "Alex Johnson", today: true },
    { id: 2, name: "Sarah Miller", today: false, daysLeft: 3 },
    { id: 3, name: "Mike Wilson", today: false, daysLeft: 7 },
  ];

  const suggestedFriends = [
    { id: 1, name: "Chris Evans", mutual: 15, avatar: "CE" },
    { id: 2, name: "Emma Watson", mutual: 8, avatar: "EW" },
    { id: 3, name: "Tom Holland", mutual: 20, avatar: "TH" },
  ];

  return (
    <aside className="hidden xl:block w-80 border-l border-gray-200 bg-white overflow-y-auto sticky top-16 h-[calc(100vh-4rem)]">
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

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {activeTab === "contacts" ? (
          <>
            {/* Contacts */}
            <div className="mb-6">
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

              <div className="space-y-2">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
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
                        <p className="font-medium text-gray-900">
                          {contact.name}
                        </p>
                        <p
                          className={`text-xs ${contact.online ? "text-green-500" : "text-gray-500"}`}
                        >
                          {contact.online ? "Online" : contact.lastSeen}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 rounded-full hover:bg-blue-50 text-blue-500">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-full hover:bg-purple-50 text-purple-500">
                        <Video className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Birthdays */}
            <div className="mb-6 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl p-4 border border-pink-100">
              <div className="flex items-center space-x-2 mb-3">
                <Heart className="w-5 h-5 text-pink-500" />
                <h3 className="font-semibold text-gray-900">Birthdays</h3>
              </div>
              <div className="space-y-3">
                {birthdays.map((birthday) => (
                  <div
                    key={birthday.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-pink-300 rounded-full flex items-center justify-center text-white">
                        🎂
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {birthday.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {birthday.today
                            ? "Birthday today!"
                            : `${birthday.daysLeft} days left`}
                        </p>
                      </div>
                    </div>
                    <button className="text-sm text-pink-600 hover:text-pink-700 font-medium">
                      {birthday.today ? "Wish" : "Remind"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Friend Requests */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Friend Requests ({friendRequests.length})
              </h3>
              <div className="space-y-4">
                {friendRequests.map((request) => (
                  <div key={request.id} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                        {request.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">
                          {request.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {request.mutual} mutual friends
                        </p>
                        <p className="text-xs text-gray-400">{request.time}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                        <UserCheck className="w-4 h-4" />
                        <span>Accept</span>
                      </button>
                      <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Friends */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-3">
                Suggested Friends
              </h3>
              <div className="space-y-3">
                {suggestedFriends.map((friend) => (
                  <div
                    key={friend.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                        {friend.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {friend.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {friend.mutual} mutual friends
                        </p>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 bg-blue-100 text-blue-600 text-sm rounded-lg hover:bg-blue-200 font-medium">
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Footer Info */}
        <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500">
          <p className="mb-2">Privacy • Terms • Advertising • Cookies • More</p>
          <p>WeLink © 2024</p>
        </div>
      </div>
    </aside>
  );
};

export default Rightbar;
