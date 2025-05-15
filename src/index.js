import React from "react";
import ReactDOM from "react-dom/client"; // 注意这里引入的是 /client
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header></Header>
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "36px", textTransform: "uppercase" };
  // const style = {};

  return (
    <header className="header">
      <h1>Fast react Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine.6 creative dishes to choose from. All from our
        stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((piza) => (
          <Pizza Obj={piza} key={piza.name} />
        ))}
      </ul>
    </main>
  );
}

function Pizza({ Obj }) {
  return (
    <li className={`pizza ${Obj.soldOut ? "sold-out" : ""}`}>
      <img src={Obj.photoName} alt={Obj.name} />
      <h3>{Obj.name}</h3>
      <p>{Obj.ingredients}</p>
      <span>{Obj.soldOut ? "Sold out" : Obj.price + 3}</span>
    </li>
  );
}

function Footer() {
  const Time = new Date().getHours();
  const openHour = 10;
  const closedHour = 20;
  const isOpen = Time >= openHour && Time <= closedHour;

  // if (Time >= openHour && Time <= closedHour) alert("We are opening");
  // else alert("we now closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order oh={openHour} ch={closedHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closedHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ oh, ch }) {
  return (
    <div className="order">
      <p>
        We are open from{oh}:00 until {ch}:00
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
