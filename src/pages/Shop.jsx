import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Hero1 from "../components1/Hero1";
import ProductCard from "../components1/ProductCard";
import Footer1 from "../components1/Footer1";

const Shop = ({
  products = [],
  cart = [],
  addToCart,
}) => {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const category =
    searchParams.get("category") || "";

  const search =
    searchParams.get("search") || "";

  const [sort, setSort] =
    useState("featured");

  // =========================
  // FILTER PRODUCTS
  // =========================
  let filteredProducts = products.filter(
    (product) => {

      const productCategory =
        product.category?.toLowerCase() || "";

      const selectedCategory =
        category.toLowerCase();

      let categoryMatch = true;

      if (selectedCategory === "electronics") {
        categoryMatch =
          productCategory === "electronics";
      }

      else if (selectedCategory === "clothing") {
        categoryMatch =
          productCategory === "men's clothing" ||
          productCategory === "women's clothing";
      }

      else if (selectedCategory === "accessories") {
        categoryMatch =
          productCategory === "jewelery" ||
          productCategory === "jewelry";
      }

      else if (selectedCategory === "furniture") {
        categoryMatch =
          productCategory === "furniture";
      }

      else if (selectedCategory === "home") {
        categoryMatch =
          productCategory === "home";
      }

      else if (selectedCategory === "sports") {
        categoryMatch =
          productCategory === "sports";
      }

      const searchMatch =
        product.title
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        product.description
          ?.toLowerCase()
          .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    }
  );

  // =========================
  // SORT
  // =========================
  if (sort === "low") {
    filteredProducts =
      [...filteredProducts].sort(
        (a, b) =>
          Number(a.price) - Number(b.price)
      );
  }

  if (sort === "high") {
    filteredProducts =
      [...filteredProducts].sort(
        (a, b) =>
          Number(b.price) - Number(a.price)
      );
  }

  // =========================
  // CATEGORY CHANGE
  // =========================
  const handleCategoryChange = (
    newCategory
  ) => {
    const params = {};

    if (newCategory !== "all") {
      params.category = newCategory;
    }

    if (search) {
      params.search = search;
    }

    setSearchParams(params);
  };

  // =========================
  // SEARCH CHANGE
  // =========================
  const handleSearchChange = (value) => {
    const params = {};

    if (category) {
      params.category = category;
    }

    if (value.trim() !== "") {
      params.search = value;
    }

    setSearchParams(params);
  };

  // =========================
  // CLEAR FILTER
  // =========================
  const clearFilters = () => {
    setSearchParams({});
    setSort("featured");
  };

  return (
    <div className="min-h-screen bg-black text-white">

      <Hero1
        category={category}
        search={search}
        sort={sort}
        onCategoryChange={
          handleCategoryChange
        }
        onSearchChange={
          handleSearchChange
        }
        onSortChange={setSort}
        onClear={clearFilters}
        productCount={
          filteredProducts.length
        }
      />

      <ProductCard
        products={filteredProducts}
        cart={cart}
        addToCart={addToCart}
      />

      <Footer1 />

    </div>
  );
};

export default Shop;