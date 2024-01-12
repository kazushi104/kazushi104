import React from 'react';
import "./App.css"
import Cats from "./Cat/background.jpg";

export default function Home() {
  return (
    <main>
      <button className='button-1'> <a href="/Comment">commment </a></button>

      <button className='button-1'> <a href="/Shop">shop</a></button>

      <button className='button-1'><a href="/Refunds">refunds</a></button>

      <button className='button-1'><a href="/"> home </a></button>

      <button className='button-1'><a href="/Login"> Login </a></button>

    
     <button className='button-1'><a href="/Donate"> Donate </a></button>
   
       <img className="Kitty" src={Cats} />
    </main>
  );
}
