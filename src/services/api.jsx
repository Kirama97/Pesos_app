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



// transfert



export const transfertUtilisateur = async ({
  telephoneSource,
  telephoneDestination,
  montant,
}) => {
  try {
    if (!telephoneSource || !telephoneDestination || !montant) {
      throw new Error("Tous les champs sont obligatoires");
    }

    if (parseFloat(montant) <= 0) {
      throw new Error("Le montant doit être supérieur à 0");
    }

    const token = localStorage.getItem("token"); // ou autre source

    const response = await fetch(`${BASE_URL}/api/transactions/transfert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        telephoneSource,
        telephoneDestination,
        montant: parseFloat(montant),
      }),
    });
    // Lis le corps une seule fois
    const contentType = response.headers.get("content-type");
    let data;
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      data = { message: text || "Erreur inconnue" };
    }

    if (!response.ok) {
      throw new Error(data.message || "Échec du transfert");
    }

    return data; // succès
  } catch (error) {
    throw error;
  }
};


























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
