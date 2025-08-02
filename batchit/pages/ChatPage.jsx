import Navbar from '../components/Navbar';
import ChatSidebar from '../components/ChatSidebar';
import ChatWindow from '../components/ChatWindow';
import '../src/index.css';

function ChatPage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 pt-16"> {/* pt-16 to account for fixed navbar */}
        <ChatSidebar />
        <ChatWindow />
      </div>
    </div>
  );
}

export default ChatPage;