import React, { useState } from 'react'
import { FaUserEdit, FaCamera } from 'react-icons/fa'
import Aside from './Aside'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profil = () => {
  const [photo, setPhoto] = useState(null)
  const [photoPreview, setPhotoPreview] = useState(null)
  const [nom, setNom] = useState("Dev")
  const [prenom, setPreom] = useState("Kira")
  const [email, setEmail] = useState("kira@example.com")
  const [adresse, setAdresse] = useState("Abidjan, Côte d'Ivoire")
  const [tel, setTel] = useState("+225 07 00 00 00")
  const [identite, setIdentite] = useState("CI123456789")
  const [ancienPassword, setAncienPassword] = useState("")
  const [nouveauPassword, setNouveauPassword] = useState("")

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    setPhoto(file)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setPhotoPreview(reader.result)
      reader.readAsDataURL(file)
    } else {
      setPhotoPreview(null)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  
    toast.success('Profil mis à jour ! ')
    navigator
  }

  return (
    <>
      <section className="h-[100vh] flex gap-5 bg-slate-300 p-5">
        <Aside />
        <main className='w-full'>
          <div className="bg-white rounded-xl h-full p-6 flex flex-col gap-8 shadow-lg transition-colors">
            <h1 className="text-center text-2xl font-bold mb-4 flex items-center justify-center gap-2 text-bg-secondaire">
              <FaUserEdit /> Mon Profil
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
              {/* Photo de profil */}
              <div className="relative">
                <img
                  src={photoPreview || "/src/assets/icones/avatar_default.png"}
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
                  <label className="block text-sm mb-1 text-gray-700">Nom </label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={nom}
                    onChange={e => setNom(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-700">Prenom</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={prenom}
                    onChange={e => setPreom(e.target.value)}
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
                  <label className="block text-sm mb-1 text-gray-700">Adresse</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={adresse}
                    onChange={e => setAdresse(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-700">Numéro de téléphone</label>
                  <input
                    type="tel"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={tel}
                    onChange={e => setTel(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-700">Numéro d'identité</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={identite}
                    onChange={e => setIdentite(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-700">Ancien mot de passe</label>
                  <input
                    type="password"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={ancienPassword}
                    onChange={e => setAncienPassword(e.target.value)}
                    placeholder="Ancien mot de passe"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-700">Nouveau mot de passe</label>
                  <input
                    type="password"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={nouveauPassword}
                    onChange={e => setNouveauPassword(e.target.value)}
                    placeholder="Nouveau mot de passe"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-bg-secondaire text-white rounded py-2 px-8 mt-4 hover:bg-indigo-800 transition"
              >
                Enregistrer les modifications
              </button>
            </form>
          </div>
        </main>
        <ToastContainer />
      </section>
    </>
  )
}

export default Profil