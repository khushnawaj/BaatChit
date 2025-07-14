import { Link } from 'react-router-dom';

function Navbar() {
  const user = JSON.parse(localStorage.getItem('baatchitUser'));

  const handleLogout = () => {
    localStorage.removeItem('baatchitUser');
    window.location.href = '/login';
  };

  return (
    <div className="navbar bg-base-100 px-4 border-b">
      <div className="flex-1">
        <Link to="/chat" className="text-xl font-bold">
          Baat-Chit 💬
        </Link>
      </div>
      <div className="flex items-center space-x-3">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.profilePic} alt="user" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40"
          >
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
