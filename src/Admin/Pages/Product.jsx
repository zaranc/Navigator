
import React, { useEffect, useRef, useState } from "react";
import { base_url, get_product, post_product } from "../../constant";
import { add_data, get_data } from "../../Api/api";
import Producttable from "../Body/Producttable";
import { Switch } from "@mui/material";
import axios from "axios";

const Product = () => {
  //all products here
  const [product, setproduct] = useState([]);

  let productName = useRef();
  let price = useRef();
  let desc = useRef();

  //add product
  async function addProduct() {
    let productt = {
      productName: productName.current.value,
      productImage:
        "https://lh3.googleusercontent.com/spp/AOgFAqPh9jTNvKISw5Shg1KOa_4vHLYeXvxThMOPm5Ba7tBd91LYKogpRI95BrbYrzYJDgbUeW9Pz9EMQV8P99zIDSfbgK34cL5b57G9O7f2KQcpLHV2Jh8lMxWqkUW9lkiDQlBD8i8mqvpZEm4WF42p6I-eGSVozO-3q4gjzviai4SHWLofwndIsaPl7ERkvDr0U-Yfn0KJEvg=s512-rw-pd-pc0x00ffffff",
      price: price.current.value,
      desc: desc.current.value,
      available: true,
    };

    let res = await add_data(base_url, post_product, productt);
    console.log(res, "product");
    setproduct([...product, res.data]);
  }

  let getProduct = async () => {
    let res = await get_data(base_url, get_product);
    console.log(res, "get product");
    setproduct(res.data);
  };

  //switch
  let handleSwitch = async (id, available, index) => {
    console.log(available);

    let data = product[index];
    console.log(data);
    await axios.put(`http://localhost:3001/products/${data.id}`, {
      ...data,
      available,
    });

    setproduct(
      product.map((val, ind) => (val.id === id ? { ...data, available } : val))
    );

    // console.log(res);
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(product, "product");

  return (
    <div className="row">
      <div className="col-md-4">
        <div class="card m-auto" style={{ width: "18rem" }}>
          <div class="card-body">
            <div class="form-group">
              <label for="email">Product Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                aria-describedby="name"
                placeholder="Enter name"
                ref={productName}
              />
            </div>

            <div class="form-group">
              <label for="email">Price</label>
              <input
                type="number"
                class="form-control"
                id="price"
                aria-describedby="price"
                placeholder="Enter price"
                ref={price}
              />
            </div>
            <div class="form-group">
              <label for="desc">Description</label>
              <input
                type="text"
                class="form-control"
                id="desc"
                aria-describedby="desc"
                placeholder="Enter Description"
                ref={desc}
              />
            </div>

            <button type="submit" class="btn btn-primary" onClick={addProduct}>
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-8">
        {/* <Producttable product={product} /> */}

        <table class="table ">
          <thead class="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">product Image</th>
              <th scope="col">product Name</th>
              <th scope="col">price</th>
              <th scope="col">Description</th>
              <th scope="col">available</th>
            </tr>
          </thead>
          <tbody>
            {product?.map((val, ind) => {
              return (
                <tr>
                  <td>
                    <b>{val.id}</b>
                  </td>
                  <td>
                    <img src={val.productImage} width={70} height={70} />
                  </td>
                  <td>{val.productName}</td>
                  <td>{val.price}</td>
                  <td>{val.desc}</td>
                  <td>
                    <Switch
                      checked={val.available}
                      onChange={(e) =>
                        handleSwitch(val.id, e.target.checked, ind)
                      }
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
