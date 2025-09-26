
import { NavLink, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { RiLogoutCircleRLine } from 'react-icons/ri';

import { FaRegUser } from 'react-icons/fa';
// import default_profil from '/src/assets/images/default_profil.jpg'
import pesos_img6 from '/src/assets/images/pesos_img6.png'
import MontantCompte from './MontantCompte';
import Envoyer from './Envoyer';
import Retrait from './Retrait';
import Badge from '@mui/material/Badge';






const Navbar = ({ compte , profil}) => {



  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    
    navigate('/connexion'); 
  };




  return (
        <div className='p-5 flex flex-col justify-between h-[32vh] bg-no-repeat bg-cover bg-center  bg-bg-primaire text-noire rounded-xl  '  style={{ backgroundImage: `url(${pesos_img6})` }}>
            <div className=" w-full flex justify-between items-center">
               {/* nom compte */}
                  {compte && (
                    <h1 className="text-bg-secondaire font-semibold text-xl">
                      {profil.prenom} {profil.nom}
                    </h1>
                  )}
                {/* numero compte */}
                <div className="numero_compte backdrop-blur-sm px-5 py-2 text-sm flex gap-5 items-center rounded-full bg-neutral-100/10  shadow-md">
                  <FaSearch className="text-neutral-4500" />
                  <span className='flex items-center gap-3 rounded-full text-neutral-100 bg-indigo-600/50 backdrop-blur-lg py-2 px-3 '>Numero Compte : 
                  {compte && ( <p>{compte.numeroCompte}</p> )}
             </span>
                </div>

                <div className="icons flex items-center gap-3">

                       {/* notifiaction */}

                      <Badge color="primary" badgeContent={1}   overlap="circular"
                         sx={{
                          "& .MuiBadge-badge": {
                            backgroundColor: "#1fa21a", // vert perso
                            color: "white", // couleur du texte
                          },
                        }}>
                    <div className="w-8 h-8 group cursor-pointer border-2 bg-bg-secondaire border-bg-secondaire  rounded-full  hover:bg-bg-primaire transtion-10 flex items-center justify-center "> 
                     
                          <IoNotifications className="group-hover:text-bg-secondaire  w-5 h-8 text-blanc" />
                      
                      
                       
                    </div>
                      </Badge>

                     {/* profil */}

                    <NavLink to="/profil" className="w-8 h-8 overflow-hidden group cursor-pointer border-2  border-bg-blanc  rounded-full bg-bg-secondaire hover:bg-bg-primaire transtion-10 flex items-center justify-center "> 
                        <FaRegUser className='group-hover:text-bg-secondaire  w-4 h-4 text-blanc'></FaRegUser>
                     
                          {/* <img className=' object-cover group-hover:border-bg-secondaire ' src={default_profil} alt="" /> */}
                    </NavLink>

                       {/* deconexion */}
                    <NavLink   onClick={handleLogout}  className="w-8 h-8 group cursor-pointer border-2  border-bg-secondaire  rounded-full bg-bg-secondaire hover:bg-bg-primaire transtion-10 flex items-center justify-center "> 
                    
                        <RiLogoutCircleRLine  className="group-hover:text-bg-secondaire  w-4 h-4 text-blanc"></RiLogoutCircleRLine>
                      
                    </NavLink>
              
                </div>

            </div>

            {/* envoie retrait et somme */}

            <div className="flex h-[15vh] w-full justify-between items-center mt-10">

               <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-3/6 h-full ">              
                  <Envoyer></Envoyer>   
                  <Retrait></Retrait>     
               </div>

               <MontantCompte compte={compte} ></MontantCompte>

            </div>

        </div>

  )
}

export default Navbar












  // <nav className='  rounded-full  py-1  text-sm shadow-lg text-noire flex justify-around items-center '>
    //     <img className='h-12 w-30'  src={pesosLogo} alt="" srcset="" />

    //     <ul className='flex gap-10 '>
    //         <li>
    //            <a href="">Home</a>
    //         </li>
    //         <li>
    //            <a href="">Historique</a>
    //         </li>
    //         <li>
    //            <a href="">Contact</a>
    //         </li>
    //     </ul>

    //     <div className="">
    //         <button className=''>Déconnexion</button>
    //     </div>
    // </nav>