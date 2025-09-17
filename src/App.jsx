import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Accueil from "./Pages/Accueil";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
