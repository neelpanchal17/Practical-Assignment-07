import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Order from "./components/Order";

function CartApp() {
  const Product = [
    "Orange Juice",
    "Tea",
    "Coffee",
    "Breakfast Combo",
    "Lunch Comob",
    "Dinner Comobo"
  ];
  const Qty = [0, 0, 0, 0, 0, 0];
  const Price = [80, 20, 70, 100, 300, 450];

  const [CountQty, setQty] = React.useState(Qty);
  const [] = React.useState(0);

  var addItem = (index) => {
    setQty(CountQty.map((q, i) => (i == index ? q + 1 : q)));
  };

  var removeItem = (index) => {
    setQty(CountQty.map((q, i) => (i == index && q > 0 ? q - 1 : q)));
  };

  var totQty = () => {
    var total = 0;
    CountQty.forEach((q) => {
      total = total + q;
    });
    return total;
  };

  var totalRs = () => {
    var total = 0;
    CountQty.forEach((q, index) => {
      total = total + q * Price[index];
    });
    return total;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={React.createElement(
            "div",
            null,
            Product.map((name, index) =>
              React.createElement(
                "div",
                { key: index },
                React.createElement(
                  "h3",
                  null,
                  name,
                  "  ",
                  " Qty : ",
                  CountQty[index],
                  " Price : ",
                  Price[index]
                ),
                React.createElement(
                  "button",
                  { onClick: () => addItem(index) },
                  "Buy Now",
                  "   "
                ),
                React.createElement(
                  "button",
                  { onClick: () => removeItem(index) },
                  "Remove"
                )
              )
            ),
            React.createElement("h2", null, "Total Quantity : ", totQty()),
            React.createElement("h2", null, "Total Bill : ", totalRs()),
            <Footer />
          )}
        />
        <Route path="/Order" element={<Order />} />
      </Routes>
    </Router>
  );
}
export default CartApp;
