import React, { useState } from 'react'
import { FaUserEdit, FaCamera } from 'react-icons/fa'
import Aside_admin from '../Dash_Admin/Aside_admin'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUserProfile } from '../../services/api';
import { useEffect } from 'react';
import default_profil from '/src/assets/images/default_profil.jpg'







const Profil_admin = () => {



  const [profil, setProfil] = useState(null);
  const [loader, setLoading] = useState(true);
  const [erreur, setErreur] = useState("");

  const [photo, setPhoto] = useState(null);
  // const [photoPiece, setPhotoPiece] = useState(null);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [pays, setPays] = useState("");
  const [telephone, setTelephone] = useState("");
  const [numeroPiece, setNumeroPiece] = useState("");
  const [newMotDePasse, setNewMotDePasse] = useState("");
  const [motDepasse, setMotDePasse] = useState("");

 useEffect(() => {
    const getProfile = async () => {
      try {
        console.log("Token présent :", localStorage.getItem("token"));
        const data = await fetchUserProfile();
        console.log("Profil :", data);
        setProfil(data);

       
        setNom(data.nom || "");
        setPrenom(data.prenom || "");
        setEmail(data.email || "");
        setPays(data.pays || "");
        setTelephone(data.telephone || "");
        // setMotDePasse(data.motDePasse || "");
        setNumeroPiece(data.numeroPiece || "");
      } catch (err) {
        console.error("Erreur fetchUserProfile :", err);
        setErreur(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  if (loader) return <div>Chargement...</div>;
  if (erreur) return <div className="text-red-500">{erreur}</div>;



  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    setPhoto(file)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setPhoto(reader.result)
      reader.readAsDataURL(file)
    } else {
      setPhoto(null)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const NewProfil = {

        nom,
        prenom,
        email,
        pays,
        numeroPiece,
        telephone,
        motDePasse : newMotDePasse ,
        photo,
        photoPiece

    }
    console.log()
  
    toast.success('Profil mis à jour ! ')
  
  }

  return (
    <>
      <section className="h-[100vh] flex gap-5 bg-slate-300 p-5">
        <Aside_admin />
        <main className='w-full'>
          <div className="bg-white rounded-xl h-full p-6 flex flex-col gap-8 shadow-lg transition-colors">
            <h1 className="text-center text-2xl font-bold mb-4 flex items-center justify-center gap-2 text-bg-secondaire">
              <FaUserEdit /> Mon Profil
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
              {/* Photo de profil */}
              <div className="relative">
                <img
                  src={photo || default_profil}
                  alt="Photo de profil"
                  className="w-28 h-28 rounded-full object-cover border-4 border-bg-secondaire shadow"
                />
                <label htmlFor="photo" className="absolute bottom-2 right-2 bg-bg-secondaire p-2 rounded-full cursor-pointer hover:bg-indigo-800 transition">
                  <FaCamera className="text-white" />
                  <input
                    id="photo"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhotoChange}
                  />
                </label>
              </div>

              {/* Infos utilisateur */}
              <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              
                <div>
                  <label className="block text-sm mb-1 text-gray-700">Prenom</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={prenom}
                    onChange={e => setPrenom(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-1 text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-700">Pays</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={pays}
                    onChange={e => setPays(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-700">Numéro de téléphone</label>
                  <input
                    type="tel"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={telephone}
                    onChange={e => setTelephone(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-700">Numéro d'identité</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={numeroPiece}
                    onChange={e => setNumeroPiece(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-700">Ancien mot de passe</label>
                  <input
                    type="password"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={motDepasse}
                    onChange={e => setMotDePasse(e.target.value)}
                    placeholder="Ancien mot de passe"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-700">Nouveau mot de passe</label>
                  <input
                    type="password"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={newMotDePasse}
                    onChange={e => setNewMotDePasse(e.target.value)}
                    placeholder="Nouveau mot de passe"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled
                className="bg-bg-secondaire text-white rounded py-2 px-8 mt-4 hover:bg-indigo-800 transition"
              >
                Enregistrer les modifications
              </button>
            </form>
          </div>
        </main>
       
      </section>
       <ToastContainer />
    </>
  )
}

export default Profil_admin