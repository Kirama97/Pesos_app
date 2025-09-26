import React from 'react'
import { toast } from 'react-toastify';
import { useState , useEffect } from 'react';
import { transfertUtilisateur } from "../../services/api";
// import { le_numero } from './HomeDash';

// import { useOutletContext } from 'react-router-dom';



const FormDepot = ({onClose }) => {


// const context = useOutletContext() || {};
// const { profil = {}, compte = {} } = context;

// console.log(profil)


  const [telephoneDestination, setTelephoneDestination] = useState("");
  const [montant, setMontant] = useState("");




  

const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const data = await transfertUtilisateur({ telephoneSource, telephoneDestination, montant });
   
      toast.success(
        <p className="text-sm">
          ✅ Depot réussi ! <br />
          Montant : {montant} CFA <br />
         
          
        </p>
      );
      if (onClose) onClose();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  



  return (
    <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>


        <div className="bg-white w-full rounded-xl shadow-lg p-8 max-w-lg relative ">
            <button 
            onClick={onClose}
            aria-label='Fermer'
            className='absolute top-5 right-5 text-gray-400 hover:text-red-500 duration-75 text-xl'> &times;
            </button>

            <h2 className='text-2xl font-bold mb-6 text-center'>Depot D'argent</h2>
            <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">


               
               {/* entrer numero compte */}
                <div>
                    <label className="block mb-1 font-medium">Numero du bénéficiaire</label>
                    <input
                    type="text"
                    value={telephoneDestination}
                    onChange={e => setTelephoneDestination(e.target.value)}
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


           
           <button
            type="submit"
            disabled={loading}
            className={`mt-4 bg-bg-secondaire text-white rounded py-2 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-800'
            }`}
          >
            {loading ? 'Envoi...' : 'Envoyer'}
          </button>


            </form>
        </div>
        
    </div>
  )
}

export default FormDepot
