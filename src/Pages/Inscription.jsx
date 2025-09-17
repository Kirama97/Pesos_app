import React from 'react'
import { Link } from 'react-router-dom'
import pesosLogo from '/src/assets/icones/pesos_logo.svg';


const Inscription = () => {
  return (
    <div className='p-[2%] bg-[url-()] md:h-[100vh] w-full  '>

      <div className=" flex flex-col md:flex-row  rounded-xl bg-[url(src/assets/images/money_bg_hero4.png)] overflow-hidden shadow-xl   bg-blanc h-full  w-full ">
        
         <div className=" w-full  md:w-1/2 md:flex bg-[url(src/assets/images/money_bg_hero4.png)]  justify-center items-center">
            
           <img className= ' max-md:mx-auto h-[50px] md:h-[100px] w-30' src={pesosLogo} alt="" srcset="" />
             
         </div>

         <div className="w-full md:w-1/2 h-full text-blanc  bg-bg-secondaire p-5">

            <h2 className='text-center font-bold text-xl my-5'>INSCRIPTION</h2>
           

            <form action="" className='mt-10 px-3 md:px-10'>

              <div className="grid grid-cols-2 gap-5 mt-10">
                <div className="flex flex-col gap-2">
                    <label htmlFor="nom" className='text-sm'>Nom</label>                  
                    <input className='p-2 border-none  outline-double outline-indigo-600 rounded-sm placeholder:text-sm placeholder:text-[13px] text-black text-sm' type="text" name="nom" id="nom" placeholder='Entrer votre nom' />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="prenom" className='text-sm'>Prénom</label>
                    <input className='p-2 rounded-sm  outline-double outline-indigo-600 text-black text-sm placeholder:text-[13px]' type="text" name="prenom" id="prenom" placeholder='Entrer votre prénom' />
                </div>

              </div>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className='text-sm'>Email</label>
                    <input className='p-2 rounded-sm  outline-double outline-indigo-600 text-black text-sm placeholder:text-[13px]' type="Email" name="email" id="email" placeholder='Email' />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="telephone" className='text-sm'>Telephone</label>
                    <input className='p-2 rounded-sm  outline-double outline-indigo-600 text-black text-sm placeholder:text-[13px]' type="tel" name="telephone" id="telephone"  pattern="^\+221\s?(7[0-9])\s?\d{3}\s?\d{2}\s?\d{2}$" placeholder="xx xxx xx xx" />
                </div>

              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className='text-sm'>Mots de passe</label>
                    <input className='p-2 rounded-sm  outline-double outline-indigo-600 text-black text-sm placeholder:text-[13px]' type="password" name="password" id="password" placeholder='Mots de passe' />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="confirmPassword" className='text-sm'>Confirer le mots de passe</label>
                    <input className='p-2 rounded-sm  outline-double outline-indigo-600 text-black text-sm placeholder:text-[13px]' type="password" name="confirmPassword" id="confirmPassword"   placeholder="Confirmer le mots de passe" />
                </div>

              </div>

              <div className="flex flex-col gap-2 mt-5">
                    <label htmlFor="nom" className='text-sm'>Adresse</label>
                    <input className='p-2 outline-double outline-indigo-600 rounded-sm  text-black text-sm placeholder:text-[13px]' type="Adresse" name="Adresse" id="Adresse" placeholder='Adresse' />
                </div>


                 <div className="flex flex-col space-y-3 mt-5">
                  <label className="text-white font-bold text-sm">Genre</label>
                  <div className="flex items-center space-x-6">
                    <label className="flex items-center space-x-2 text-sm text-white">
                      <input
                        type="radio"
                        name="genre"
                        value="homme"
                        className="form-radio w-3 text-white focus:ring-white"
                      />
                      <span>Homme</span>
                    </label>

                    <label className="flex items-center space-x-2 text-sm text-white">
                      <input
                        type="radio"
                        name="genre"
                        value="femme"
                        className="form-radio text-white focus:ring-white"
                      />
                      <span>Femme</span>
                    </label>

                    <label className="flex items-center space-x-2 text-sm text-white">
                      <input
                        type="radio"
                        name="genre"
                        value="autre"
                        className="form-radio text-white focus:ring-white"
                      />
                      <span>Autre</span>
                    </label>
                  </div>
                </div>

                <button type='submit'  className='mt-10 w-full rounded-sm py-3 bg-indigo-900 hover:bg-indigo-950'>Se connecter</button>

                <div className="">
                  <p className='text-sm mt-5'>Si vous avez deja un compte ! <Link to="/connexion" className='hover:text-yellow-500'> Connexion</Link></p>
                 
                </div>
          
              
         
            </form>

             
         </div>
        
      </div>
      
    </div>
  )
}

export default Inscription
