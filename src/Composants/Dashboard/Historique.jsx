import React, { useState, useEffect } from "react";
import { FaPhone, FaHistory, FaExchangeAlt } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

const Historique = () => {
  const { profil } = useOutletContext();
  const [operations, setOperations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistorique = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8080/api/transactions/historique",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const data = response.data;

        // Trier les opérations par date
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
    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg h-full flex flex-col gap-6 transition-all duration-300">
      {/* ✅ En-tête utilisateur */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
            <FaHistory className="text-2xl" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Historique des opérations
            </h2>
            <p className="text-sm text-gray-500">
              Visualisez vos dernières transactions
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-lg">
          <FaPhone className="text-blue-600" />
          <div>
            <div className="text-sm text-gray-600 font-medium">
              {profil?.telephone}
            </div>
            <p className="text-xs text-gray-400">Votre numéro</p>
          </div>
        </div>
      </div>

      {/* ✅ Liste des opérations */}
      <div className="flex-1">
        <h3 className="text-gray-700 font-semibold mb-3">
          Dernières transactions
        </h3>

        {loading ? (
          // Loader stylé
          <div className="flex flex-col justify-center items-center h-[40vh]">
            <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-3 text-sm text-gray-500">Chargement...</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3 h-[45vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
            {operations.length === 0 ? (
              <p className="text-center text-gray-400 mt-8">
                Aucune opération trouvée
              </p>
            ) : (
              operations.map((op, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                      <FaExchangeAlt />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      {op}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Historique;
