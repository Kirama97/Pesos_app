import React, { useState } from 'react'

const AnnulerTransfer = () => {
  const [reference, setReference] = useState("")
  const [motif, setMotif] = useState("")
  const [envoye, setEnvoye] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnvoye(true)
    // Ici tu peux envoyer la demande au backend
  }

  return (
    <div className='bg-white rounded-xl h-full p-5 flex flex-col items-center'>
      <h1 className='text-center text-2xl font-bold mb-4 text-bg-secondaire'>Accepter une annulation de transfert</h1>
      <p className="text-center text-gray-700 mb-6">
     
        Veuillez renseigner les informations ci-dessous.
      </p>
      {envoye ? (
        <div className="bg-green-100 text-green-700 px-6 py-4 rounded shadow text-center">
          Votre demande d'annulation a été envoyée.<br />
          Un administrateur va l'examiner et vous serez notifié de la décision.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
          <div>
            <label className="block text-sm mb-1 text-gray-700">Référence du transfert</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 text-sm"
              value={reference}
              onChange={e => setReference(e.target.value)}  
              required
              placeholder="Ex : TRF20250922XXXX"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700">Le motif</label>
            <textarea
              className="w-full border rounded px-3 py-2 text-sm"
              value={motif}
              onChange={e => setMotif(e.target.value)}
              required
              placeholder="Expliquez la raison de votre demande"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white rounded py-2 font-semibold hover:bg-red-700 transition"
          >
            Envoyer la demande
          </button>
        </form>
      )}
    </div>
  )
}

export default AnnulerTransfer