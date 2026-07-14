import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mt-5 text-center">
      <h1>404</h1>
      <p className="lead">Page not found.</p>
      <Link to="/" className="btn btn-primary">
        Back to login
      </Link>
    </div>
  );
}

export default NotFound;
