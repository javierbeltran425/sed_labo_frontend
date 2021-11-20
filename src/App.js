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
  const [aux, setAux] = useState()
  
  let foodList
  
  
  async function registerClick(e) {
    e.preventDefault()
      
    await axios.post('http://localhost:3000/food/register', { name: food })
      .then((res) => {
        if( res.status === 201 ){
          console.log(res)
          getFood()
        }
      })
      .catch((err) => {
        console.log(err)
      })
  };

  let content = []
  async function getFood() {
    
    foodList = await axios.get('http://localhost:3000/food/')
      .then((res) => {
        if(res.status === 200) {
          console.log(res)
          return res.data.food
        }
      })
      .catch((err) => {
        console.log(err)
      })
      
      console.log(foodList)

      if(foodList.length > 0){
        console.log(foodList)
        for(let i = 0 ; i < foodList.length ; i++){
          content[i] = (<FoodCard foodName={foodList[i].name} />)
        }
      }
      setAux(content)
      console.log(aux)
  }
  
  let contentAux = aux

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
      <div className="flex flex-col items-center w-1/2 bg-gray-900 overflow-auto">
        {contentAux}
      </div>
    </div>
  );
}

export default App;
