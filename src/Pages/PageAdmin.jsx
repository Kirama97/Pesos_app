import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar_admin from "../Composants/Dash_Admin/Navbar_admin";
import Aside_admin from "../Composants/Dash_Admin/Aside_admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUserCompte, fetchUserProfile } from "../../src/services/api";

const PageAdmin = () => {
  const [compte, setCompte] = useState(null);
  const [profil, setProfil] = useState(null);
  const [loader, setLoading] = useState(true);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    const getCompte = async () => {
      try {
        console.log("Token présent :", localStorage.getItem("token"));
        const data = await fetchUserCompte();
        const info_profil = await fetchUserProfile();
        console.log("Mes comptes :", data[0]);
        console.log("Mon profil :", info_profil);
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
  }, []);


  if (loader)
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-blue-600 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-blue-300 animate-[spin_1.5s_linear_infinite_reverse]"></div>
        </div>
        <h2 className="mt-6 text-lg font-semibold text-blue-800 animate-pulse">
          Chargement de votre espace administrateur...
        </h2>
      </div>
    );


  if (erreur)
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-red-50">
        <h2 className="text-red-600 font-semibold mb-2">
          Une erreur est survenue 😕
        </h2>
        <p className="text-gray-600">{erreur}</p>
      </div>
    );

  return (
    <main className="h-[100vh] flex gap-5 bg-slate-300 p-5">
      <Aside_admin compte={compte} profil={profil} />
      <div className="w-11/12 flex flex-col">
        <Navbar_admin compte={compte} profil={profil} />
        <div className="w-full h-full mt-5">
          <Outlet context={{ compte, profil }} />
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default PageAdmin;
