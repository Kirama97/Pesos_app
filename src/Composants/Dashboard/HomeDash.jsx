import React from 'react'
import { FaUserCircle, FaMoneyBillWave, FaArrowDown, FaArrowUp } from 'react-icons/fa'
import Envoyer from './Envoyer'
import { FaPhone } from 'react-icons/fa6';
import { useOutletContext } from 'react-router-dom';

const HomeDash = ( ) => {



  //  if (!compte || !compte.utilisateur) {
  //   return <div>Chargement...</div>;
  // }


//  console.log(compte.utilisateur)

 const { compte } = useOutletContext();

  // Données fictives pour l'exemple
  const user = {
    nom: "Kira Dev",
    numero: "+225 07 00 00 00",
    solde: 125000,
    devise: "FCFA"
  }

  const operations = [
    { id: 1, type: "reçu", montant: 20000, date: "18/09/2025", nom: "Alice", icon: <FaArrowDown className="text-green-500" /> },
    { id: 2, type: "envoyé", montant: 10000, date: "17/09/2025", nom: "Bob", icon: <FaArrowUp className="text-red-500" /> },
    { id: 3, type: "reçu", montant: 5000, date: "16/09/2025", nom: "Charlie", icon: <FaArrowDown className="text-green-500" /> },
  
  ]

  return (
    <div className="bg-white rounded-xl h-full p-6 flex flex-col gap-6 shadow-lg">
    
      <div className="flex items-center justify-end gap-4">
        <FaPhone className="text-2xl text-bg-secondaire" />
        <div>
          <div className="font-bold text-md">Numero de telephone</div>
             {compte && (
          <div className="text-gray-500 text-sm">{compte.utilisateur?.telephone}</div>
          )}

        </div>
      </div>


  
      {/* Historique rapide */}
      <div>
        <div className="font-semibold text-gray-700 mb-2">Dernières opérations</div>
        <div className="flex flex-col gap-2 h-[40vh] overflow-y-scroll ">
          {operations.map(op => (
            <div key={op.id} className="flex items-center justify-between bg-gray-50 rounded p-3 shadow-sm">
              <div className="flex items-center gap-2">
                {op.icon}
                <span className="font-medium">{op.type === "reçu" ? "Reçu de" : "Envoyé à"} {op.nom}</span>
              </div>
              <div className={`font-bold ${op.type === "reçu" ? "text-green-600" : "text-red-600"}`}>
                {op.type === "reçu" ? "+" : "-"}{op.montant.toLocaleString()} {user.devise}
              </div>
              <div className="text-xs text-gray-400">{op.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeDash