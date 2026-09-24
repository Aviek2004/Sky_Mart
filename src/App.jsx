import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ProtectedRoute from "./components/ProtectedRoute";
import CartDrawer from "./components/CartDrawer";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user } = useAuth();

  // =========================
  // USER ID
  // =========================
  const userId =
    user?.uid ||
    user?.email ||
    null;

  const [products, setProducts] = useState([]);

  // =========================
  // CART STATE
  // =========================
  const [cart, setCart] = useState([]);

  const [cartOpen, setCartOpen] = useState(false);

  // Used to make sure we don't
  // accidentally save the previous
  // user's cart for the new user.
  const [cartLoadedFor, setCartLoadedFor] =
    useState(null);

  // =========================
  // FETCH PRODUCTS
  // =========================
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(
          "Error fetching products:",
          error
        );
      });
  }, []);

  // =========================
  // LOAD USER'S CART
  // =========================
  useEffect(() => {
    // No user is logged in
    if (!userId) {
      setCart([]);
      setCartOpen(false);
      setCartLoadedFor(null);
      return;
    }

    // Create a unique key for this user
    const cartKey = `skymart_cart_${userId}`;

    const savedCart =
      localStorage.getItem(cartKey);

    if (savedCart) {
      try {
        const parsedCart =
          JSON.parse(savedCart);

        // Make sure the saved data is an array
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        } else {
          setCart([]);
        }
      } catch (error) {
        console.error(
          "Error loading user's cart:",
          error
        );

        setCart([]);
      }
    } else {
      // This user has never added anything
      setCart([]);
    }

    // Mark this user's cart as loaded
    setCartLoadedFor(userId);

  }, [userId]);

  // =========================
  // SAVE USER'S CART
  // =========================
  useEffect(() => {
    // Don't save when logged out
    if (!userId) {
      return;
    }

    // Don't save until this user's
    // cart has actually been loaded
    if (cartLoadedFor !== userId) {
      return;
    }

    const cartKey = `skymart_cart_${userId}`;

    localStorage.setItem(
      cartKey,
      JSON.stringify(cart)
    );

  }, [cart, userId, cartLoadedFor]);

  // =========================
  // ADD TO CART
  // =========================
  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct =
        currentCart.find(
          (item) => item.id === product.id
        );

      // Don't add duplicate product
      if (existingProduct) {
        return currentCart;
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // =========================
  // INCREASE / DECREASE
  // =========================
  const updateQuantity = (
    productId,
    change
  ) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.id !== productId) {
          return item;
        }

        const newQuantity =
          item.quantity + change;

        return {
          ...item,
          quantity: Math.max(
            1,
            newQuantity
          ),
        };
      })
    );
  };

  // =========================
  // REMOVE FROM CART
  // =========================
  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== productId
      )
    );
  };

  // =========================
  // CART ITEM COUNT
  // =========================
  const cartItemCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  // =========================
  // CART TOTAL
  // =========================
  const cartTotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.price) *
        item.quantity,
    0
  );

  // =========================
  // PROTECTED LAYOUT
  // =========================
  const ProtectedLayout = ({
    children,
  }) => {
    return (
      <>
        <Navbar
          cartItemCount={cartItemCount}
          onCartClick={() =>
            setCartOpen(true)
          }
        />

        {children}

        <CartDrawer
          cart={cart}
          isOpen={cartOpen}
          onClose={() =>
            setCartOpen(false)
          }
          updateQuantity={
            updateQuantity
          }
          removeFromCart={
            removeFromCart
          }
          cartTotal={cartTotal}
        />
      </>
    );
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">

        <Routes>

          {/* =========================
              LOGIN
          ========================= */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* =========================
              SIGNUP
          ========================= */}
          <Route
            path="/signup"
            element={<Signup />}
          />

          {/* =========================
              HOME
          ========================= */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ProtectedLayout>
                  <Home
                    products={products}
                  />
                </ProtectedLayout>
              </ProtectedRoute>
            }
          />

          {/* =========================
              SHOP
          ========================= */}
          <Route
            path="/shop"
            element={
              <ProtectedRoute>
                <ProtectedLayout>
                  <Shop
                    products={products}
                    cart={cart}
                    addToCart={addToCart}
                  />
                </ProtectedLayout>
              </ProtectedRoute>
            }
          />

          {/* =========================
              ABOUT
          ========================= */}
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <ProtectedLayout>
                  <About />
                </ProtectedLayout>
              </ProtectedRoute>
            }
          />

          {/* =========================
              UNKNOWN URL
          ========================= */}
          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />

        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;