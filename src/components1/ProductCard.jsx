import React from "react";

const FALLBACK_IMAGE =
  "https://via.placeholder.com/300x300?text=No+Image";

const ProductCard = ({
  products = [],
  cart = [],
  addToCart,
}) => {

  // Check if product is already in cart
  const isInCart = (productId) => {
    return cart.some(
      (item) => item.id === productId
    );
  };

  return (
    <div className="p-8">

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {products.map((product) => {

          const added = isInCart(product.id);

          return (
            <div
              key={product.id}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-lime-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Product Image */}
              <div className="h-64 bg-white flex items-center justify-center p-6 relative overflow-hidden">

                <img
                  src={
                    product.image ||
                    FALLBACK_IMAGE
                  }
                  alt={
                    product.title ||
                    "Product image"
                  }
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      FALLBACK_IMAGE;
                  }}
                  className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
                />

                {/* Category */}
                <span className="absolute top-3 left-3 bg-black text-lime-400 text-xs font-semibold px-3 py-1 rounded-full">
                  {product.category ||
                    "Product"}
                </span>

              </div>

              {/* Product Details */}
              <div className="p-5">

                {/* Title */}
                <h2 className="text-white font-semibold text-lg line-clamp-2 min-h-14">
                  {product.title ||
                    "Untitled Product"}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm mt-3 line-clamp-2">
                  {product.description ||
                    "No description available."}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-4">

                  <div className="flex text-yellow-400">
                    {"★".repeat(
                      Math.round(
                        product.rating?.rate ||
                          0
                      )
                    )}
                  </div>

                  <span className="text-gray-500 text-sm">
                    {product.rating?.rate ||
                      0}{" "}
                    (
                    {product.rating?.count ||
                      0}
                    )
                  </span>

                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-5">

                  <div>
                    <p className="text-xs text-gray-500">
                      Price
                    </p>

                    <p className="text-2xl font-bold text-lime-400">
                      $
                      {Number(
                        product.price || 0
                      ).toFixed(2)}
                    </p>
                  </div>

                  {/* ADD / ADDED */}
                  <button
                    type="button"
                    disabled={added}
                    onClick={() =>
                      !added &&
                      addToCart(product)
                    }
                    className={
                      added
                        ? "bg-green-950 text-green-400 border border-green-800 font-semibold px-4 py-2 rounded-lg cursor-default transition-colors"
                        : "bg-lime-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-lime-300 transition-colors"
                    }
                  >
                    {added ? (
                      <span className="flex items-center gap-2">
                        ✓ Added
                      </span>
                    ) : (
                      "Add"
                    )}
                  </button>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default ProductCard;