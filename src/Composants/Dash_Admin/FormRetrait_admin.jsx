import React, { useState, useEffect } from "react";
import { initierRetraitAdmin } from "../../services/api";
import axios from "axios";

export default function FormRetrait_admin({ onClose }) {
  const [telephone, setTelephone] = useState("");
  const [montant, setMontant] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [retraitData, setRetraitData] = useState(null);
  const [utilisateurs, setUtilisateurs] = useState([]);

  // Récupérer tous les utilisateurs
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:8080/api/utilisateurs/admin/all", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUtilisateurs(res.data);
      } catch (error) {
        console.error("Erreur récupération utilisateurs :", error);
      }
    };
    fetchUsers();
  }, []);

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
        <div className="bg-white w-full rounded-xl shadow-lg p-8 max-w-lg relative">
          <button 
            onClick={onClose}
            aria-label='Fermer'
            className='absolute top-5 right-5 text-gray-400 hover:text-red-500 duration-75 text-xl'> &times;
          </button>

          <h2 className='text-2xl font-bold mb-6 text-center'>Faire un Retrait</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Sélection du bénéficiaire */}
            <div>
              <label className="block mb-1 font-medium">Bénéficiaire</label>
              <select
                value={telephone}
                onChange={e => setTelephone(e.target.value)}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-bg-secondaire"
              >
                <option value="">Sélectionner un utilisateur</option>
                {utilisateurs.map(user => (
                  <option key={user.id} value={user.telephone}>
                    {user.nom} {user.prenom} - {user.telephone}
                  </option>
                ))}
              </select>
            </div>

            {/* Montant */}
            <div>
              <label className="block mb-1 font-medium">Montant à retirer</label>
              <input
                type="number"
                value={montant}
                onChange={e => setMontant(e.target.value)}
                required
                min={1}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-bg-secondaire"
                placeholder="Montant"
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

      {/* Pop-up de confirmation */}
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
              <p><strong>ID Transaction :</strong> {retraitData.transaction.id}</p>
              <p><strong>Montant :</strong> {retraitData.transaction.montant.toLocaleString()} XOF</p>
              <p><strong>Status :</strong> retrait</p>
              <p><strong>Date :</strong> {new Date(retraitData.transaction.date).toLocaleString()}</p>
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
