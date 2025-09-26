import React, { useState, useEffect } from 'react';
import { FaPhone } from 'react-icons/fa6';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';

const Historique = () => {
  const { profil } = useOutletContext();
  const [operations, setOperations] = useState([]);
  const user = { devise: "FCFA" };

  useEffect(() => {
    const fetchHistorique = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get('http://localhost:8080/api/transactions/historique', {
          headers: { Authorization: `Bearer ${token}` }
        });

        const data = response.data;

        // Trier par date extraite du texte
        const sortedOperations = [...data].sort((a, b) => {
          const dateA = a.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/)?.[0];
          const dateB = b.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/)?.[0];
          return new Date(dateB) - new Date(dateA);
        });

        setOperations(sortedOperations);
      } catch (error) {
        console.error("Erreur récupération historique :", error);
      }
    };

    fetchHistorique();

    const interval = setInterval(fetchHistorique, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl h-full p-6 flex flex-col gap-6 shadow-lg">
      <div className="flex items-center justify-end gap-4">
        <FaPhone className="text-2xl text-bg-secondaire" />
        <div>
          <div className="font-bold text-md">Numéro de téléphone</div>
          {profil?.telephone && (
            <div className="text-gray-500 text-sm">{profil.telephone}</div>
          )}
        </div>
      </div>

      <div>
        <div className="font-semibold text-gray-700 mb-2">Toutes mes opérations</div>
        <div className="flex flex-col gap-2 h-[40vh] overflow-y-scroll">
          {operations.map((op, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 rounded p-3 shadow-sm">
              <span className="font-medium">{op}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Historique;
