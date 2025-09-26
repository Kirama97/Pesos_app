import React, { useState, useEffect } from "react";
import { FaPhone, FaUsers, FaMoneyBillWave, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

export let le_numero = "";

const HomeDash_admin = () => {
  const { profil } = useOutletContext();
  const [operations, setOperations] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");

       
        const resUsers = await axios.get("http://localhost:8080/api/utilisateurs/admin/all", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTotalUsers(resUsers.data.length);

      
        const resTrans = await axios.get("http://localhost:8080/api/transactions/admin/historique", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = resTrans.data; 

       
        const parsedOperations = data.map((text) => {
          const montantMatch = text.match(/([\d.,]+)/); 
          const dateMatch = text.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/); 
          const telephoneMatch = text.match(/\+[\d]+/); // 
          const type = text.toLowerCase().includes("reçu") ? "RECU" : "RETRAIT";

          return {
            texte: text,
            montant: montantMatch ? parseFloat(montantMatch[1].replace(",", "")) : 0,
            date: dateMatch ? new Date(dateMatch[0]) : new Date(),
            telephone: telephoneMatch ? telephoneMatch[0] : "",
            type,
          };
        });

        const sorted = parsedOperations.sort((a, b) => b.date - a.date).slice(0, 6);

        setOperations(sorted);
        setTotalTransactions(parsedOperations.length);
      } catch (error) {
        console.error("Erreur récupération dashboard :", error);
      }
    };

    fetchDashboardData();
    const interval = setInterval(fetchDashboardData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full p-5 bg-gray-100 flex flex-col gap-6 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm">
        <div>
          <h1 className="text-lg font-bold text-gray-800">Bienvenue, {profil?.prenom || "Admin"}</h1>
          <p className=" text-md text-bg-secondaire">{profil?.role?.nomRole}</p>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="text-xl text-bg-secondaire" />
          <span className="text-gray-700 font-medium">{profil?.telephone}</span>
        </div>
      </div>

      {/* Layout principal */}
      <div className="flex gap-6">
        {/* Colonne gauche - indicateurs */}
        <div className="flex flex-col gap-6 w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col items-center">
              <FaUsers className="text-2xl text-blue-600 mb-2" />
              <h2 className="text-gray-600 text-sm mb-1">Nombre d'utilisateurs</h2>
              <p className="text-2xl font-bold text-gray-800">{totalUsers}</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col items-center">
              <FaMoneyBillWave className="text-2 text-green-600 mb-2" />
              <h2 className="text-gray-600 text-sm mb-1">Total des transactions</h2>
              <p className="text-2xl font-bold text-gray-800">{totalTransactions}</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center col-span-2">
              <FaArrowUp className="text-2xl text-red-600 mb-2" />
              <h2 className="text-gray-600 text-sm mb-1">Nombre dernières opérations</h2>
              <p className="text-2xl font-bold text-gray-800">{operations.length}</p>
            </div>
          </div>
        </div>

        {/* Colonne droite - 6 dernières transactions */}
        <div className="w-1/2">
          <div className="bg-white rounded-xl shadow-lg p-5 ">
            <h2 className="text-gray-700 font-semibold mb-4">5 dernières transactions</h2>
            <div className="flex flex-col gap-2  h-[27vh] overflow-y-scroll">
              {operations.map((op, index) => (
                <div
                  key={index}
                  className="flex  justify-between items-center bg-gray-50 rounded p-3 shadow-sm hover:bg-gray-100 transition-colors"
                >
                  <div className=" flex  text-sm lg:text-md items-center gap-2">
                    {op.type === "RETRAIT" ? (
                      <FaArrowUp className="text-red-500" />
                    ) : (
                      <FaArrowDown className="text-green-500" />
                    )}
                    <span className="font-medium">{op.type} {op.montant?.toLocaleString()} FCFA</span>
                    <span className="text-gray-500 text-sm">{op.telephone}</span>
                  </div>
                  <div className="text-gray-400 text-sm">{op.date.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDash_admin;
