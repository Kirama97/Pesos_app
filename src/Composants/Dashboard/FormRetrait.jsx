import React from 'react'
import { toast } from 'react-toastify';
import { useState , useEffect } from 'react';
import { validerRetrait } from "../../services/api";


const FormRetrait = ({onClose }) => {




  const [transactionId, setTransactionId] = useState("");
  const [code, setCode] = useState("");



const [loading, setLoading] = useState(false);

const handleValidation = async () => {
  try {
    const result = await validerRetrait({
      transactionId,
      code
    });
    console.log("Validation réussie ✅", result);
    toast.success("Retrait validé avec succès !");
  } catch (error) {
    toast.error(error.message);
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
            <form action="" onSubmit={handleValidation} className="flex flex-col gap-4">


               {/* id transaction*/}
                <div>
                    <label className="block mb-1 font-medium">Id Transaction</label>
                    <input
                    type="text"
                    value={transactionId}
                    onChange={e => setTransactionId(e.target.value)}
                 
                    required
                    className="w-full border rounded px-3 py-2 text-neutral-500 focus:outline-none focus:ring-2 focus:ring-bg-secondaire"
                    
                    />
              </div>
               {/* code de retrait */}
                <div>
                    <label className="block mb-1 font-medium">Code de retrait</label>
                    <input
                    type="text"
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-bg-secondaire"
                    placeholder="Code de retrait"
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

export default FormRetrait
