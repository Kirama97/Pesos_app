import React from 'react'



const Connexion = () => {
  return (
    <div className='p-[3%] bg-[url-()] h-[100vh] w-full  '>

      <div className="rounded-xl bg-[url(src/assets/images/money_bg_hero4.png)] overflow-hidden shadow-xl flex justify-between   bg-blanc h-full  w-full ">
        
         <div className="w-1/2 flex bg-[url(src/assets/images/money_bg_hero4.png)] animate-pulse justify-center items-center">
            <h1 className='text-4xl  font-bold text-center text-bg-secondaire mb-20'>Connexion</h1>
         </div>
         <div className="w-1/2 h-full text-blanc bg-bg-secondaire p-10">

            {/* <h2 className='text-center text-2xl'>Bienvenue chez Pesos Veuillez vous connecter</h2> */}

            <form action="">

              <div className="grid  grid-cols-2 gap-5 mt-10">
                <div className="flex flex-col gap-2">
                    <label htmlFor="nom">Nom</label>
                    <input className='p-2 rounded-md placeholder:text-sm  text-black text-sm' type="text" name="nom" id="nom" placeholder='Entrer votre nom' />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="prenom">Prénom</label>
                    <input className='p-2 rounded-md text-black text-sm' type="text" name="prenom" id="prenom" placeholder='Entrer votre prénom' />
                </div>

              </div>
              <div className="grid  grid-cols-2 gap-5 mt-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="nom">Email</label>
                    <input className='p-2 rounded-md  text-black text-sm' type="Email" name="email" id="email" placeholder='Email' />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="prenom">Telephone</label>
                    <input className='p-2 rounded-md text-black text-sm' type="tel" name="prenom" id="prenom"  pattern="^\+221\s?(7[0-9])\s?\d{3}\s?\d{2}\s?\d{2}$" placeholder="xx xxx xx xx" />
                </div>

              </div>

              <div className="Genre mt-5">
                <label htmlFor="genre">Genre</label>
                <select className='w-full p-2 rounded-md text-black text-sm' name="genre" id="genre">
                    <option value="Homme">Homme</option>  
                    <option value="Femme">Femme</option>
                    <option value="Autre">Autre</option>
                </select>
              </div>




            </form>

             
         </div>
        
      </div>
      
    </div>
  )
}

export default Connexion
