import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";

const Heading = () => <h1>heading comes </h1>;

/**
 * Header
 *  - logo
 *  - nav-items
 *
 * Body
 *  - search
 *  - restaurantContainer - image , name of the restaurant and rating etc
 *  - restaurantCard
 * Footer
 *  - copyright
 *  - links
 *  - address
 *  - contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
