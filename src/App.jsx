import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from './Route/privateRoute';

import Accueil from "./Pages/Accueil";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";
import Dashboard from "./Pages/Dashboard";
import NotFoundPage from "./Pages/NotFoundPage";
import HomeDash from "./Composants/Dashboard/HomeDash";
import HomeDash_admin from "./Composants/Dash_Admin/HomeDash_admin";
import Historique from "./Composants/Dashboard/Historique";
import Historique_admin from "./Composants/Dash_Admin/Historique_admin";
import AnnulerTransfert_admin from "./Composants/Dash_Admin/AnnulerTransfert_admin";
import AnnulerTransfert from "./Composants/Dashboard/AnnulerTransfert";
import Aide_admin from "./Composants/Dash_Admin/Aide_admin";
import Aide from "./Composants/Dashboard/Aide";
import Parametre from "./Composants/Dashboard/Parametre";
import Parametre_admin from "./Composants/Dash_Admin/Parametre_admin";
import Profil from "./Composants/Dashboard/Profil";
import Profil_admin from "./Composants/Dash_Admin/Profil_admin";
import PageAdmin from "./Pages/PageAdmin"; 


const router = createBrowserRouter([
  { path: "/", element: <Accueil /> },
  { path: "/connexion", element: <Connexion /> },
  { path: "/inscription", element: <Inscription /> },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      { path: "accueil", element: <HomeDash /> },
      { path: "historique", element: <Historique /> },
      { path: "aide", element: <Aide /> },
      { path: "annuler_transfert", element: <AnnulerTransfert /> },
      { path: "parametre", element: <Parametre /> },
 
    ],
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute roleRequired="ADMIN">
        <PageAdmin />
      </ProtectedRoute>
    ),
    
    children: [
      { path: "home", element: <HomeDash_admin/> },
      { path: "historique", element: <Historique_admin /> },
      { path: "aide", element: <Aide_admin /> },
      { path: "parametre", element: <Parametre_admin /> },
        { path: "annuler_transfert", element: <AnnulerTransfert_admin /> },
     
    ],
  },

  { path: "*", element: <NotFoundPage /> },
   { path: "profil" , element: <Profil /> },
   { path: "profil" , element: <Profil_admin /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
