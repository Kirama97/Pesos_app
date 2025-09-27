import React, { useState, useEffect } from 'react';
import { FaPhone, FaMoneyBillWave, FaPaperPlane, FaMobileAlt, FaWifi, FaGift, FaBan } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';

export let le_numero = "";

const HomeDash = () => {
  const { profil } = useOutletContext();
  const [operations, setOperations] = useState([]);
  const [loading, setLoading] = useState(true);

  le_numero = profil.telephone;

  useEffect(() => {
    const fetchHistorique = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get('http://localhost:8080/api/transactions/historique', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = response.data;

        const last5 = data.slice(-3).reverse();
        setOperations(last5);
      } catch (error) {
        console.error("Erreur récupération historique :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistorique();

    const interval = setInterval(fetchHistorique, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white rounded-xl h-full p-6 flex flex-col gap-6 shadow-lg">
      {/* 🔹 En-tête utilisateur */}
      <div className="flex items-center justify-between border-b pb-3">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Bienvenue 👋</h1>
          <p className="text-gray-500 text-sm">Heureux de vous revoir, {profil?.prenom || 'Utilisateur'} !</p>
        </div>

        <div className="flex items-center gap-3 bg-blue-100 px-4 py-2 rounded-lg">
          <FaPhone className="text-xl text-blue-600" />
          <div>
            <div className="font-bold text-sm text-gray-800">N° Téléphone</div>
            <div className="text-gray-600 text-sm">{profil?.telephone}</div>
          </div>
        </div>
      </div>

      {/* 🔹 Section des dernières opérations */}
      <div>
        <h2 className="font-semibold text-sm text-gray-700 mb-2">🧾 3 Dernières opérations</h2>

        {loading ? (
          <div className="flex justify-center items-center h-[40vh]">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : operations.length === 0 ? (
          <div className="flex justify-center items-center h-[40vh]">
            <p className="text-gray-400">Aucune opération trouvée</p>
          </div>
        ) : (
          <div className="flex flex-col gap-2  overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-200">
            {operations.map((op, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition"
              >
                <span className="font-medium text-gray-700">{op}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 🔹 Section des services */}
      <div>
        <h2 className="font-semibold text-gray-700 mb-4">🛠️ Autres services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Exemple de service disponible */}
    

          {/* Services indisponibles */}
          <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-400 rounded-lg p-4 relative cursor-not-allowed">
            <FaMobileAlt className="text-xl mb-2" />
            <span className="text-sm font-medium">Recharge téléphonique</span>
            <div className="absolute top-2 right-2">
              <FaBan className="text-red-400 text-lg" title="Indisponible" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-400 rounded-lg p-4 relative cursor-not-allowed">
            <FaWifi className="text-xl mb-2" />
            <span className="text-sm font-medium">Achat Pass Internet</span>
            <div className="absolute top-2 right-2">
              <FaBan className="text-red-400 text-lg" title="Indisponible" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-400 rounded-lg p-4 relative cursor-not-allowed">
            <FaGift className="text-xl mb-2" />
            <span className="text-sm font-medium">Bonus & Récompenses</span>
            <div className="absolute top-2 right-2">
              <FaBan className="text-red-400 text-lg" title="Indisponible" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDash;
