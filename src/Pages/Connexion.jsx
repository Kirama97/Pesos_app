import React from 'react'
import { Link } from 'react-router-dom'
import pesosLogo from '/src/assets/icones/pesos_logo.svg';


const Connexion = () => {
  return (
   <div className='p-[2%] bg-[url-()] md:h-[100vh] w-full  '>
 
       <div className=" flex flex-col md:flex-row  rounded-xl bg-[url(src/assets/images/money_bg_hero4.png)] overflow-hidden shadow-xl   bg-blanc h-full  w-full ">
         
          <div className=" w-full  md:w-1/2 md:flex bg-[url(src/assets/images/money_bg_hero4.png)]  justify-center items-center">
             
            <img className= ' max-md:mx-auto h-[50px] md:h-[100px] w-30' src={pesosLogo} alt="" srcset="" />
              
          </div>
 
          <div className="w-full md:w-1/2 h-full text-blanc  bg-bg-secondaire p-5 pb-10">
 
             <h2 className='text-center font-bold text-xl my-5'>Connexion</h2>
            
 
             <form action="" className='mt-10 px-3 md:px-10'>

              
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="nom">Email</label>
                    <input className='p-2 rounded-sm  outline-double outline-indigo-600 text-black text-sm placeholder:text-[13px]' type="Email" name="email" id="email" placeholder='Email' />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="prenom">Mots de passe</label>
                    <input className='p-2 rounded-sm  outline-double outline-indigo-600 text-black text-sm placeholder:text-[13px]' type="password" name="password" id="password"  placeholder="mots de passe" />
                </div>

            

             



                <button type='submit'  className='mt-10 w-full rounded-sm py-3 bg-indigo-900 hover:bg-indigo-950'>Connexion</button>

                <div className="">
                  <p className='text-sm mt-5'>Si vous pas de compte ! <Link to="/inscription" className='hover:text-yellow-500'>S'inscrire</Link></p>
                 
                </div>
          
              
         
            </form>

             
         </div>
        
      </div>
      
    </div>
  )
}

export default Connexion
