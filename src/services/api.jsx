import { BASE_URL } from '../config';

export const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
  };
};

export const fetchUserProfile = async () => {
  const token = localStorage.getItem("token");
  console.log("Token utilisé :", token);

  if (!token) throw new Error("Aucun token trouvé, utilisateur non connecté");

  const res = await fetch(`${BASE_URL}/compte/mes-comptes`, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

 
  console.log("Status HTTP :", res.status, res.statusText);

  const text = await res.text();
  console.log("Réponse brute :", text);

  // Tenter de parser le JSON
  try {
    const user = JSON.parse(text);
    console.log("Utilisateur connecté :", user);
    return user;
  } catch (err) {
    console.error("Erreur parsing JSON :", err);
    throw new Error("Réponse du serveur non valide : " + text);
  }
};
