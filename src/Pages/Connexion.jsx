import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pesosLogo from '/src/assets/icones/pesos_logo.svg';
import moneybghero4 from '/src/assets/images/money_bg_hero4.png';
import { BASE_URL } from '../config';

const Connexion = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();

    if(email === "" || motDePasse === "") {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const user = { email, motDePasse };

    try {
      // 1️⃣ Appel login pour récupérer le token
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      });

      const contentType = response.headers.get("content-type");
      let responseBody = contentType?.includes("application/json") 
                          ? await response.json() 
                          : await response.text();

      if (!response.ok) {
        const errorMessage = responseBody?.message || responseBody || "Une erreur est survenue";
        alert('Erreur : ' + errorMessage);
        return;
      }

      // 2️⃣ Stocker le token
      const token = responseBody.token;
      if (!token) {
        alert("Token non reçu !");
        return;
      }
      localStorage.setItem('token', token);

      // 3️⃣ Appel profil pour récupérer le rôle
      const profilResponse = await fetch(`${BASE_URL}/api/utilisateurs/profil`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      const profil = await profilResponse.json();

      // Stocker le profil dans localStorage si besoin
      localStorage.setItem('profil', JSON.stringify(profil));

      // 4️⃣ Redirection selon le rôle
      const role = profil.role?.id || "USER";
      if (role === 2) {
        navigate('/admin/home');
      } else {
        navigate('/dashboard/accueil');
      }

      alert("Connexion réussie !");

    } catch (error) {
      alert('Erreur réseau : ' + error.message);
    }
  };

  return (
    <div className='p-[2%] md:h-[100vh] w-full'>
      <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-xl bg-blanc h-full w-full">
        <div className="w-full md:w-1/2 lg:w-3/5 flex justify-center items-center" 
             style={{ backgroundImage: `url(${moneybghero4})` }}>
          <img className='max-md:mx-auto h-[50px] md:h-[100px] w-30' src={pesosLogo} alt="Logo" />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 h-full text-blanc bg-bg-secondaire p-5 pb-10">
          <h2 className='text-center font-bold text-xl my-5'>Connexion</h2>
          <form onSubmit={submitForm} className='mt-10 px-3 md:px-10'>
            <div className="flex flex-col gap-2 mb-5">
              <label htmlFor="email">Email</label>
              <input 
                className='p-2 rounded-sm outline-double outline-indigo-600 text-black text-sm placeholder:text-[13px]' 
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder='Email' />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="motDePasse">Mot de passe</label>
              <input  
                className='p-2 rounded-sm outline-double outline-indigo-600 text-black text-sm placeholder:text-[13px]' 
                type="password"
                id="motDePasse"
                placeholder="Mot de passe"
                required
                value={motDePasse}
                onChange={e => setMotDePasse(e.target.value)}
              />
            </div>
            <button type='submit' className='mt-10 w-full rounded-sm py-3 bg-indigo-900 hover:bg-indigo-950'>Connexion</button>
            <p className='text-sm mt-5'>Si vous n'avez pas de compte ! <Link to="/inscription" className='hover:text-yellow-500'>S'inscrire</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
