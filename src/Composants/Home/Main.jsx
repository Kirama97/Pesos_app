import React from 'react'

const Main = () => {
  return (
    
      <main className='px-[3%] w-full pb-20'>
     
        
         <section className="rounded-xl  bg-blanc h-full pb-20 w-full px-[5%] md:px-[10%]">

                <div className=" md:h-[80vh] w-full text-neutral-900 pt-20">
                         

                <div className="flex flex-col lg:flex-row items-center justify-between  mt-10">
                    

                    {/* HERO LEFT */}

                    <div className='w-full lg:w-1/2 max-lg:text-center mx-auto mt-10 rounded-md'>
                        <h2 className='text-5xl  font-semibold mb-10 leading-[52px]'>TRANSFERT D'ARGENT <br /><span className="text-bg-secondaire text-4xl italic">
                          facile et rapide</span></h2>
                        <p className='text-neutral-600 mb-10'>Envoyez de l'argent à vos proches en quelques clics, où que vous soyez dans le monde. Notre plateforme sécurisée garantit des transactions rapides et fiables.</p>
                        <div className="flex  flex-col lg:flex-row items-center justify-center gap-5">

                            <div className="w-full lg:w-1/2 text-blanc bg-bg-secondaire hover:bg-indigo-800 flex p-5 items-center gap-7 rounded-lg cursor-pointer  ">
                                <i className="fa-solid fa-paper-plane text-sm md:text-2xl"></i>
                                <div className="">
                                    <h4>Envoyer de l'argent partout</h4>
                                </div>
                            </div>

                            <div className="w-full text-blanc lg:w-1/2 p-5 cursor-pointer flex items-center gap-7 rounded-lg bg-green-700 hover:bg-green-800  ">
                                <i  className="fa-solid fa-paper-plane text-sm md:text-2xl rotate-90"></i>
                                <div className="">
                                    <h4>Recevoir de l'argent facilement</h4>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* HERO RIGHT */}

                    <div className=" max-lg:hidden   lg:w-1/2">
                       <img className='float-right'  src="src\assets\images\pesos_img3.png" alt="" srcset="" />
                    </div>

 
                </div>
            </div>

           

          {/* liste  */}

            <div className="text-neutral-800 w-full my-20 md:my-[10%]">

              <h1 className='text-2xl text-noire font-bold text-center mb-20'>Pesos c'est plus qu'un compte</h1>

              <ol  className='list-decimal list-inside mt-10   grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3 gap-3 md:gap-10 text-sm md:text-base'>    
                <li className='bg-bg-primaire p-4 rounded-md border border-1 border-indigo-100 hover:border-indigo-300'>Transfert d’argent national (rapide et sécurisé)</li>
                <li className='bg-bg-primaire p-4 rounded-md border border-1 border-indigo-100 hover:border-indigo-300'>Transfert d’argent international</li>
                <li className='bg-bg-primaire p-4 rounded-md border border-1 border-indigo-100 hover:border-indigo-300'>Paiement de factures (électricité, eau, internet, téléphone)</li>
                <li className='bg-bg-primaire p-4 rounded-md border border-1 border-indigo-100 hover:border-indigo-300'>Achat de crédit téléphonique (tous opérateurs)</li>
                <li className='bg-bg-primaire p-4 rounded-md border border-1 border-indigo-100 hover:border-indigo-300'>Paiement marchand (en ligne ou en boutique via QR code ou code de paiement)</li>
                <li className='bg-bg-primaire p-4 rounded-md border border-1 border-indigo-100 hover:border-indigo-300'>Portefeuille électronique (e-wallet) pour stocker et gérer l’argent</li>
                <li className='bg-bg-primaire p-4 rounded-md border border-1 border-indigo-100 hover:border-indigo-300'>Historique des transactions (consultation et téléchargement)</li>
                <li className='bg-bg-primaire p-4 rounded-md border border-1 border-indigo-100 hover:border-indigo-300'>Authentification forte (OTP, empreinte digitale, Face ID)</li>
                <li className='bg-bg-primaire p-4 rounded-md border border-1 border-indigo-100 hover:border-indigo-300'>Chiffrement des données pour la sécurité</li>
                <li className='bg-bg-primaire p-4 rounded-md border border-1 border-indigo-100 hover:border-indigo-300'>Notifications en temps réel (SMS, email, push)</li>
                <li className='bg-bg-primaire p-4 rounded-md border border-1 border-indigo-100 hover:border-indigo-300'>Création de compte rapide (avec vérification KYC)</li>
                <li className='bg-bg-primaire p-4 rounded-md border border-1 border-indigo-100 hover:border-indigo-300'>Gestion multi-devises (FCFA, EUR, USD…)</li>
                
            </ol>

      
                
            </div>

            <div className="flex flex-col md:flex-row  justify-between items-center gap-20 my-20">
                    <img className='rounded-xl shadow-lg' src="src\assets\images\pesos_img1.png" alt="" srcset="" />
                    <div className="w-full md:w-1/2">
                         <img className='h-100  md:h-100 w-25 md:w-50' src="src/assets/icones/pesos_logo.svg" alt="" srcset="" />

                    </div>
            </div>

                        {/*statistique  */}


             <div className="grid grid-cols-2 md:grid-cols-4  bg-bg-secondaire rounded-md md:mt-[5%]">
                    <div className="hover:bg-indigo-700/15 p-5 md:p-10 text-center border-r border-b border-indigo-800/50">
                        <h3 className='text-lg md:text-3xl font-bold text-indigo-200'>500K+</h3>
                        <p className='text-indigo-100 max-md:text-sm'>Utilisateurs</p>
                    </div>

                    <div className="hover:bg-indigo-700/15 p-5 md:p-10 text-center border-r border-b border-indigo-800/50">
                        <h3 className='text-lg md:text-3xl font-bold text-indigo-200'>1M+</h3>
                        <p className='text-indigo-100 max-md:text-sm'>Transactions</p>
                    </div>

                    <div className="hover:bg-indigo-700/15 p-5 md:p-10 text-center border-r border-b md:border-b-0 border-indigo-800/50">
                        <h3 className='text-lg md:text-3xl font-bold text-indigo-200'>100+</h3>
                        <p className='text-indigo-100 max-md:text-sm'>Pays couverts</p>
                    </div>

                    <div className="hover:bg-indigo-700/15 p-5 md:p-10 text-center border-b border-indigo-800/50">
                        <h3 className='text-lg md:text-3xl font-bold text-indigo-200'>24/7</h3>
                        <p className='text-indigo-100 max-md:text-sm'>Support client</p>
                    </div>

                </div>


      

         </section>
        

            
      </main>
  )
}

export default Main
