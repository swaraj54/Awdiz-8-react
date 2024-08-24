import React, { useState } from "react";

const Mapping2 = () => {
  const [products, setProducts] = useState([
    {
      name: "Tshirt",
      price: 1000,
      size: "M",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Shirt",
      price: 4000,
      size: "L",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Jeans",
      price: 5000,
      size: "34",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Tshirt",
      price: 1000,
      size: "M",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Shirt",
      price: 4000,
      size: "L",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Jeans",
      price: 5000,
      size: "34",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Tshirt",
      price: 1000,
      size: "M",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Shirt",
      price: 4000,
      size: "L",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Jeans",
      price: 5000,
      size: "34",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Tshirt",
      price: 1000,
      size: "M",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Shirt",
      price: 4000,
      size: "L",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Jeans",
      price: 5000,
      size: "34",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Tshirt",
      price: 1000,
      size: "M",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Shirt",
      price: 4000,
      size: "L",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Jeans",
      price: 5000,
      size: "34",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Tshirt",
      price: 1000,
      size: "M",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Shirt",
      price: 4000,
      size: "L",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Jeans",
      price: 5000,
      size: "34",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Tshirt",
      price: 1000,
      size: "M",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Shirt",
      price: 4000,
      size: "L",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Jeans",
      price: 5000,
      size: "34",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Tshirt",
      price: 1000,
      size: "M",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Shirt",
      price: 4000,
      size: "L",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Jeans",
      price: 5000,
      size: "34",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
  ]);
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
        {products.map((itemDetails) => (
          <div
            style={{
              width: "18%",
              height: "450px",
              border: "2px solid black",
              marginBottom: "20px",
            }}
          >
            <img
              style={{ width: "100%", height: "60%" }}
              src={itemDetails.image}
            />
            <h2>Name {itemDetails.name}</h2>
            <h3>Price {itemDetails.price}</h3>
            <h3>Size {itemDetails.size}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mapping2;
