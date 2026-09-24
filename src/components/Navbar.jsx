import React from "react";
import exitIcon from "../assets/img/exit.png";
import userIcon from "../assets/img/user1.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ cartItemCount = 0, onCartClick }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const userName =
    user?.name ||
    user?.displayName ||
    user?.email?.split("@")[0] ||
    "User";

  return (
    <div className="pt-10 sticky top-0 left-0 h-20 w-full z-50 p-4 flex items-center bg-black text-white justify-between">

      {/* Logo */}
      <div className="flex items-center">

        <img
          className="h-20 w-20"
          src={userIcon}
          alt="SkyMart"
        />

        <h1 className="text-white text-2xl font-bold">
          Sky<span className="text-lime-400">Mart</span>
        </h1>

      </div>

      {/* Navigation */}
      <div className="flex gap-6 font-semibold ml-10">

        <Link
          to="/"
          className="text-gray-400 hover:text-white transition"
        >
          Home
        </Link>

        <Link
          to="/shop"
          className="text-gray-400 hover:text-white transition"
        >
          Shop
        </Link>

        <Link
          to="/about"
          className="text-gray-400 hover:text-white transition"
        >
          About
        </Link>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* User */}
        <button
          type="button"
          title={userName}
          className="w-30 h-10 px-6 border border-gray-600 rounded-lg flex items-center justify-center hover:border-lime-400 transition"
        >
          {userName}
        </button>

        {/* CART */}
        <button
          type="button"
          onClick={onCartClick}
          className="relative w-12 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-lime-400 transition"
        >
          <span className="text-lg">
            🛒
          </span>

          {/* Cart Count */}
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 rounded-full bg-lime-400 text-black text-xs font-bold flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </button>

        {/* Logout */}
        <button
          type="button"
          onClick={handleLogout}
          title="Logout"
          className="w-12 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-red-400 transition"
        >
          <img
            className="w-5 h-5"
            src={exitIcon}
            alt="Logout"
          />
        </button>

      </div>

    </div>
  );
};

export default Navbar;