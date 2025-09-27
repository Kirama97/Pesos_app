import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Composants/Dashboard/Navbar'
import Aside from '../Composants/Dashboard/Aside'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUserCompte, fetchUserProfile } from '../../src/services/api';

const Dashboard = () => {
  const [compte, setCompte] = useState(null);
  const [profil, setProfil] = useState(null);
  const [loader, setLoading] = useState(true);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    const getCompte = async () => {
      try {
        const data = await fetchUserCompte();
        const info_profil = await fetchUserProfile();
        setCompte(data[0]);
        setProfil(info_profil);
      } catch (err) {
        console.error("Erreur fetchUserProfile :", err);
        setErreur(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    getCompte();

    const interval = setInterval(getCompte, 500);
    return () => clearInterval(interval);
  }, []);

  if (loader) 
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-slate-200 gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" style={{ animationDelay: '0.4s' }}></div>
        </div>
        <p className="text-gray-700 text-lg font-medium mt-4 animate-pulse">Chargement des données...</p>
      </div>
    );

  if (erreur) 
    return <div className="text-red-500 text-center mt-10">{erreur}</div>;

  return (
    <main className='h-[100vh] flex gap-5 bg-slate-300 p-5'>
      <Aside compte={compte} profil={profil} />
      <div className='w-11/12 flex flex-col'>
        <Navbar compte={compte} profil={profil} />
        <div className="w-full h-full mt-5">
          <Outlet context={{ compte, profil }} />
        </div>
      </div>
      <ToastContainer />
    </main>
  )
}

export default Dashboard
