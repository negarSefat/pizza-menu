import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css'; //don't forget the quotes

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

//main component
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzanum = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzanum > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza, index) => (
            <Pizza key={index} pizzaObject={pizza} /> //pizzaObject as a property
          ))}
        </ul>
      ) : null}

      {/* <ul>
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} pizzaObject={pizza} />
        ))}
      </ul> */}
      {/* <Pizza
        name="spinaci pizza"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoURL="pizzas\spinaci.jpg"
        price={10}
      />
      <Pizza
        name="pizza funghi"
        ingredients="mushroom,tomato"
        price={20}
        photoURL="pizzas\funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  // console.log(props);
  //OR const { name, ingredients, price } = props;
  return (
    <li>
      <div className={`pizza ${pizzaObject.soldOut ? 'sold-out' : ''}`}>
        <img src={pizzaObject.photoName} alt={pizzaObject.name}></img>
        <div>
          <h3>{pizzaObject.name}</h3>
          <p>{pizzaObject.ingredients}</p>
          <span>{pizzaObject.soldOut ? 'SOLD OUT' : pizzaObject.price}</span>
        </div>
      </div>
    </li>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza co.</h1>
    </header>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert('We are currently open 😍');
  // } else alert('Sorry , we are closed now!🙁');
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}.We are currently open! */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} /> //defined as a property
      ) : (
        <p>
          we are happy to see you between {openHour}:00 - {closeHour}:00 .
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  //const {closeHour,openHour}=props    ANOTHER WAY OF DESTRUCTURING
  return (
    <div className="order">
      <p>
        We are open from {openHour}:00 to {closeHour}:00. Come to visit us
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
//render the root
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); //strict mode
