// components/ChatContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  email: string;
  password: string;
}

interface ChatContextType {
  selectedChat: string | null;
  setSelectedChat: (chat: string | null) => void;
  loggedInUser:  User | null;
  setLoggedInUser:  (user: User) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [loggedInUser , setLoggedInUser ] = useState<User | null>(null);

  return (
    <ChatContext.Provider value={{ selectedChat, setSelectedChat, loggedInUser , setLoggedInUser  }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};