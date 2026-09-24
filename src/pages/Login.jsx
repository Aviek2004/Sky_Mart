import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import userIcon from "../assets/img/user1.png";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      console.log("LOGIN RESPONSE:", data);

      // Login failed
      if (!response.ok) {
        setError(data.message || "Invalid email or password.");
        return;
      }

      // Make sure token exists
      if (!data.token) {
        setError("Login successful, but no token was received.");
        return;
      }

      login(data.user, data.token);

      console.log(
        "TOKEN SAVED:",
        localStorage.getItem("token")
      );

      console.log(
        "USER SAVED:",
        localStorage.getItem("user")
      );

      console.log(
        "CURRENT PATH:",
        window.location.pathname
      );

      // Small delay to make sure localStorage is updated
      setTimeout(() => {
        console.log("NAVIGATING TO HOME");

        navigate("/", {
          replace: true,
        });
      }, 100);

    } catch (error) {
      console.error("Login Error:", error);

      setError(
        "Unable to connect to server. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    setError("");

    setMessage(
      "Password reset is not available yet."
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <div className="w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl p-10">

        {/* Logo */}
        <div className="text-center mb-10">

          <div className="w-16 h-16 bg-lime-400 rounded-2xl flex items-center justify-center mx-auto">

          <span className="text-4xl">⚡</span>

          </div>

          <h1 className="text-4xl font-bold mt-6">
            Welcome back
          </h1>

          <p className="text-gray-500 mt-3">
            Sign in to your SkyMart account
          </p>

        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>

          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            className="
              w-full
              bg-zinc-900
              border
              border-zinc-700
              rounded-2xl
              px-5
              py-4
              mb-5
              outline-none
              focus:border-lime-400
            "
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            className="
              w-full
              bg-zinc-900
              border
              border-zinc-700
              rounded-2xl
              px-5
              py-4
              mb-4
              outline-none
              focus:border-lime-400
            "
          />

          {/* Forgot Password */}
          <div className="text-right mb-6">

            <button
              type="button"
              onClick={handleForgotPassword}
              className="
                text-lime-400
                text-sm
                font-semibold
              "
            >
              Forgot password?
            </button>

          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 bg-red-950/40 border border-red-800 rounded-xl px-4 py-3">
              <p className="text-red-400 text-sm">
                {error}
              </p>
            </div>
          )}

          {/* Message */}
          {message && (
            <div className="mb-5 bg-lime-950/30 border border-lime-800 rounded-xl px-4 py-3">
              <p className="text-lime-400 text-sm">
                {message}
              </p>
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-lime-400
              text-black
              font-bold
              text-lg
              py-4
              rounded-2xl
              hover:bg-lime-300
              disabled:opacity-50
              transition
            "
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

        </form>

        {/* Signup */}
        <p className="text-center text-gray-500 mt-8">

          Don't have an account?

          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="
              ml-2
              text-lime-400
              font-semibold
            "
          >
            Create account
          </button>

        </p>

      </div>

    </div>
  );
};

export default Login;