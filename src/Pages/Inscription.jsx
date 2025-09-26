import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import pesosLogo from '/src/assets/icones/pesos_logo.svg'
import moneybghero4 from '/src/assets/images/money_bg_hero4.png';


import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { BASE_URL } from '../config';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

const Inscription = () => {


  const [prenom , setPrenom] = useState();
  const [nom , setNom] = useState();
  const [email , setEmail] = useState();
  const [pays , setPays] = useState();
  const [telephone , setTelephone] = useState();
  const [motDePasse , setMotDePasse] = useState();
  const [cmotDePasse , setcMotDePasse] = useState();
  const [numeroPiece , setnumeroPiece] = useState();
  const [photo, setPhoto] = useState(null);
  const [photoPiece, setphotoPiece] = useState(null)


  const navigate = useNavigate()

      
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (motDePasse !== cmotDePasse) {
        alert("Les mots de passe ne correspondent pas.");
        return;
      };

      
     

      const user = {
        nom,
        prenom,
        email,
        telephone,
        pays,
        motDePasse,
        numeroPiece,
        // photo,
        // photoPiece
      };

      try {
        const response = await fetch(`${BASE_URL}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        });

        let responseData;

        // On essaie de parser JSON, sinon fallback texte
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          responseData = await response.json();
        } else {
          const text = await response.text();
          responseData = { message: text || 'Une erreur est survenue' };
        }

        if (response.ok) {
          alert(responseData.message || 'Inscription réussie !');
          navigate('/connexion');
        } else {
          alert('Erreur : ' + (responseData.message || 'Une erreur est survenue'));
        }

      } catch (error) {
        alert('Erreur réseau : ' + error.message);
      }
    };



  return (
    <div className='p-[2%] bg-[url-()] md:h-[100vh] w-full'>
      
        <div className="flex flex-col md:flex-row rounded-xl  overflow-hidden shadow-xl bg-blanc h-full w-full">

            <div className="w-full md:w-1/2 lg:w-3/5 md:flex  justify-center items-center"  style={{ backgroundImage: `url(${moneybghero4})` }}>
              <img className='max-md:mx-auto h-[50px] md:h-[100px] w-30' src={pesosLogo} alt="Logo Pesos" />
            </div>

            <div className="w-full md:w-1/2 lg:w-2/5 h-full text-blanc bg-bg-secondaire p-5 max-md:pb-10">
                <h2 className='text-center font-bold text-xl my-5'>INSCRIPTION</h2>
                
                <form className='mt-10 px-3 md:px-10' onSubmit={handleSubmit}>

                    <div className="grid grid-cols-2 gap-5 mt-10">

                          {/* Prenom */}
                          <div className="flex flex-col gap-2">
                            <label htmlFor="prenom" className='text-sm'>Prenom</label>
                            <input 
                            className='p-2 border-none focus:outline-none focus:ring-2 focus:ring-neutral-800 rounded-sm placeholder:text-sm placeholder:text-[13px] text-black text-sm' 
                            type="text" 
                            name="prenom" 
                            id="prenom" 
                            placeholder='Entrer votre prenom' 
                            required
                            value={prenom}
                            onChange={e => setPrenom(e.target.value)}
                            
                            />
                          </div>
                          {/* nom */}
                          <div className="flex flex-col gap-2">
                            <label htmlFor="nom" className='text-sm'>Nom</label>
                            <input 
                            className='p-2 border-none focus:outline-none focus:ring-2 focus:ring-neutral-800 rounded-sm placeholder:text-sm placeholder:text-[13px] text-black text-sm' 
                            type="text" 
                            name="nom"
                            id="nom" 
                            placeholder='Entrer votre nom' 
                            required 
                            value={nom}
                            onChange={e => setNom(e.target.value)}

                             />
                          </div>
                    
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                          {/* email */}
                          <div className="flex flex-col gap-2">
                            <label htmlFor="email" className='text-sm'>Email</label>
                            <input 
                            className='p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-neutral-800 text-black text-sm placeholder:text-[13px]' 
                            type="email" 
                            name="email"
                             id="email" 
                             placeholder='Email'
                            required 
                             value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                          </div>
                          {/* telephone */}
                          <div className="flex flex-col gap-2">
                            <label htmlFor="telephone" className='text-sm'>Téléphone</label>
                            <input
                             className='p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-neutral-800 text-black text-sm placeholder:text-[13px]' 
                             type="tel" 
                             name="telephone" 
                             id="telephone" 
                             placeholder="+221 xxx xx xx"
                              required
                              value={telephone}
                            onChange={e => setTelephone(e.target.value)}
                               />
                          </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                          {/* mots de passe */}
                          <div className="flex flex-col gap-2">
                            <label htmlFor="password" className='text-sm'>Mot de passe</label>
                            <input 
                            className='p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-neutral-800 text-black text-sm placeholder:text-[13px]' 
                            type="password" 
                            name="password" 
                            id="password" placeholder='Mot de passe'
                             required
                             value={motDePasse}
                            onChange={e =>  setMotDePasse(e.target.value)}
                              />
                          </div>
                          {/* confirmer le mots de passe */}
                          <div className="flex flex-col gap-2">
                            <label htmlFor="confirmPassword" className='text-sm'>Confirmer le mot de passe</label>
                            <input
                             className='p-2 rounded-sm  focus:outline-none focus:ring-2 focus:ring-neutral-800 text-black text-sm placeholder:text-[13px]'
                              type="password" 
                              name="confirmPassword" 
                              id="confirmPassword" 
                              placeholder="Confirmer le mot de passe" 
                              required 
                              value={cmotDePasse}
                            onChange={e =>  setcMotDePasse(e.target.value)}
                              />
                          </div>
                        </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">

                          {/* pays */}
                          <div className="flex flex-col gap-2 ">
                            <label htmlFor="country" className='text-sm'>Pays</label>
                          
                            <select 
                            id="pays" 
                            name="pays" 
                            class="  w-full text-black  rounded-md p-2 border focus:outline-none focus:ring-3 focus:ring-red-800 sm:text-sm"
                             value={pays}
                            onChange={e =>  setPays(e.target.value)}
                             >
                              <option value="senegal">Sénégal</option>
                              <option value="mali">Mali</option>
                              <option value="mauritanie">Mauritanie</option>
                              <option value="cote-ivoire">Côte d’Ivoire</option>
                              <option value="benin">Bénin</option>
                            </select>
                          </div>

                            {/* numero identité */}
                            <div className="flex flex-col gap-2">
                              <label htmlFor="numeroPiece" className='text-sm'>Numéro identité</label>
                              <input 
                              className='p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-neutral-800 text-black text-sm placeholder:text-[13px]'
                               type="text" 
                               name="numeroPiece" 
                               id="numeroPiece" 
                               placeholder='Entrer votre numéro'
                                required 
                                 value={numeroPiece}
                                onChange={e =>  setnumeroPiece(e.target.value)}
                                />
                            </div>
                        </div>
                     <div className="grid grid-cols-2 gap-5 mt-5">
                      
                          {/* photo profil*/}
                          <div className="flex flex-col gap-2 ">
                            <label htmlFor="photo" className='text-sm'>Photo de profil</label>
                            <Button
                            
                              component="label"
                              sx={{
                                backgroundColor: "#FFFF",
                                "&:hover": { backgroundColor: "#1f3347" }
                              }}
                              role={undefined}
                              variant="contained"
                              tabIndex={-1}
                              startIcon={<CloudUploadIcon className='text-bg-secondaire ' />}
                            >
                              <span className='text-bg-secondaire '>profil</span>
                              <VisuallyHiddenInput
                                type="file"
                                accept="image/png, image/jpeg ,image/jpg"
                              
                                onChange={e =>  setPhoto(e.target.files[0])}
                                name="photo"
                              />
                            </Button>
                            {photo && <span className="text-xs">{photo.name}</span>}
                          </div>
                          {/* photo de piece */}
                          <div className="flex flex-col gap-2 ">
                            <label htmlFor="photoPiece" className='text-sm'>Photo piece</label>
                            <Button
                              component="label"
                              sx={{
                                backgroundColor: "#0033",
                                "&:hover": { backgroundColor: "#000000" }
                              }}
                              role={undefined}
                              variant="contained"
                              tabIndex={-1}
                              startIcon={<CloudUploadIcon />}
                            >
                              Photo
                              <VisuallyHiddenInput
                                type="file"
                                accept="image/png, image/jpeg ,image/jpg"
                              
                                onChange={e =>   setphotoPiece(e.target.files[0])}
                                name="photoPiece"
                              />
                            </Button>
                            {photoPiece && <span className="text-xs">{photoPiece.name}</span>}
                          </div>
                    </div>

                    {/* submit button */}

                    <button type='submit' className='mt-10 w-full rounded-sm py-3 bg-indigo-800 hover:bg-indigo-950'>S'inscrire</button>

                    <div className="">
                      <p className='text-sm mt-5'>Si vous avez déjà un compte ! <Link to="/connexion" className='text-gray-400 hover:text-yellow-500'>Connexion</Link></p>
                    </div>

                </form>
            </div>
      </div>
    </div>
  )
}

export default Inscription