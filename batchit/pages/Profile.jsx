import React from 'react';

function Profile() {
  const user = JSON.parse(localStorage.getItem('baatchitUser'));

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
      <div className="flex flex-col items-center">
        <img
          src={user?.profilePic}
          alt="avatar"
          className="w-24 h-24 rounded-full"
        />
        <h2 className="text-xl font-bold mt-2">{user?.name}</h2>
        <p className="text-gray-600">{user?.email}</p>
      </div>
    </div>
  );
}

export default Profile;
