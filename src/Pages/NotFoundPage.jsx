import React from 'react'
import { Link } from 'react-router-dom';
import logo404 from '../assets/icones/404.svg'

const NotFoundPage = () => {
  return (
    <div className=' flex flex-col  justify-center items-center '>
       <div className="overflow-hidden w-96 h-50">
          <img className='w-full h-full  ' src={logo404} alt="404 not found" />
       </div>
       <div className="flex flex-col justify-center items-center gap-10  ">
         <h1 className='text-neutral-70  text-2xl md:text-3xl font-bold '>Pages introuvable</h1>
         <Link className=" bg-bg-secondaire text-blanc p-6 rounded-md text-md font-bold" to='/'>Retourner à la Page D'accueil</Link>
      </div>
    </div>
  )
}

export default NotFoundPage
