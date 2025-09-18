import React from 'react'
import { Link } from 'react-router-dom'
import pesosLogo from '/src/assets/icones/pesos_logo.svg';


const Navbar = () => {
  return (
    <nav className=' backdrop-blur-xl mt-3 rounded-full  py-3 mx-[5%] text-sm shadow-lg text-noire flex justify-around items-center '>
        <img className='h-12 w-30'  src={pesosLogo} alt="" srcset="" />

        <ul className='flex gap-10 '>
            <li>
               <a href="">Home</a>
            </li>
            <li>
               <a href="">Historique</a>
            </li>
            <li>
               <a href="">Contact</a>
            </li>
        </ul>

        <div className="">
            <button className=''>Déconnexion</button>
        </div>
    </nav>
  )
}

export default Navbar
