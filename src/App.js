import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './ButtonDemo.css';

import axios from 'axios';

import FoodCard  from './FoodCard';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  const [food, setFood] = useState('');

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
            onClick={e =>{
                axios.post('https://localhost:3000/food/register',
                  {
                    name: food
                  }
                )
                .then(res => {
                  console.log(res)
                })
                .catch(err => {
                  console.log(err)
                })
              }
            }
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
