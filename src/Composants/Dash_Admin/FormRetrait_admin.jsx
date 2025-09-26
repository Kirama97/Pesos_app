import React, { useState } from "react";
import { toast } from "react-toastify";
import { initierRetraitAdmin } from "../../services/api";


export default function FormRetrait_admin({onClose }) {


   const [telephone, setTelephone] = useState("");
  const [montant, setMontant] = useState("");
  const [loading, setLoading] = useState(false);

 
  const [showPopup, setShowPopup] = useState(false);
  const [retraitData, setRetraitData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await initierRetraitAdmin({ telephone, montant });

    
      setRetraitData(data);
      setShowPopup(true);

     
      setTelephone("");
      setMontant("");
    } catch (error) {
      alert(error.message || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>

    {!showPopup && (
        <div className="bg-white w-full rounded-xl shadow-lg p-8 max-w-lg relative ">
            <button 
            onClick={onClose}
            aria-label='Fermer'
            className='absolute top-5 right-5 text-gray-400 hover:text-red-500 duration-75 text-xl'> &times;
            </button>

            <h2 className='text-2xl font-bold mb-6 text-center'>Faire un retrait </h2>

            

                <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">


                  {/* id transaction*/}
                    <div>
                        <label className="block mb-1 font-medium">Numero du retrait</label>
                        <input
                        type="text"
                        value={telephone}
                        onChange={e => setTelephone(e.target.value)}
                    
                        required
                        className="w-full border rounded px-3 py-2 text-neutral-500 focus:outline-none focus:ring-2 focus:ring-bg-secondaire"
                        placeholder="+221......."
                        
                        />
                  </div>
                  {/* code de retrait */}
                    <div>
                        <label className="block mb-1 font-medium">Montant à retirer</label>
                        <input
                        type="number"
                        value={montant}
                        onChange={e => setMontant(e.target.value)}
                        required
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-bg-secondaire"
                        placeholder="montant"
                        />
                  </div>

          
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                  >
                    {loading ? "Traitement..." : "Initier le Retrait"}
                  </button>


                </form>

              
      </div>

         )}


           {/* ✅ Pop-up */}
      {showPopup && retraitData && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
            <h3 className="text-xl font-bold text-indigo-700 mb-4">
              Retrait Initié avec Succès 🎉
            </h3>

            <p className="text-gray-600 mb-2">
              <strong>Code de Validation :</strong>
              <span className="text-indigo-600 text-lg font-semibold ml-2">
                {retraitData.codeValidation}
              </span>
            </p>

            <div className="text-left mt-4 border-t pt-3 text-gray-700 space-y-1">
              <p>
                <strong>ID Transaction :</strong> {retraitData.transaction.id}
              </p>
              <p>
                <strong>Montant :</strong>{" "}
                {retraitData.transaction.montant.toLocaleString()} XOF
              </p>
              <p>
                <strong>Status :</strong> retrait
              </p>
              <p>
                <strong>Date :</strong>{" "}
                {new Date(retraitData.transaction.date).toLocaleString()}
              </p>
            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-5 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
        
    </div>
  );
}
