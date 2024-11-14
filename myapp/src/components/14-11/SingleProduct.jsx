import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../axiosConfig";
import toast from "react-hot-toast";

const SingleProduct = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState({});

  const getSinlgeProductData = async () => {
    try {
      const response = await api.post(`/product/single-product/${productId}`);
      if (response.data.success) {
        console.log(response.data.productData,"response.data.productData")
        setProductData(response.data.productData);
      }
    } catch (error) {
      toast.error(error?.response?.data.message);
    }
  };
  useEffect(() => {
    if (productId) {
      getSinlgeProductData();
    }
  }, [productId]);

  return (
    <div>
      <div
        style={{
          width: "18%",
          height: "450px",
          border: "2px solid black",
          marginBottom: "20px",
          cursor: "pointer",
          margin: "auto",
        }}
      >
        <img style={{ width: "100%", height: "60%" }} src={productData.image} />
        <h2>Name: {productData.name}</h2>
        <h3>Price: {productData.price}/-</h3>
      </div>
    </div>
  );
};

export default SingleProduct;
