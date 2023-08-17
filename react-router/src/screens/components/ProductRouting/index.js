import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../Helpers/AppConstant";

const ProductRouting = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        setProduct(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
    return () => {
      console.log("unmount");
    };
  }, []);
  return (
    <>
      <h2>ProductRouting</h2>

      {product.map((item, index) => {
        return (
          <Link to={`${item.id}`} key={index}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding:'2%',
                border: '2px solid black',
                margin:5               
              }}
            >
                <img src={item.image} width={150} height={150} />        
                <h2>{item.title}</h2>
                <h3>{item.category}</h3>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ProductRouting;
