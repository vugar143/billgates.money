import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Product from "./Components/Product"
function App() {
  const getLocalItems = () => {
    let list = localStorage.getItem("lists")
    if (list) {
      return JSON.parse(localStorage.getItem("lists"))
    }
    else {
      return []
    }
  }
  const getLocal = () => {
    let mybasket = localStorage.getItem("basket")
    if (mybasket) {
      return JSON.parse(localStorage.getItem("basket"))
    }
    else {
      return []
    }
  }
  const [products, setProducts] = useState([
    {
      "id": 1,
      "name": "Big Mac",
      "price": 2,
      "image": "https://neal.fun/spend/images/big-mac.jpg"
    },
    {
      "id": 2,
      "name": "Flip Flops",
      "price": 3,
      "image": "https://neal.fun/spend/images/flip-flops.jpg"
    },
    {
      "id": 3,
      "name": "Coca-Cola Pack",
      "price": 5,
      "image": "https://neal.fun/spend/images/coca-cola-pack.jpg"
    },
    {
      "id": 4,
      "name": "Movie Ticket",
      "price": 12,
      "image": "https://neal.fun/spend/images/movie-ticket.jpg"
    },
    {
      "id": 5,
      "name": "Book",
      "price": 15,
      "image": "https://neal.fun/spend/images/book.jpg"
    },
    {
      "id": 6,
      "name": "Lobster Dinner",
      "price": 45,
      "image": "https://neal.fun/spend/images/lobster-dinner.jpg"
    },
    {
      "id": 7,
      "name": "Video Game",
      "price": 60,
      "image": "https://neal.fun/spend/images/video-game.jpg"
    },
    {
      "id": 8,
      "name": "Amazon Echo",
      "price": 99,
      "image": "https://neal.fun/spend/images/amazon-echo.jpg"
    },
    {
      "id": 9,
      "name": "Year of Netflix",
      "price": 100,
      "image": "https://neal.fun/spend/images/year-of-netflix.jpg"
    },
    {
      "id": 10,
      "name": "Air Jordans",
      "price": 125,
      "image": "https://neal.fun/spend/images/air-jordans.jpg"
    },
    {
      "id": 11,
      "name": "Airpods",
      "price": 199,
      "image": "https://neal.fun/spend/images/airpods.jpg"
    },
    {
      "id": 12,
      "name": "Gaming Console",
      "price": 299,
      "image": "https://neal.fun/spend/images/gaming-console.jpg"
    },
    {
      "id": 13,
      "name": "Drone",
      "price": 350,
      "image": "https://neal.fun/spend/images/drone.jpg"
    },
    {
      "id": 14,
      "name": "Smartphone",
      "price": 699,
      "image": "https://neal.fun/spend/images/smartphone.jpg"
    },
    {
      "id": 15,
      "name": "Bike",
      "price": 800,
      "image": "https://neal.fun/spend/images/bike.jpg"
    },
    {
      "id": 16,
      "name": "Kitten",
      "price": 1500,
      "image": "https://neal.fun/spend/images/kitten.jpg"
    },
    {
      "id": 17,
      "name": "Puppy",
      "price": 1500,
      "image": "https://neal.fun/spend/images/puppy.jpg"
    },
    {
      "id": 18,
      "name": "Auto Rickshaw",
      "price": 2300,
      "image": "https://neal.fun/spend/images/auto-rickshaw.jpg"
    },
    {
      "id": 19,
      "name": "Horse",
      "price": 2500,
      "image": "https://neal.fun/spend/images/horse.jpg"
    },
    {
      "id": 20,
      "name": "Acre of Farmland",
      "price": 3000,
      "image": "https://neal.fun/spend/images/acre-of-farmland.jpg"
    },
    {
      "id": 21,
      "name": "Designer Handbag",
      "price": 5500,
      "image": "https://neal.fun/spend/images/designer-handbag.jpg"
    },
    {
      "id": 22,
      "name": "Hot Tub",
      "price": 6000,
      "image": "https://neal.fun/spend/images/hot-tub.jpg"
    },
    {
      "id": 23,
      "name": "Luxury Wine",
      "price": 7000,
      "image": "https://neal.fun/spend/images/luxury-wine.jpg"
    },
    {
      "id": 24,
      "name": "Diamond Ring",
      "price": 10000,
      "image": "https://neal.fun/spend/images/diamond-ring.jpg"
    },
    {
      "id": 25,
      "name": "Jet Ski",
      "price": 12000,
      "image": "https://neal.fun/spend/images/jet-ski.jpg"
    },
    {
      "id": 26,
      "name": "Rolex",
      "price": 15000,
      "image": "https://neal.fun/spend/images/rolex.jpg"
    },
    {
      "id": 27,
      "name": "Ford F-150",
      "price": 30000,
      "image": "https://neal.fun/spend/images/ford-f-150.jpg"
    },
    {
      "id": 28,
      "name": "Tesla",
      "price": 75000,
      "image": "https://neal.fun/spend/images/tesla.jpg"
    },
    {
      "id": 29,
      "name": "Monster Truck",
      "price": 150000,
      "image": "https://neal.fun/spend/images/monster-truck.jpg"
    },
    {
      "id": 30,
      "name": "Ferrari",
      "price": 250000,
      "image": "https://neal.fun/spend/images/ferrari.jpg"
    },
    {
      "id": 31,
      "name": "Single Family Home",
      "price": 300000,
      "image": "https://neal.fun/spend/images/single-family-home.jpg"
    },
    {
      "id": 32,
      "name": "Gold Bar",
      "price": 700000,
      "image": "https://neal.fun/spend/images/gold-bar.jpg"
    },
    {
      "id": 33,
      "name": "McDonalds Franchise",
      "price": 1500000,
      "image": "https://neal.fun/spend/images/mcdonalds-franchise.jpg"
    },
    {
      "id": 34,
      "name": "Superbowl Ad",
      "price": 5250000,
      "image": "https://neal.fun/spend/images/superbowl-ad.jpg"
    },
    {
      "id": 35,
      "name": "Yacht",
      "price": 7500000,
      "image": "https://neal.fun/spend/images/yacht.jpg"
    },
    {
      "id": 36,
      "name": "M1 Abrams",
      "price": 8000000,
      "image": "https://neal.fun/spend/images/m1-abrams.jpg"
    },
    {
      "id": 37,
      "name": "Formula 1 Car",
      "price": 15000000,
      "image": "https://neal.fun/spend/images/formula-1-car.jpg"
    },
    {
      "id": 38,
      "name": "Apache Helicopter",
      "price": 31000000,
      "image": "https://neal.fun/spend/images/apache-helicopter.jpg"
    },
    {
      "id": 39,
      "name": "Mansion",
      "price": 45000000,
      "image": "https://neal.fun/spend/images/mansion.jpg"
    },
    {
      "id": 40,
      "name": "Make a Movie",
      "price": 100000000,
      "image": "https://neal.fun/spend/images/make-a-movie.jpg"
    },
    {
      "id": 41,
      "name": "Boeing 747",
      "price": 148000000,
      "image": "https://neal.fun/spend/images/boeing-747.jpg"
    },
    {
      "id": 42,
      "name": "Mona Lisa",
      "price": 780000000,
      "image": "https://neal.fun/spend/images/mona-lisa.jpg"
    },
    {
      "id": 43,
      "name": "Skyscraper",
      "price": 850000000,
      "image": "https://neal.fun/spend/images/skyscraper.jpg"
    },
    {
      "id": 44,
      "name": "Cruise Ship",
      "price": 930000000,
      "image": "https://neal.fun/spend/images/cruise-ship.jpg"
    },
    {
      "id": 45,
      "name": "NBA Team",
      "price": 2120000000,
      "image": "https://neal.fun/spend/images/nba-team.jpg"
    }
  ]
  )

  const [total, setTotal] = useState(0)
  const [basket, setBasket] = useState(getLocal);
  const addToBasket = (id) => {
    let c = basket.find((t) => t.id === id);
    if (c) {
      c.count++;
      setBasket([...basket]);
    } else {
      setBasket([
        ...basket,
        {
          id: id,
          count: 1,
        },
      ]);
    }
  };
  const removeFromBasket = (id) => {
    let c = basket.find((t) => t.id === id);
    c.count--;
    if (c.count <= 0) {
      setBasket([...basket.filter((a) => a.id !== id)]);
      return;
    }
    setBasket([...basket]);
  };
  const deleteProduct = (id) => {
    setProducts([...products.filter((a) => a.id !== id)])
    setBasket([...basket.filter((a) => a.id !== id)]);
    let result = confirm("Want to delete?");
  }

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) =>
        acc +
        products.find((t) => t.id === item.id).price * item.count, 0
      )
    )

  }, [basket])
  let balance = 10000000000
  // useEffect(()=>{
  //   localStorage.setItem('lists',JSON.stringify(products))},[products]
  // )
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket))
  }, [basket])

  // useEffect(() => {
  //   let basket_ = localStorage.getItem('basket');
  //   basket_ && setBasket(basket_)
  // }, [])

  const [filter, setFilter] = useState("")
  return (
    <div>
      <div className="bill">
        <img src="https://neal.fun/spend/billgates.jpg" alt="" />
        <h1>Spend Bill Gates' Money</h1>
      </div>
      <Header balance={balance - total}
      />
   
      <div className="myinput">
        <input onChange={(e) => setFilter(e.target.value)}
          value={filter}
          type="text"
          placeholder="search..." />
      </div>
      <section className="products">

        {products.length ? (products.filter((a) => a.name.toLowerCase().startsWith(filter.toLowerCase())).map((a) => (
          <Product
            deleteProduct={deleteProduct}
            balance={balance - total}
            basket={basket}


            removeFromBasket={removeFromBasket}
            key={a.id}
            addToBasket={addToBasket}
            product={a}
          ></Product>
        ))) : (
          <h1>Hecne tapilmadi</h1>
        )}
      </section>
    </div>
  );
}

export default App
