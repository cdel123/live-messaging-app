import React from 'react';
import { useChat } from '../ChatContext';
import Chat1 from '../screens/Chat1';

function ChatWindow() {
  const { selectedChat } = useChat();

  if (!selectedChat) {
    return <div>No chat selected</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1 }}>
        {selectedChat === 'chat1' && <Chat1 />}
        {selectedChat === 'chat2' && <Chat2 />}
        {selectedChat === 'chat3' && <Chat3 />}
        {selectedChat === 'chat4' && <Chat4 />}
        {selectedChat === 'chat5' && <Chat5 />}
      </div>
      <div style={{ marginTop: 'auto' }}>
        <textarea
          className="w-75"
          placeholder="Enter your message"
          id=""
        />
      </div>
    </div>
  );
}

// function Chat1() {
//   return <div>Chat 1 content</div>;
// }

function Chat2() {
  return <div>Chat 2 content</div>;
}

function Chat3() {
  return <div>Chat 3 content</div>;
}

function Chat4() {
  return <div>Chat 4 content</div>;
}

function Chat5() {
  return <div>Chat 5 content</div>;
}

export default ChatWindow;