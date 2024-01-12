import React from "react";
import "./App.css";
import Cats from "./Cat/background.jpg";
import hellokitty from "./Cat/evil.png"
import ramencat from "./Cat/ramencat.png"
import whitebunny from "./Cat/whitebunny.png"
import yellowdog from "./Cat/yellowdog.png"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Shop() {

  return (
    <main>
     
      
     
      <br/>
      <button className="button-1">
        {" "}
        <a href="/Comment">Comment </a>
      </button>

      <button className="button-1">
        {" "}
        <a href="/Shop">Shop</a>
      </button>

      <button className="button-1">
        <a href="/Refunds">Refunds</a>
      </button>

      <button className="button-1">
        <a href="/"> Home </a>
      </button>

     

      <button className="button-1">
        <a href="/Donate"> Donate</a>
      </button>
      
      
       <img className="Kitty" src={Cats} />
       <img className="hellokitty" src={hellokitty} />
       <img className="ramencat" src={ramencat} />
       <img className="whitebunny" src={whitebunny} />
       <img className="yellowdog" src={yellowdog} />
      
      
     
       <p className="price"> $20</p>
        <p className="price1"> $30</p>
      <p className="price2"> $20</p>
       <p className="price3"> $20</p>




       <ShoppingCartIcon/>
    </main>
  );
}
