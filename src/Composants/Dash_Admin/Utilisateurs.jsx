import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaIdCard } from 'react-icons/fa';
import axios from 'axios';

const Utilisateurs = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get('http://localhost:8080/api/utilisateurs/admin/all', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Erreur récupération utilisateurs :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    const interval = setInterval(fetchUsers, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl h-full p-6 flex flex-col gap-6 shadow-lg">
      {/* 🔹 Titre */}
      <h2 className="text-2xl font-bold text-center text-blue-700 tracking-wide">
        👥 Liste des utilisateurs
      </h2>

      {loading ? (
        // 🔹 Loader moderne (double cercle animé)
        <div className="flex flex-col justify-center items-center h-[40vh] bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-lg">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-blue-600 animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-blue-300 animate-[spin_1.5s_linear_infinite_reverse]"></div>
          </div>
          <h2 className="mt-6 text-sm font-semibold text-blue-800 animate-pulse">
            Chargement des utilisateurs...
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[40vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 p-2">
          {users.length === 0 ? (
            <div className="col-span-full text-center text-gray-400">
              Aucun utilisateur trouvé.
            </div>
          ) : (
            users.map(user => (
              <div
                key={user.id}
                className="bg-gradient-to-br from-gray-50 to-blue-50 border border-blue-100 rounded-xl p-4 shadow hover:shadow-lg transition transform hover:scale-[1.02]"
              >
                {/* Nom utilisateur */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <FaUser className="text-blue-600" />
                  </div>
                  <span className="font-semibold text-gray-800 text-lg">
                    {user.prenom} {user.nom}
                  </span>
                </div>

                {/* Détails utilisateur */}
                <div className="flex flex-col gap-2 text-gray-700 text-sm">
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-blue-500" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-green-500" />
                    <span>{user.telephone}</span>
                  </div>
                  {user.pays && (
                    <div className="flex items-center gap-2">
                      <FaGlobe className="text-indigo-500" />
                      <span>{user.pays}</span>
                    </div>
                  )}
                  {user.numeroPiece && (
                    <div className="flex items-center gap-2">
                      <FaIdCard className="text-yellow-500" />
                      <span>{user.numeroPiece}</span>
                    </div>
                  )}
                </div>

                {/* Rôle */}
                <div className="mt-4">
                  <span className="text-xs uppercase text-gray-500">Rôle :</span>
                  <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {user.role.nomRole}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Utilisateurs;
