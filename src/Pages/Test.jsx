import React, { useEffect, useState } from "react";

const Test = () => {
  const [utilisateurs, setUtilisateurs] = useState([]);

  useEffect(() => {
    // Exemple de token JWT stocké (souvent on le récupère après login)
    const token = "TON_TOKEN_JWT_ICI";

    fetch("http://localhost:8080/api/utilisateurs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // JWT envoyé dans le header
      },
      credentials: "include" // si tu utilises les cookies
    })
      .then((response) => {
        if (!response.ok) throw new Error("Erreur réseau");
        return response.json();
      })
      .then((data) => setUtilisateurs(data))
      .catch((err) => console.error("Erreur fetch:", err));
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {utilisateurs.map((user) => (
          <li key={user.id}>{user.nom} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
