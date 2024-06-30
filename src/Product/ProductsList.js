import React, { useState } from "react";

const ProductsList = () => {
  const [search, setSearch] = useState("");

  const searchProduct = products.filter((items) =>
    items.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <input
        type="searchbox"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Item.."
      />
      <table>
        <thead>
          <tr>
          <th>Sr. NO.</th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th>IN STOCK</th>
          </tr>
        </thead>
        <tbody>
          {searchProduct.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>
                <input type="checkbox" checked={item.inStock} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ProductsList;

const products = [
  {
    id: 1,
    category: "Sporting Goods",
    name: "Football",
    price: "$19.99",
    inStock: true,
  },
  {
    id: 2,
    category: "Sporting Goods",
    name: "Basketball",
    price: "$29.99",
    inStock: false,
  },
  {
    id: 3,
    category: "Sporting Goods",
    name: "Baseball",
    price: "$9.99",
    inStock: true,
  },
  {
    id: 4,
    category: "Electronics",
    name: "Samsung",
    price: "$599.99",
    inStock: true,
  },
  {
    id: 5,
    category: "Electronics",
    name: "Pixel",
    price: "$799.99",
    inStock: false,
  },
  {
    id: 6,
    category: "Electronics",
    name: "Nexus",
    price: "$499.99",
    inStock: true,
  },
];
