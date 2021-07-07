import React from "react";
import { Link } from "./Link";
import { useParams } from "./Routes";
import { Route } from "./Route";
import { Router } from "./Router";
import { Routes } from "./Routes";
function Products() {
  return (
    <>
      <h4>Example Products</h4>
      <ul>
        <li>
          <Link to="/products/1">Product One</Link>
        </li>
        <li>
          <Link to="/products/2">Product Two</Link>
        </li>
      </ul>
    </>
  );
}

function Product() {
  const { id } = useParams();
  return (
    <>
      <h4>Viewing product {id}</h4>
      <Link to="/">Back to all products</Link>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products/:id">
          <Product />
        </Route>
        <Route path="/">
          <Products />
        </Route>
      </Routes>
    </Router>
  );
}
