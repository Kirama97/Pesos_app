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

  if (loader) return <div>Chargement...</div>;

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
