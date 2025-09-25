import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Composants/Dashboard/Navbar'
import Aside from '../Composants/Dashboard/Aside'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUserCompte } from '../../src/services/api';

const Dashboard = () => {
  const [compte, setCompte] = useState(null);
  const [loader, setLoading] = useState(true);
  const [erreur, setErreur] = useState("");



useEffect(() => {
  const getCompte = async () => {
    try {
      console.log("Token présent :", localStorage.getItem("token"));
      const data = await fetchUserCompte();
      console.log("Mes comptes :", data[0]);
      setCompte(data[0]);
    } catch (err) {
      console.error("Erreur fetchUserProfile :", err);
      setErreur(err.message);
    } finally {
      setLoading(false);
    }
  };
  getCompte();
}, []);


  if (loader) return <div>Chargement...</div>;
  if (erreur) return <div className="text-red-500">{erreur}</div>;

  return (
    <main className='h-[100vh] flex gap-5 bg-slate-300 p-5'>
      <Aside compte={compte} />
      <div className='w-11/12 flex flex-col'>
        <Navbar compte={compte} />
        <div className="w-full h-full mt-5">
          <Outlet context={{compte}} />
        </div>
        <ToastContainer />
      </div>
    </main>
  )
}

export default Dashboard