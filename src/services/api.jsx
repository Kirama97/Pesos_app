import { BASE_URL } from '../config';

export const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
  };
};

const fetchWithAuth = async (url) => {
  const res = await fetch(`${BASE_URL}${url}`, {
    headers: getAuthHeaders(),
  });

  console.log("Status HTTP :", res.status, res.statusText);

  const text = await res.text();
  console.log("Réponse brute :", text);

  if (!res.ok) {
    throw new Error(`Erreur HTTP ${res.status}: ${text}`);
  }

  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("Erreur parsing JSON :", err);
    throw new Error("Réponse du serveur non valide : " + text);
  }
};

export const fetchUserCompte = () => fetchWithAuth("/compte/mes-comptes");
export const fetchUserProfile = () => fetchWithAuth("/api/utilisateurs/profil");
























// import { BASE_URL } from '../config';

// export const getAuthHeaders = () => {
//   const token = localStorage.getItem('token');
//   return {
//     'Content-Type': 'application/json',
//     ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
//   };
// };

// export const fetchUserCompte = async () => {
//   const token = localStorage.getItem("token");
//   console.log("Token utilisé :", token);

//   if (!token) throw new Error("Aucun token trouvé, utilisateur non connecté");

//   const res = await fetch(`${BASE_URL}/compte/mes-comptes`, {
//     headers: {
//       "Authorization": `Bearer ${token}`,
//       "Content-Type": "application/json"
//     }
//   });

 
//   console.log("Status HTTP :", res.status, res.statusText);

//   const text = await res.text();
//   console.log("Réponse brute :", text);

//   // Tenter de parser le JSON
//   try {
//     const compte = JSON.parse(text);
//     console.log("Utilisateur compte :", compte);
//     return compte;
//   } catch (err) {
//     console.error("Erreur parsing JSON :", err);
//     throw new Error("Réponse du serveur non valide : " + text);
//   }
// };



// export const fetchUserProfile = async () => {
//   const token = localStorage.getItem("token");
//   console.log("Token utilisé :", token);

//   if (!token) throw new Error("Aucun token trouvé, utilisateur non connecté");

//   const res = await fetch(`${BASE_URL}/api/utilisateurs/profil`, {
//     headers: {
//       "Authorization": `Bearer ${token}`,
//       "Content-Type": "application/json"
//     }
//   });

 
//   console.log("Status HTTP :", res.status, res.statusText);

//   const text = await res.text();
//   console.log("Réponse brute :", text);

//   // Tenter de parser le JSON
//   try {
//     const profil = JSON.parse(text);
//     console.log("Utilisateur profil :", profil);
//     return profil;
//   } catch (err) {
//     console.error("Erreur parsing JSON :", err);
//     throw new Error("Réponse du serveur non valide : " + text);
//   }
// };
