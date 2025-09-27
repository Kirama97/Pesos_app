import React from "react";
import { FaQuestionCircle, FaMoneyBillWave, FaHandHoldingUsd, FaHeadset } from "react-icons/fa";

const Aide_admin = () => {
  const sections = [
    {
      icon: <FaQuestionCircle className="text-indigo-600 w-5 h-5" />,
      title: "Comment utiliser l'application ?",
      content: "Notre application vous permet d'envoyer et de recevoir de l'argent facilement et en toute sécurité. Naviguez dans le menu pour accéder à votre tableau de bord, consulter votre solde, voir l'historique de vos transactions et gérer votre profil.",
    },
    {
      icon: <FaMoneyBillWave className="text-indigo-600 w-5 h-5" />,
      title: "Comment faire un transfert ?",
      content: (
        <ul className="list-disc pl-6 text-gray-700">
          <li>Depuis le tableau de bord, cliquez sur le bouton <b>Envoyer</b>.</li>
          <li>Remplissez le nom du bénéficiaire et le montant à transférer.</li>
          <li>Vérifiez les frais affichés puis validez l'envoi.</li>
          <li>Le bénéficiaire recevra l'argent instantanément.</li>
        </ul>
      ),
    },
    {
      icon: <FaHandHoldingUsd className="text-indigo-600 w-5 h-5" />,
      title: "Comment effectuer un retrait ?",
      content: (
        <ul className="list-disc pl-6 text-gray-700">
          <li>Rendez-vous dans la section <b>Retrait</b> du menu.</li>
          <li>Indiquez le montant à retirer et suivez les instructions affichées.</li>
          <li>Présentez-vous dans un point partenaire avec votre pièce d'identité pour finaliser le retrait.</li>
        </ul>
      ),
    },
    {
      icon: <FaHeadset className="text-indigo-600 w-5 h-5" />,
      title: "Besoin d'assistance ?",
      content: (
        <p className="text-gray-700">
          Si vous avez des questions ou rencontrez un problème, contactez notre support :<br />
          <span className="font-semibold">Email :</span> support@pesosapp.com<br />
          <span className="font-semibold">Téléphone :</span>+22177 125 48 69<br />
          Notre équipe est disponible 7j/7 pour vous aider.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6 h-full">
      <h1 className="text-2xl font-bold text-bg-secondaire text-center mb-4">
        Centre d'aide
      </h1>

      <main className="flex flex-col gap-6 max-h-[50vh] overflow-y-auto p-2">
        {sections.map((section, idx) => (
          <section key={idx} className="bg-indigo-50/20 rounded-xl p-4 hover:shadow-md transition shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              {section.icon}
              <h2 className="text-lg font-semibold text-indigo-700">{section.title}</h2>
            </div>
            <div className="text-gray-700 text-sm">{section.content}</div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Aide_admin;
