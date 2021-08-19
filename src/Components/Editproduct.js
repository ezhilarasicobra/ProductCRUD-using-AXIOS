import React, { useEffect } from 'react'
import{ useContext } from "react";
import { useState } from "react";
import {useHistory} from "react-router-dom";
import ProductContext from "./productContext";
const Editproduct = (props) => {
  const [productname, setProductname] = useState("");
  const [price, setPrice] = useState("");

useEffect(() => {
  let productData= productContext.productList[props.match.params.id-1]
  setProductname(productData.productname);
  setPrice(productData.price)},[])
  const productContext = useContext(ProductContext);
  const history=useHistory()

  let handlesubmit = (e) => {
    e.preventDefault();
    //alert(`hello ${username}`)
    const myData = {
      productname,
      price
    };
    //console.log(myData)
    //console.log(userContext.userList)
    productContext.productList[props.match.params.id-1]=myData
    productContext.setProductList([...productContext.productList]);
    history.push("/user")
  }
  return ( 
<div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Create Product</h1>
      </div>
      <div className="container">
        <form onSubmit={handlesubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Product Name</label>
              <input
                type="text"
                value={productname}
                onChange={(e) => {
                  setProductname(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label>Price</label>
              <input
                type="text"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <input
              type="submit"
              value="Update"
              className="btn btn-primary mt-3"
              onSubmit={handlesubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
 
export default Editproduct;