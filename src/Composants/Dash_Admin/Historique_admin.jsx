import React, { useState, useEffect } from 'react';
import { FaPhone } from 'react-icons/fa6';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';

const Historique_admin = () => {
  const { profil } = useOutletContext();
  const [operations, setOperations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistorique = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get('http://localhost:8080/api/transactions/admin/historique', {
          headers: { Authorization: `Bearer ${token}` }
        });

        const data = response.data;

        // 🔹 Tri par date
        const sortedOperations = [...data].sort((a, b) => {
          const dateA = a.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/)?.[0];
          const dateB = b.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/)?.[0];
          return new Date(dateB) - new Date(dateA);
        });

        setOperations(sortedOperations);
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
    <div className="bg-white rounded-xl h-full p-6 flex flex-col gap-6 shadow-lg">
      {/* 🔹 En-tête */}
      <div className="flex items-center justify-end gap-4">
        <FaPhone className="text-2xl text-blue-600" />
        <div>
          <div className="font-bold text-md">Numéro de téléphone</div>
          <div className="text-gray-500 text-sm">Admin</div>
        </div>
      </div>

      {/* 🔹 Titre */}
      <div>
        <div className="font-semibold text-gray-700 mb-2 text-lg">
          Toutes les opérations des utilisateurs
        </div>

        {loading ? (
          // ✅ Loader moderne
          <div className="flex flex-col justify-center items-center h-[40vh] bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-lg">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-blue-600 animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-blue-300 animate-[spin_1.5s_linear_infinite_reverse]"></div>
            </div>
            <h2 className="mt-6 text-sm font-semibold text-blue-800 animate-pulse">
              Chargement de l’historique...
            </h2>
          </div>
        ) : (
          <div className="flex flex-col gap-2 h-[40vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
            {operations.length === 0 ? (
              <p className="text-gray-400 text-center mt-4">Aucune opération trouvée</p>
            ) : (
              operations.map((op, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 hover:bg-blue-50 transition rounded p-3 shadow-sm"
                >
                  <span className="font-medium text-gray-700">{op}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Historique_admin;
