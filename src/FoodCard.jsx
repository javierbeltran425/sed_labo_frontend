import React, { useState } from 'react';

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import './ButtonDemo.css';
import './DialogDemo.css';

const FoodCard = () => {
    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayBasic2, setDisplayBasic2] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);
    const [displayMaximizable, setDisplayMaximizable] = useState(false);
    const [displayPosition, setDisplayPosition] = useState(false);
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [position, setPosition] = useState('center');

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
        'displayBasic2': setDisplayBasic2,
        'displayModal': setDisplayModal,
        'displayMaximizable': setDisplayMaximizable,
        'displayPosition': setDisplayPosition,
        'displayResponsive': setDisplayResponsive
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
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    return(
        <div className="flex flex-row justify-between w-4/5 bg-blue-300 m-5 rounded-full hover:scale-105 transform duration-500">
            <div className="flex w-full h-full justify-center items-center text-center">
                <p>
                    HOLA MUNDO
                </p>
            </div>
            <div className="flex flex-rows m-1">
                <Button icon="pi pi-user-edit" className="p-button-rounded p-button-help p-button-outlined" onClick={() => onClick('displayBasic')} />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined"  />

                <Dialog header="Header" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Dialog>
            </div>
        </div>
    )
}

export default FoodCard