import React from 'react'

const Aide = () => {
  return (
    <div className='bg-white rounded-xl h-full p-6 flex flex-col gap-6 shadow-lg'>
      <h1 className='text-center text-2xl font-bold text-bg-secondaire mb-4'>Centre d'aide</h1>

       <main className='max-h-[40vh] overflow-y-scroll'>
            <section >
            <h2 className="text-lg font-semibold mb-2 text-indigo-700">Comment utiliser l'application ?</h2>
            <p className="text-gray-700 mb-2">
              Notre application vous permet d'envoyer et de recevoir de l'argent facilement et en toute sécurité. 
              Naviguez dans le menu pour accéder à votre tableau de bord, consulter votre solde, voir l'historique de vos transactions et gérer votre profil.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-indigo-700">Comment faire un transfert ?</h2>
            <ul className="list-disc pl-5 text-gray-700 mb-2">
              <li>Depuis le tableau de bord, cliquez sur le bouton <b>Envoyer</b>.</li>
              <li>Remplissez le nom du bénéficiaire et le montant à transférer.</li>
              <li>Vérifiez les frais affichés puis validez l'envoi.</li>
              <li>Le bénéficiaire recevra l'argent instantanément.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-indigo-700">Comment effectuer un retrait ?</h2>
            <ul className="list-disc pl-5 text-gray-700 mb-2">
              <li>Rendez-vous dans la section <b>Retrait</b> du menu.</li>
              <li>Indiquez le montant à retirer et suivez les instructions affichées.</li>
              <li>Présentez-vous dans un point partenaire avec votre pièce d'identité pour finaliser le retrait.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-indigo-700">Besoin d'assistance ?</h2>
            <p className="text-gray-700">
              Si vous avez des questions ou rencontrez un problème, contactez notre support :<br />
              <span className="font-semibold">Email :</span> support@pesosapp.com<br />
              <span className="font-semibold">Téléphone :</span> +221 78 581 57 82<br />
              Notre équipe est disponible 7j/7 pour vous aider.
            </p>
          </section>
       </main>
    </div>
  )
}

export default Aide