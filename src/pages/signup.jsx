import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/auth/signup", form);
      alert("Account created successfully!");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: 500 }}>
      <div className="card shadow">
        <div className="card-body">

          <h2 className="text-center mb-4">
            Create Account
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              className="form-control mb-3"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              type="password"
              className="form-control mb-3"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <button className="btn btn-success w-100">
              Sign Up
            </button>

          </form>

          <p className="text-center mt-3">
            Already have an account?

            <Link to="/">
              Login
            </Link>

          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;