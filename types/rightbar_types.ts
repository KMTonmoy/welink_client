export interface Contact {
  id: number;
  name: string;
  avatar: string;
  online: boolean;
  lastSeen: string;
}

export interface Message {
  id: number;
  senderId: number;
  text: string;
  time: string;
  isMe: boolean;
  image?: string;
}

export interface FriendRequest {
  id: number;
  name: string;
  avatar: string;
  mutual: number;
  time: string;
}

export interface SuggestedFriend {
  id: number;
  name: string;
  avatar: string;
  mutual: number;
}
