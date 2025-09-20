import React from 'react'
import { toast } from 'react-toastify';

import { useState } from 'react';

const FormEnvoie = () => {


  const [nom , setNom] = useState("");
  const [montant , setMontant] = useState("");
  const fraisFixe = 500;
  const frais = montant ? Math.max(fraisFixe, montant * 0.02) : 0 ; 
  const [total , setTotal] = useState(montant + frais);


  const handleSubmit = (e) => {
    e.preventDefault();

        toast.success(
    <p className="text-sm">
        Envoi de <span className=" text-bg-secondaire">{montant}</span> CFA à {" "}
        <span className=" text-bg-secondaire">{nom}</span>
    </p>
    );

  }








  return (
    <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>


        <div className="bg-white w-full rounded-xl shadow-lg p-8 max-w-lg relative ">
            <button className='absolute top-5 right-5 text-gray-400 hover:text-red-500 duration-75 text-xl'> &times;
            </button>

            <h2 className='text-2xl font-bold mb-6 text-center'>Envoyer de l'argent</h2>
            <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">


               {/* entrer numero compte */}
                <div>
                    <label className="block mb-1 font-medium">Compte du bénéficiaire</label>
                    <input
                    type="text"
                    value={nom}
                    onChange={e => setNom(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-bg-secondaire"
                    placeholder="Numero de compte"
                    />
              </div>

               {/* entrer Montant */}

               <div>
                    <label className="block mb-1 font-medium">Montant (FCFA)</label>
                    <input
                    type="number"
                    value={montant}
                    onChange={e => setMontant(e.target.value)}
                    min={1}
                    required
            
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-bg-secondaire"
                    placeholder="Montant à envoyer"
                    />
            </div>

            {/* Montant avec le frais */}

               <div>
                    <label className="block mb-1 font-medium">Montant + frais (FCFA)</label>
                    <input
                    type="number"
                    value={total}
                    onChange={e => setTotal(e.target.value)}
                    required
                    disabled
                    className="w-full  rounded px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-bg-secondaire text-bg-secondaire"
                    
                    />
            </div>

             <div className="flex justify-between items-center mt-2">
                <span className="font-medium">Frais :</span>
                <span className="text-bg-secondaire font-bold">{frais} FCFA</span>
             </div>

             


            <button
            type="submit"
            className="mt-4 bg-bg-secondaire text-white rounded py-2 font-semibold hover:bg-indigo-800 transition"
            >
            Envoyer
           </button>



            </form>
        </div>
        
    </div>
  )
}

export default FormEnvoie
