import React from 'react'
import { toast } from 'react-toastify';
import { useState , useEffect } from 'react';
import { transfertUtilisateur } from "../../services/api";
import { le_numero } from './HomeDash';

// import { useOutletContext } from 'react-router-dom';



const FormEnvoie = ({onClose }) => {


// const context = useOutletContext() || {};
// const { profil = {}, compte = {} } = context;

// console.log(profil)


  const [idTransaction, setIdTransaction] = useState("");
  const [codeRetrait, setCodeRetrait] = useState("");

  



  useEffect(() => {
    const f = (parseFloat(montant) * 1) / 100;
    setFrais(isNaN(f) ? 0 : f);
    setTotal(parseFloat(montant || 0) + (isNaN(f) ? 0 : f));
  }, [montant]);


const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const data = await transfertUtilisateur({ telephoneSource, telephoneDestination, montant });
   
      toast.success(
        <p className="text-sm">
          ✅ Transfert réussi ! <br />
          Montant : {montant} CFA <br />
          Frais : {frais.toFixed(2)} CFA <br />
          Total payé : {total.toFixed(2)} CFA
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

            <h2 className='text-2xl font-bold mb-6 text-center'>Valider le Retrait</h2>
            <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">


               {/* entrer numero compte */}
                <div>
                    <label className="block mb-1 font-medium">Id Transaction</label>
                    <input
                    type="text"
                    value={idTransaction}
                    onChange={e => setIdTransaction(e.target.value)}
                 
                    required
                    className="w-full border rounded px-3 py-2 text-neutral-500 focus:outline-none focus:ring-2 focus:ring-bg-secondaire"
                    
                    />
              </div>
               {/* entrer numero compte */}
                <div>
                    <label className="block mb-1 font-medium">Code de retrait</label>
                    <input
                    type="text"
                    value={codeRetrait}
                    onChange={e => setCodeRetrait(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-bg-secondaire"
                    placeholder="Code de retrait"
                    />
              </div>

             

             <div className="flex justify-between items-center mt-2">
                <span className="font-medium">Frais :</span>
                <span className="text-bg-secondaire font-bold">{frais.toFixed(2)} FCFA</span>
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

export default FormEnvoie
