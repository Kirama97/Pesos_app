

import { BASE_URL } from '../config';


export const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  // const userId = localStorage.getItem('userId');
  return {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
  };
};

// Récupérer les infos utilisateur connecté
export const fetchUserProfile = async () => {
  const token = localStorage.getItem("token");
  // const userId = localStorage.getItem("userId");
  //  if (!userId) throw new Error("Aucun utilisateur connecté");

  const res = await fetch(`${BASE_URL}/compte/mes-comptes`, {
    headers: {
        "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  if (res.ok) {
    const user = await res.json();
    console.log("Utilisateur connecté :" + user);
    // localStorage.setItem("userId", user.id);
    // localStorage.setItem("role", user.role.nom);
    return user;
  } else {
    const errorText = await res.text();
    throw new Error(errorText || "Impossible de récupérer les données utilisateur");
  }
};

// LES info du compte /compte/mes-comptes

