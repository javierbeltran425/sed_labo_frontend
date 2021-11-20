import React, { useState } from 'react';

import axios from 'axios'

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

import './ButtonDemo.css';
import './DialogDemo.css';

const FoodCard = ({ foodName }) => {
    const [displayBasic, setDisplayBasic] = useState(false);
    const [position, setPosition] = useState('center');

    const [food, setFood] = useState('');

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="Guardar" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    return(
        <div className="flex flex-row justify-between w-4/5 bg-blue-300 m-5 rounded-full hover:scale-105 transform duration-500">
            <div className="flex w-full h-full justify-center items-center text-center">
                <p>
                    {foodName}
                </p>
            </div>
            <div className="flex flex-rows m-1">
                <Button icon="pi pi-user-edit" className="p-button-rounded p-button-help p-button-outlined" onClick={() => onClick('displayBasic')} />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined"  />

                <Dialog header="Edita esta comida" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                    <span className="p-float-label m-6">
                        <InputText className="w-full" id="food" value={food} onChange={(e) => setFood(e.target.value)} />
                        <label htmlFor="food">Ingrese una comida</label>
                    </span>
                </Dialog>
            </div>
        </div>
    )
}

export default FoodCard