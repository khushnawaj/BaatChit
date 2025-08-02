import React from 'react';

function Profile() {
  const user = JSON.parse(localStorage.getItem('baatchitUser'));

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={user?.profilePic || 'https://via.placeholder.com/150'}
          alt="avatar"
          className="profile-avatar"
        />
        <h2 className="profile-name">{user?.name}</h2>
        <p className="profile-email">{user?.email}</p>
      </div>
      
      <div className="profile-details">
        <div className="detail-item">
          <div className="detail-label">Member Since</div>
          <div className="detail-value">
            {new Date(user?.createdAt || Date.now()).toLocaleDateString()}
          </div>
        </div>
        
        <div className="detail-item">
          <div className="detail-label">Last Active</div>
          <div className="detail-value">
            {new Date(user?.lastActive || Date.now()).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;