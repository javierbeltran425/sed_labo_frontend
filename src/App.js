import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './ButtonDemo.css';

import axios from 'axios';
import { useMutation } from 'react-query'

import FoodCard  from './FoodCard';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  const [food, setFood] = useState('');

  const registerClick = async () => {
    console.log(food)
    const url = 'http://localhost:3000/food/register';
    const data = {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: food}),
    };

    try {
      const res = await fetch(url, data);
      console.log(res);

      if (res.status === 200) {
        setFood("");
        getFood();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getFood = async () => {
    const url = 'https://localhost:3000/food/';
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-row w-screen h-screen bg-black">
      <div className="flex flex-row justify-center items-center w-1/2">
        <div className="flex flex-col justiy-center items-center card">
          <h1 className="text-3xl font-bold text-white">Agregar comidas</h1>
          <span className="p-float-label m-6">
            <InputText id="food" value={food} onChange={(e) => setFood(e.target.value)} />
            <label htmlFor="food">Ingrese una comida</label>
          </span>
          <Button label="Registrar" className="p-button-rounded" 
            onClick={registerClick}
          />
        </div>

      </div>
      <div className="flex flex-col items-center w-1/2 bg-gray-900 ">
        <FoodCard />
      </div>
    </div>
  );
}

export default App;
