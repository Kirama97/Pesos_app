import React from 'react'
import pesosLogoVerticale from '/src/assets/icones/pesos_logo_white_vertical.svg';
import { FaHome } from 'react-icons/fa';
import { FaHistory } from 'react-icons/fa';
import { BiHelpCircle } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';


const asideBar = () => {
  return (
    <div className='rounded-xl flex flex-col justify-between  h-full bottom-3 bg-bg-primaire py-5 text-white '>

        <img className='h-10 w-15 mx-auto'  src={pesosLogoVerticale} alt="" srcset="" />
      

            <div className="icons flex items-center gap-3  flex-col mt-10">
                           
                    <div title='home' className="w-10 h-8 duration-300 group cursor-pointer border-2  border-bg-secondaire  rounded-full bg-bg-secondaire hover:bg-bg-primaire transtion-10 flex items-center justify-center "> 
                                 <FaHome className="group-hover:text-bg-secondaire  w-4 h-4 text-blanc" />
                    </div>
         
                    <div title='Historique' className="w-10 h-8 overflow-hidden duration-30 group cursor-pointer border-2 bg-neutral-200 border-bg-blanc  rounded-full backdrop-blur-sm hover:bg-bg-primaire transtion-10 flex items-center justify-center "> 
                                 <FaHistory className=' group-hover:text-bg-secondaire  w-4 h-5 text-neutral-600'/>
                                   
                    </div>
         
                    <div title='Aide' className="w-10 h-8 overflow-hidden duration-30 group cursor-pointer border-2 bg-neutral-200 border-bg-blanc  rounded-full backdrop-blur-sm hover:bg-bg-primaire transtion-10 flex items-center justify-center "> 
                             
                                 <BiHelpCircle className="group-hover:text-bg-secondaire  w-5 h-5 text-neutral-600"/>
                                
                    </div>
                       
              </div>


             

               <div className="icons flex items-center gap-3  flex-col mt-10">
                           
                   
         
                    <div className="w-10 h-8 overflow-hidden duration-30 group cursor-pointer border-2 bg-neutral-200 border-bg-blanc  rounded-full backdrop-blur-sm hover:bg-bg-primaire transtion-10 flex items-center justify-center "> 
                                 <AiOutlineSetting className=' group-hover:text-bg-secondaire  w-4 h-5 text-neutral-600'/>
                                   
                    </div>
         
                    <div className="w-10 h-8 overflow-hidden duration-30 group cursor-pointer border-2 bg-neutral-200 border-bg-blanc  rounded-full backdrop-blur-sm hover:bg-bg-primaire transtion-10 flex items-center justify-center "> 
                             
                                 <BiHelpCircle className="group-hover:text-bg-secondaire  w-5 h-5 text-neutral-600"/>
                                
                    </div>
                       
              </div>
    </div>
  )
}

export default asideBar
