// import React from "react";
// import ReactDOM from "react-dom/client";

// const Pizza = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("p", {}, props.description),
//   ]);
// };

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Padre Gino's"),
//     React.createElement(Pizza, {
//       name: "The Pepperoni Pizza",
//       description: "Mozzarella Cheese, Pepperoni",
//     }),
//     React.createElement(Pizza, {
//       name: "The Hawaiian Pizza",
//       description: "Sliced Ham, Pineapple, Mozzarella Cheese",
//     }),
//     React.createElement(Pizza, {
//       name: "The Big Meat Pizza",
//       description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
//     }),
//     React.createElement(Pizza),
//     React.createElement(Pizza),
//   );
// };

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));

import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1 className="logo">Padre Gino's Pizza</h1>
      <Pizza
        name="Pepperoni"
        description="Mozzarella Cheese, Pepperoni"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="The Hawaiian Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="The Big Meat Pizza"
        description="Bacon, Pepperoni, Italian Sausage, Chorizo Sausage"
        image={"/public/pizzas/big_meat.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
