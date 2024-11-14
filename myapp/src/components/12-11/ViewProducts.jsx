import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../axiosConfig";
import { useNavigate } from "react-router-dom";

const ViewProducts = () => {
  const router = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
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
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>Products</h1>
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
