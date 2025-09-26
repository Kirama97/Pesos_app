import React, { useState, useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';

export default function NombreUtilisateur() {
  const [utilisateur, setUtilisateur] = useState(0);

  useEffect(() => {
    const fetchUtilisateur = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch('http://localhost:8080/api/utilisateurs/admin/all', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        setUtilisateur(data.length);
      } catch (error) {
        console.error("Erreur récupération utilisateurs :", error);
      }
    };

    // Premier fetch au montage
    fetchUtilisateur();

    // Mise à jour toutes les 5 secondes
    const interval = setInterval(fetchUtilisateur, 5000);

    // Nettoyage à la destruction du composant
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-2/6 lg:w-1/6 rounded-lg text-center py-5 backdrop-blur-lg bg-slate-50 shadow-lg h-full">
      <h2 className='text-neutral-950 text-lg mb-5'>Utilisateurs</h2>
      <div className="flex items-center justify-center gap-2">
        <FaUsers className="text-2xl text-bg-secondaire" />
        <p className='font-bold text-2xl text-bg-secondaire'>{utilisateur}</p>
      </div>
    </div>
  );
}
