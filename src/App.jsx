import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Accueil from "./Pages/Accueil";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";
import Dashboard from "./Pages/Dashboard";
import NotFoundPage from "./Pages/NotFoundPage";
import HomeDash from "./Composants/Dashboard/HomeDash";
import Historique from "./Composants/Dashboard/Historique";
import Aide from "./Composants/Dashboard/Aide";
import Parametre from "./Composants/Dashboard/Parametre";
import Profil from "./Composants/Dashboard/Profil";
import AnnulerTransfer from "./Composants/Dashboard/AnnulerTransfer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
       { path: "accueil" , element: <HomeDash /> },
       { path: "historique" , element: <Historique /> },
       { path: "aide" , element: <Aide /> },
       { path: "annuler_trenfert" , element: <AnnulerTransfer /> },
       { path: "parametre" , element: <Parametre /> },
       { path: "profil" , element: <Profil /> },
    ]
      
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
