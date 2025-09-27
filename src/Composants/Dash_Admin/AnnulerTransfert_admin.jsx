import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaExchangeAlt } from "react-icons/fa";

const AnnulerTransfer = ({ telephoneAdmin = "+221771254869" }) => {
  const [telephoneSource, setTelephoneSource] = useState("");
  const [telephoneDestination, setTelephoneDestination] = useState("");
  const [montant, setMontant] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!telephoneSource || !telephoneDestination || !montant) {
      toast.error("Veuillez remplir tous les champs !");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8080/api/transactions/admin/annuler",
        {
          telephoneSource,
          telephoneDestination,
          montant: parseFloat(montant),
          telephoneAdmin,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("✅ Annulation envoyée avec succès !");
      setTelephoneSource("");
      setTelephoneDestination("");
      setMontant("");
    } catch (error) {
      console.error("Erreur annulation :", error);
      toast.error("❌ Erreur lors de l'envoi de l'annulation !");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg mx-auto mt-6">
      <ToastContainer />

      {/*  Titre */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-3">
          <FaExchangeAlt className="text-red-500 text-2xl" />
        </div>
        <h1 className="text-2xl font-bold text-red-600">
          Annulation de Transfert
        </h1>
        <p className="text-gray-500 text-sm mt-2 max-w-sm">
          Remplissez le formulaire ci-dessous pour soumettre une demande
          d’annulation d’un transfert effectué.
        </p>
      </div>

      {/* 📝 Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full"
        autoComplete="off"
      >
        {/* Téléphone Source */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone Source
          </label>
          <input
            type="text"
            value={telephoneSource}
            onChange={(e) => setTelephoneSource(e.target.value)}
            placeholder="+221773303245"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
            required
          />
        </div>

        {/* Téléphone Destination */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone Destination
          </label>
          <input
            type="text"
            value={telephoneDestination}
            onChange={(e) => setTelephoneDestination(e.target.value)}
            placeholder="+221776889283"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
            required
          />
        </div>

        {/* Montant */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Montant (FCFA)
          </label>
          <input
            type="number"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
            placeholder="300.00"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
            required
          />
        </div>

        {/* Bouton */}
        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? "bg-red-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
          } text-white font-semibold py-2 rounded-lg flex items-center justify-center transition duration-300`}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
          ) : (
            <FaExchangeAlt className="mr-2" />
          )}
          {loading ? "Envoi en cours..." : "Envoyer l'annulation"}
        </button>
      </form>
    </div>
  );
};

export default AnnulerTransfer;
