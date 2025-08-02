import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import '../src/index.css';

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('baatchitUser'));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('baatchitUser');
    navigate('/login');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/chat" className="navbar-title">
          <span>Baat-Chit</span>
          <span role="img" aria-label="chat">💬</span>
        </Link>
      </div>

      <div className="navbar-right">
        {user ? (
          <div className="dropdown" ref={dropdownRef}>
            <button className="avatar-btn" onClick={toggleDropdown}>
              <img
                src={user?.profilePic || 'https://via.placeholder.com/150'}
                alt="user"
                className="avatar-img"
              />
              <span>{user?.name}</span>
            </button>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <li>
                <Link 
                  to="/profile" 
                  className="dropdown-link"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Profile
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsDropdownOpen(false);
                  }} 
                  className="dropdown-link logout-btn"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;