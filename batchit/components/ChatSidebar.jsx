function ChatSidebar() {
  const users = [
    { id: 1, name: 'Alice', pic: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Bob', pic: 'https://i.pravatar.cc/150?img=2' },
  ];

  return (
    <div className="w-64 bg-base-200 p-4 overflow-y-auto border-r">
      <h2 className="font-bold text-lg mb-4">Chats</h2>
      <ul className="space-y-2">
        {users.map((u) => (
          <li key={u.id} className="flex items-center space-x-2 p-2 hover:bg-base-300 rounded cursor-pointer">
            <img src={u.pic} className="w-10 h-10 rounded-full" />
            <span>{u.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatSidebar;
