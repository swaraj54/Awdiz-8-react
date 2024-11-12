import { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../axiosConfig";
import { AuthContext } from "../context/AuthContext";

function CreateProduct() {
  const { state } = useContext(AuthContext);
  const router = useNavigate();
  const [productData, setProductData] = useState({
    productName: "",
    productCategory: "",
    productPrice: "",
    productQuantity: "",
    productImage: "",
  });
  console.log(productData, "productData");
  function handleChange(event) {
    // console.log(event.target.value, event.target.productName, "check");
    setProductData({
      ...productData,
      [event.target.name]: event.target.value,
    });
  }

  // localhost:8000/api/v1/auth/register

  async function handleSubmit(event) {
    event.preventDefault();
    if (!state?.user?.userId) {
      toast.error("Please login first");
      router("/login");
    }
    if (
      productData.productName &&
      productData.productCategory &&
      productData.productPrice &&
      productData.productQuantity &&
      productData.productImage
    ) {
      try {
        let response = await api.post("/product/create-product", {
          productData,
          userId: state?.user.userId,
        });
        if (response.data.success) {
          toast.success(response.data.message);
          router("/view-products");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("All fields are required.");
    }
  }
  return (
    <div>
      <h1>Create New Product</h1>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Type your productName.."
          name="productName"
          required
        />
        <br />
        <label>Product Category</label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Type your productCategory.."
          name="productCategory"
          required
        />
        <br />
        <label>Product Price </label>
        <br />
        <input
          onChange={handleChange}
          type="number"
          placeholder="Type your productPrice.."
          name="productPrice"
          required
        />
        <br />
        <label>Product Quantity </label>
        <br />
        <input
          onChange={handleChange}
          type="number"
          placeholder="Confirm your productPrice.."
          name="productQuantity"
          required
        />
        <br />
        <label>Product Image </label>
        <br />
        <input
          onChange={handleChange}
          type="url"
          placeholder="Type product image url"
          name="productImage"
          required
        />
        <br />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
}

export default CreateProduct;
