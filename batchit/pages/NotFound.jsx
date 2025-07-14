import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <Link to="/chat" className="mt-6 btn btn-primary">
        Go to Chat
      </Link>
    </div>
  );
}

export default NotFound;
