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



// admin


// faire le retrait !

/**
 * ✅ Service pour initier un retrait (ADMIN)
 * @param {Object} params - Les paramètres du retrait
 * @param {string} params.telephone - Téléphone du client
 * @param {number} params.montant - Montant du retrait
 * @returns {Promise<Object>} Réponse du backend (codeValidation, transaction)
 */
export const initierRetraitAdmin = async ({ telephone, montant }) => {
  try {
    if (!telephone || !montant) {
      throw new Error("Tous les champs sont obligatoires");
    }

    if (parseFloat(montant) <= 0) {
      throw new Error("Le montant doit être supérieur à 0");
    }

    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token introuvable, veuillez vous reconnecter");
    }

    const response = await fetch(`${BASE_URL}/api/transactions/admin/retrait/initier`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        telephone,
        montant: parseFloat(montant),
      }),
    });

    const contentType = response.headers.get("content-type");
    let data;

    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      data = { message: text || "Erreur inconnue" };
    }

    if (!response.ok) {
      throw new Error(data.message || "Échec de l'initiation du retrait");
    }

    return data; // ✅ Retourne la réponse complète
  } catch (error) {
    console.error("Erreur lors de l'initiation du retrait :", error);
    throw error;
  }
};





// --------------------// valider un retrait 



export const validerRetrait = async ({ transactionId, code }) => {
  try {
    // ✅ Vérification des champs obligatoires
    if (!transactionId || !code) {
      throw new Error("Le code et l'identifiant de la transaction sont obligatoires");
    }

    // ✅ Récupération du token
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token d'authentification manquant. Veuillez vous reconnecter.");
    }

    // ✅ Requête POST
    const response = await fetch(`${BASE_URL}/api/transactions/retrait/valider`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        transactionId,
        code,
      }),
    });

    // ✅ Gestion de la réponse
    const contentType = response.headers.get("content-type");
    let data;
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      data = { message: text || "Réponse inconnue du serveur" };
    }

    if (!response.ok) {
      throw new Error(data.message || "Échec de la validation du retrait");
    }

    return data; // ✅ Succès

  } catch (error) {
    console.error("Erreur dans validerRetrait:", error);
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
