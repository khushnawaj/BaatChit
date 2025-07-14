import Navbar from '../components/Navbar';
import ChatSidebar from '../components/ChatSidebar';
import ChatWindow from '../components/ChatWindow';

function ChatPage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <ChatSidebar />
        <ChatWindow />
      </div>
    </div>
  );
}

export default ChatPage;
