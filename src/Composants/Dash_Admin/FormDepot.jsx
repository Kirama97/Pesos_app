import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const FormDepot = ({ onClose }) => {
  const [telephone, setTelephone] = useState("");
  const [montant, setMontant] = useState("");
  const [loading, setLoading] = useState(false);
  const [utilisateurs, setUtilisateurs] = useState([]);

  // Récupérer la liste des utilisateurs
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
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:8080/api/transactions/admin/depot",
        {
          telephone,
          montant,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success(
        <p className="text-sm">
          ✅ Dépôt réussi ! <br />
          Montant : {montant} FCFA <br />
          Bénéficiaire : {telephone}
        </p>
      );

      setMontant("");
      setTelephone("");
      if (onClose) onClose();
    } catch (error) {
      toast.error(error.response?.data?.message || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
      <div className="bg-white w-full rounded-xl shadow-lg p-8 max-w-lg relative">
        <button 
          onClick={onClose}
          aria-label='Fermer'
          className='absolute top-5 right-5 text-gray-400 hover:text-red-500 duration-75 text-xl'>
          &times;
        </button>

        <h2 className='text-2xl font-bold mb-6 text-center'>Dépôt d'argent</h2>
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
            <label className="block mb-1 font-medium">Montant (FCFA)</label>
            <input
              type="number"
              value={montant}
              onChange={e => setMontant(e.target.value)}
              min={1}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-bg-secondaire"
              placeholder="Montant à déposer"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-4 bg-bg-secondaire text-white rounded py-2 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-800'
            }`}
          >
            {loading ? 'Envoi...' : 'Déposer'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default FormDepot;
