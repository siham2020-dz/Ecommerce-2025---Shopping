import React from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { IoIosClose } from "react-icons/io";
import {IoIosSearch }from "react-icons/io";
import { useState } from 'react';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props,ref)
     {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const CountryDropdown =()=>{
    const[isOpenModal, setisOpenModal]=useState(false)
    return(
        <>
       <Button className="countryDrop" onClick={()=>setisOpenModal(true)}>
                    <div className="info d-flex flex-column">
                        <span className='label'>Votre localisation </span>
                        <span className='name'>France</span>
                    </div>
                    <span className='ml-auto'><FaAngleDown /></span>

        </Button>

        <Dialog  open={isOpenModal} onClose={()=>setisOpenModal(false)}className='locationModal'TransitionComponent={Transition}>
            <h4 className='mb-0'>Choisissez votre lieu de livraison </h4>
            <p>Entrez votre adresse et nous vous préciserons votre région.</p>
            <Button className='close_' onClick={()=>setisOpenModal(false)} ><IoIosClose /></Button>
            <div className="headerSearch w-100">
                <input type='text' placeholder="Rechercher votre région ..." />
                <Button >
                        <IoIosSearch />
                </Button>
            </div>
            <ul className='countryList mt-3'>
                <li><Button onClick={()=>setisOpenModal(false)}>Paris</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Evry</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Paris</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Evry</Button></li>

            </ul>
               
        </Dialog>
        </>
    )
    }
    export default CountryDropdown;