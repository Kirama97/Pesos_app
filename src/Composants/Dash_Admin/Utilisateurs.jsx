import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaIdCard } from 'react-icons/fa';
import axios from 'axios';

const Utilisateurs = () => {
  const [users, setUsers] = useState([]);

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
      }
    };

    fetchUsers();

    const interval = setInterval(fetchUsers, 10000); // Mise à jour toutes les 10 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl h-full p-6 flex flex-col gap-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Liste des utilisateurs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4   h-[40vh] overflow-y-scroll">
        {users.length === 0 && <div className="col-span-full text-center text-gray-400">Aucun utilisateur trouvé.</div>}

        {users.map(user => (
          <div key={user.id} className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <FaUser className="text-gray-700" />
              <span className="font-semibold">{user.prenom} {user.nom}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <FaEnvelope /> <span className="text-sm">{user.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <FaPhone /> <span className="text-sm">{user.telephone}</span>
            </div>
            {user.pays && (
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <FaGlobe /> <span className="text-sm">{user.pays}</span>
              </div>
            )}
            {user.numeroPiece && (
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <FaIdCard /> <span className="text-sm">{user.numeroPiece}</span>
              </div>
            )}
            <div className="mt-2 font-medium text-sm">
              Rôle: <span className="text-bg-secondaire">{user.role.nomRole}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Utilisateurs;
