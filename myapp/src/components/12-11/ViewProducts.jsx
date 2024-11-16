import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../axiosConfig";
import { useNavigate } from "react-router-dom";

const ViewProducts = () => {
  const [selectedSortType, setSelectedSortType] = useState("null");
  console.log(selectedSortType, "selectedSortType");
  const router = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  async function getProducts() {
    try {
      const response = await api.get("/product/view-products");
      if (response.data.success) {
        setAllProducts(response.data.allProducts);
      }
    } catch (error) {
      toast.error(error?.response?.data.message);
    }
  }
  async function getSortedProducts() {
    try {
      const response = await api.post("/product/sort-products", {
        sortMethod: selectedSortType,
      });
      if (response.data.success) {
        setAllProducts(response.data.products);
      }
    } catch (error) {
      toast.error(error?.response?.data.message);
    }
  }

  async function filterProducts(category) {
    try {
      const response = await api.post("/product/filter-products", {
        category: category,
      });
      if (response.data.success) {
        setAllProducts(response.data.products);
      }
    } catch (error) {
      toast.error(error?.response?.data.message);
    }
  }

  useEffect(() => {
    if (allProducts?.length > 0 && categories.length == 0) {
      {
        /* // acc, [] , map  */
        const uniqueCategories = [
          ...new Set(allProducts.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
        // console.log(uniqueCategories, "uniqueCategories");
        // const uniqueCategories = allProducts.reduce((acc, product) => {
        //   if (!acc.includes(product.category)) {
        //     acc.push(product.category);
        //   }
        //   return acc;
        // }, []);
        // console.log(uniqueCategories, "uniqueCategories");
      }
    }
  }, [allProducts]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (selectedSortType !== "null") {
      getSortedProducts();
    }
  }, [selectedSortType]);
  return (
    <div>
      <h1>Products</h1>
      <h4>Sort</h4>
      <select onChange={(e) => setSelectedSortType(e.target.value)}>
        <option value="null">Select Sorting</option>
        <option value="lowToHigh">Price Low to High</option>
        <option value="highToLow">Price High to Low </option>
        <option value="newArrival">New Arrival</option>
      </select>
      <h4>Filter</h4>
      <p>Category</p>
      <select onChange={(e) => filterProducts(e.target.value)}>
        <option value="">Select Filter</option>
        {categories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {allProducts.map((itemDetails) => (
          <div
            style={{
              width: "18%",
              height: "450px",
              border: "2px solid black",
              marginBottom: "20px",
              cursor: "pointer",
            }}
            onClick={() => router(`/product/${itemDetails._id}`)}
          >
            <img
              style={{ width: "100%", height: "60%" }}
              src={itemDetails.image}
            />
            <h2>Name: {itemDetails.name}</h2>
            <h3>Price: {itemDetails.price}/-</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProducts;
