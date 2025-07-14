function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col bg-white p-4">
      <div className="flex-1 overflow-y-auto space-y-2">
        {/* Message bubbles will go here */}
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-8 rounded-full">
              <img src="https://i.pravatar.cc/150?img=1" />
            </div>
          </div>
          <div className="chat-bubble">Hi there!</div>
        </div>

        <div className="chat chat-end">
          <div className="chat-bubble">Hello! What's up?</div>
        </div>
      </div>

      <form className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="input input-bordered flex-1"
        />
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default ChatWindow;
