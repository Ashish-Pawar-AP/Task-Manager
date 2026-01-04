import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api.js";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Registeration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleRegister} className="space-y-4 w-80">
        <h2 className="text-xl font-bold">Register</h2>
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-black text-white p-2 w-full cursor-pointer">
          Register
        </button>
        <p className="text-sm">
          Already have an account?{" "}
          <Link className="text-blue-500 underline" to="/">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
