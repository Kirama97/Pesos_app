import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp, FaSearch } from 'react-icons/fa'

const operationsFictives = [
  { id: 1, type: "reçu", montant: 20000, date: "18/09/2025", nom: "Alice" },
  { id: 2, type: "envoyé", montant: 10000, date: "17/09/2025", nom: "Bob" },
  { id: 3, type: "reçu", montant: 5000, date: "16/09/2025", nom: "Charlie" },
  { id: 4, type: "envoyé", montant: 7000, date: "15/09/2025", nom: "David" },
  { id: 5, type: "reçu", montant: 12000, date: "14/09/2025", nom: "Emma" },


 
]

const Historique = () => {
  const [filtre, setFiltre] = useState('tous')
  const [recherche, setRecherche] = useState('')

  const operationsFiltrees = operationsFictives.filter(op => {
    if (filtre !== 'tous' && op.type !== filtre) return false
    if (recherche && !op.nom.toLowerCase().includes(recherche.toLowerCase())) return false
    return true ;
  })

  return (
    <div className='bg-white rounded-xl h-full p-5 flex flex-col gap-5 shadow-lg'>
      <h1 className='text-center text-xl font-bold mb-2'>Historique des transactions</h1>
      
      {/* Filtres et recherche */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-between mb-4">
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded-full text-sm ${filtre === 'tous' ? 'bg-bg-secondaire text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setFiltre('tous')}
          >Tous</button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${filtre === 'reçu' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setFiltre('reçu')}
          >Reçus</button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${filtre === 'envoyé' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setFiltre('envoyé')}
          >Envoyés</button>
        </div>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Recherche par nom..."
            value={recherche}
            onChange={e => setRecherche(e.target.value)}
            className="w-full pl-8 pr-3 py-2 placeholder:text-sm rounded border focus:outline-none focus:ring-2 focus:ring-bg-secondaire"
          />
          <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Liste des opérations */}
      <div className="flex flex-col gap-2 max-h-[35vh] overflow-y-scroll">
        {operationsFiltrees.length === 0 && (
          <div className="text-center text-gray-400 py-10">Aucune opération trouvée.</div>
        )}
        {operationsFiltrees.map(op => (
          <div key={op.id} className="flex items-center justify-between bg-gray-50 rounded p-3 shadow-sm">
            <div className="flex items-center gap-2">
              {op.type === "reçu"
                ? <FaArrowDown className="text-green-500" />
                : <FaArrowUp className="text-red-500" />}
              <span className="font-medium">{op.type === "reçu" ? "Reçu de" : "Envoyé à"} {op.nom}</span>
            </div>
            <div className={`font-bold ${op.type === "reçu" ? "text-green-600" : "text-red-600"}`}>
              {op.type === "reçu" ? "+" : "-"}{op.montant.toLocaleString()} FCFA
            </div>
            <div className="text-xs text-gray-400">{op.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Historique