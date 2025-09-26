import React from 'react';
import pesosLogoVerticale from '/src/assets/icones/pesos_logo_white_vertical.svg';
import { FaHome } from 'react-icons/fa';
import { FaHistory } from 'react-icons/fa';
import { BiHelpCircle } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { GiStopSign } from 'react-icons/gi';
import { FaRegUser } from 'react-icons/fa';

const Aside_admin = () => {

  // Fonction qui retourne les classes du NavLink
  const NavAside = (isActive) =>
    isActive
      ? "w-10 h-8 duration-100 group cursor-pointer border-2 border-bg-secondaire rounded-full bg-bg-secondaire transition flex items-center justify-center"
      : "w-10 h-8 overflow-hidden duration-100 group cursor-pointer border-2 bg-indigo-5 shadow-md border-blanc rounded-full backdrop-blur-sm hover:bg-indigo-600 transition flex items-center justify-center";

  // Fonction qui retourne les classes des icônes
  const NavAsideIcone = (isActive) =>
    isActive
      ? "w-4 h-4 text-white"
      : "w-4 h-4 text-bg-secondaire group-hover:text-blanc";

  return (
    <div className="rounded-xl flex flex-col justify-between h-full bottom-3 bg-bg-primaire py-5 text-white">
      <img className="h-10 w-[60px] mx-auto" src={pesosLogoVerticale} alt="Pesos Logo" />

      <div className="icons flex items-center gap-3 flex-col mt-10">
        {/* HOME */}
        <NavLink to="/admin/home" title="home" className={({ isActive }) => NavAside(isActive)}>
          {({ isActive }) => <FaHome className={NavAsideIcone(isActive)} />}
        </NavLink>
          {/* ALL HISTORIQUE */}
        <NavLink to="/admin/historique" title="Historique" className={({ isActive }) => NavAside(isActive)}>
          {({ isActive }) => <FaHistory className={NavAsideIcone(isActive)} />}
        </NavLink>

        
        {/* ALL USER */}

        <NavLink to="/admin/utilisateur" title="Utilisateur" className={({ isActive }) => NavAside(isActive)}>
          {({ isActive }) => <FaRegUser className={NavAsideIcone(isActive)} />}
        </NavLink>

        {/* ALL USER */}
        <NavLink to="/admin/annuler_transfert" title="Annuler transfert" className={({ isActive }) => NavAside(isActive)}>
          {({ isActive }) => <GiStopSign className={NavAsideIcone(isActive)} />}
        </NavLink>
      </div>

      <div className="icons flex items-center gap-3 flex-col mt-10">
        <NavLink to="/admin/parametre" className={({ isActive }) => NavAside(isActive)}>
          {({ isActive }) => <AiOutlineSetting className={NavAsideIcone(isActive)} />}
        </NavLink>

        <NavLink to="/admin/aide" className={({ isActive }) => NavAside(isActive)}>
          {({ isActive }) => <BiHelpCircle className={NavAsideIcone(isActive)} />}
        </NavLink>
      </div>
    </div>
  );
};

export default Aside_admin;
