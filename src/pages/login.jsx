import { useState } from "react";
import { Link } from "react-router-dom";


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

function handleSubmit(e) {
  e.preventDefault();
  console.log("Email:", email);
  console.log("Password:", password);
}

return (
  <div className="container mt-5">
    <h1 className="text-center">Login</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <p className="text-center mt-3">
  Don't have an account?{" "}
  <Link to="/signup">Sign Up</Link>
</p><Link to="/signup">Sign Up</Link>
    </form>
  </div>
);