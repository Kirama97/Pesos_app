

import { BASE_URL } from '../config';




export const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
  };
};


// Récupérer les infos utilisateur connecté

export const fetchUserProfile = async () => {
  const response = await fetch(`${BASE_URL}/utilisateur/{id}`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });

  let data;
  try {
    data = await response.json();
  } catch {
    const text = await response.text();
    data = { message: text || 'Erreur inconnue' };
  }

  if (!response.ok) throw new Error(data.message || 'Impossible de récupérer les données utilisateur');
  return data;
};
