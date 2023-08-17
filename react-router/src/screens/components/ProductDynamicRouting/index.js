import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DynamicRouting = () => {
  const params = useParams();
  const [productId, setProductByID] = useState({});
  const [error, setError] = useState("");
  console.log(params);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${params.id}`
        );
        console.log(response.data);
        setProductByID(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
    return () => {};
  }, []); // The empty array means the effect runs only once, on mount.

  return (
    <>
      <h1>Dynamic Routing</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2%",
          border: "2px solid black",
          margin: 55,
        }}
      >
        <img src={productId.image} width={150} height={150} />
        <h3>
          Product Title
          <br />
          {productId.title}
        </h3>
        <h3>
          Product Price
          <br />
          {productId.price}
        </h3>
        <h3>
          Product Description
          <br /> {productId.description}
        </h3>
        <h3>
          {" "}
          Product Category
          <br />
          {productId.category}
        </h3>
      </div>
    </>
  );
};

export default DynamicRouting;
