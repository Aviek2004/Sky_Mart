import React from "react";

const CartDrawer = ({
  cart = [],
  isOpen,
  onClose,
  updateQuantity,
  removeFromCart,
  cartTotal,
}) => {

  if (!isOpen) {
    return null;
  }

  return (
    <>

      {/* =========================
          BACKDROP
      ========================= */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]"
      />

      {/* =========================
          CART DRAWER
      ========================= */}
      <div className="fixed top-0 right-0 h-screen w-full sm:w-[400px] bg-zinc-950 text-white z-[100] shadow-2xl flex flex-col">

        {/* =========================
            HEADER
        ========================= */}
        <div className="flex items-center justify-between px-8 py-8 border-b border-zinc-700">

          <div className="flex items-center gap-4">

            <span className="text-lime-400 text-3xl">
              🛍
            </span>

            <h2 className="text-3xl font-semibold">
              Cart
            </h2>

            <span className="bg-lime-950 text-lime-400 px-4 py-1.5 rounded-full font-semibold">
              {cart.reduce(
                (total, item) =>
                  total + item.quantity,
                0
              )}{" "}
              {cart.reduce(
                (total, item) =>
                  total + item.quantity,
                0
              ) === 1
                ? "item"
                : "items"}
            </span>

          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-4xl leading-none transition"
          >
            ×
          </button>

        </div>

        {/* =========================
            CART ITEMS
        ========================= */}
        <div className="flex-1 overflow-y-auto px-8 py-6">

          {cart.length === 0 ? (

            <div className="h-full flex flex-col items-center justify-center text-center">

              <div className="text-6xl mb-5">
                🛒
              </div>

              <h3 className="text-2xl font-semibold">
                Your cart is empty
              </h3>

              <p className="text-gray-500 mt-2">
                Add some products to your cart.
              </p>

            </div>

          ) : (

            <div className="space-y-5">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="border border-gray-300 rounded-3xl p-5"
                >

                  <div className="flex gap-5">

                    {/* IMAGE */}
                    <div className="w-28 h-28 bg-white rounded-2xl flex-shrink-0 overflow-hidden flex items-center justify-center p-2">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />

                    </div>

                    {/* DETAILS */}
                    <div className="flex-1 min-w-0">

                      <h3 className="text-xl text-gray-300 font-medium line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-2xl font-bold text-lime-400 mt-2">
                        $
                        {Number(
                          item.price
                        ).toFixed(2)}
                      </p>

                      <p className="text-gray-600 mt-1">
                        $
                        {Number(
                          item.price
                        ).toFixed(2)}{" "}
                        each
                      </p>

                    </div>

                  </div>

                  {/* CONTROLS */}
                  <div className="flex items-center justify-between mt-5">

                    <div className="flex items-center gap-5">

                      {/* MINUS */}
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            -1
                          )
                        }
                        className="w-11 h-11 border border-zinc-800 rounded-xl text-2xl text-gray-300 hover:border-lime-400 hover:text-lime-400 transition"
                      >
                        −
                      </button>

                      {/* QUANTITY */}
                      <span className="text-xl font-semibold min-w-5 text-center">
                        {item.quantity}
                      </span>

                      {/* PLUS */}
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            1
                          )
                        }
                        className="w-11 h-11 border border-zinc-800 rounded-xl text-2xl text-gray-300 hover:border-lime-400 hover:text-lime-400 transition"
                      >
                        +
                      </button>

                    </div>

                    {/* DELETE */}
                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="text-red-500 hover:text-red-400 text-2xl transition"
                      title="Remove"
                    >
                      🗑
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

        {/* =========================
            FOOTER
        ========================= */}
        {cart.length > 0 && (

          <div className="border-t border-zinc-700 px-8 py-1 h-35">

            {/* TOTAL */}
            <div className="flex items-center justify-between mb-2">

              <span className="text-gray-400 text-xl mt-4">
                Total
              </span>

              <span className="text-white text-4xl font-bold mt-4">
                $
                {cartTotal.toFixed(2)}
              </span>

            </div>

            {/* CHECKOUT */}
            <button
              onClick={() => {
                alert("Checkout coming soon!");
              }}
              className="h-15 w-80 bg-lime-400 text-black font-semibold text-xl py-5 rounded-3xl hover:bg-lime-300 transition flex items-center justify-center gap-4"
            >
              Checkout
              <span className="text-3xl">
                →
              </span>
            </button>

          </div>

        )}

      </div>

    </>
  );
};

export default CartDrawer;