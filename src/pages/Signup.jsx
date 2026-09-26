  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";

  const Signup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e) => {
      e.preventDefault();

      setError("");
      setMessage("");

      // Check password length
      if (password.length < 6) {
        setError("Password must contain at least 6 characters.");
        return;
      }

      // Check password match
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      setLoading(true);

      try {
        const response = await fetch(
          "https://sky-mart-nx35.onrender.com/api/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          setError(
            data.message || "Unable to create account."
          );
          return;
        }

        console.log("Account created successfully:", data);

        setMessage(
          "Account created successfully. Please sign in."
        );

        // IMPORTANT:
        // Do NOT save token here.
        // Do NOT go directly to home.

        setTimeout(() => {
          navigate("/login");
        }, 1000);

      } catch (error) {
        console.error("Signup Error:", error);

        setError(
          "Unable to connect to server. Please make sure the backend is running."
        );
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">

        <div className="w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl p-10">

          {/* Logo */}
          <div className="text-center mb-10">

            <div className="w-16 h-16 bg-lime-400 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-black text-3xl">
                ⚡
              </span>
            </div>

            <h1 className="text-4xl font-bold mt-6">
              Create your account
            </h1>

            <p className="text-gray-500 mt-3">
              Join SkyMart today
            </p>

          </div>

          {/* Signup Form */}
          <form onSubmit={handleSignup}>

            {/* Name */}
              <input
                type="text"
                placeholder="Full name"
                value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
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

            {/* Email */}
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
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
              required
              autoComplete="new-password"
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

            {/* Confirm Password */}
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              required
              autoComplete="new-password"
              className="
                w-full
                bg-zinc-900
                border
                border-zinc-700
                rounded-2xl
                px-5
                py-4
                mb-6
                outline-none
                focus:border-lime-400
              "
            />

            {/* Error */}
            {error && (
              <div className="mb-5 bg-red-950/40 border border-red-800 rounded-xl px-4 py-3">
                <p className="text-red-400 text-sm">
                  {error}
                </p>
              </div>
            )}

            {/* Success */}
            {message && (
              <div className="mb-5 bg-lime-950/40 border border-lime-700 rounded-xl px-4 py-3">
                <p className="text-lime-400 text-sm">
                  {message}
                </p>
              </div>
            )}

            {/* Create Account */}
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
                disabled:cursor-not-allowed
                transition
              "
            >
              {loading
                ? "Creating account..."
                : "Create account"}
            </button>

          </form>

          {/* Login */}
          <p className="text-center text-gray-500 mt-8">

            Already have an account?

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="
                ml-2
                text-lime-400
                font-semibold
                hover:text-lime-300
              "
            >
              Sign in
            </button>

          </p>

        </div>

      </div>
    );
  };

  export default Signup;