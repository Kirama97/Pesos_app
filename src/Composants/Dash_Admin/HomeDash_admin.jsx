import React, { useState, useEffect } from 'react';
import { FaPhone } from 'react-icons/fa6';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';




export let le_numero = "";

const HomeDash_admin = () => {
  const { profil } = useOutletContext();
  const [operations, setOperations] = useState([]);
  const user = { devise: "FCFA" };

  // le_numero = profil.telephone;

  // console.log(le_numero);





  useEffect(() => {
    const fetchHistorique = async () => {
      try {
        const token = localStorage.getItem("token"); // récupère le token
        const response = await axios.get('http://localhost:8080/api/transactions/historique', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = response.data;

        // Prends les 5 dernières opérations
        const last5 = data.slice(-5).reverse();
        setOperations(last5);
      } catch (error) {
        console.error("Erreur récupération historique :", error);
      }
    };

    fetchHistorique();
  }, []);

  return (
    <div className="bg-white rounded-xl h-full p-6 flex flex-col gap-6 shadow-lg">
      <div className="flex items-center justify-end gap-4">
        <FaPhone className="text-2xl text-bg-secondaire" />
        <div>
          <div className="font-bold text-md">Numero de téléphone</div>
          {profil?.telephone && (
            <div className="text-gray-500 text-sm">{profil.telephone}</div>
          )}
        </div>
      </div>

      <div>
        <div className="font-semibold text-gray-700 mb-2">Dernières opérations</div>
        <div className="flex flex-col gap-2 h-[40vh] overflow-y-scroll ">
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

export default HomeDash_admin;
