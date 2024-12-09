import React from "react";
import Contact from "./Contact";

export default function ServicesPage() {
  return (
    <div className="bg-white items-center">
      <div class="flex flex-col items-center bg-form-color py-10 bg-opacity-50">
        <p class="text-center text-3xl text-black font-bold">SERVICES</p>
      </div>
      <div className="my-10 mx-4">
        <div>
          <p class=" text-2xl text-black font-semibold mt-3">
            SERVICES AUX PARTICULIERS
          </p>
          <p class="text-lg text-black mt-3">
            ✓ Surveillances Adultère <br />
            ✓ Surveillances Affaire conjugale <br />
            ✓ Surveillances Contrôle emploi du temps <br />
            ✓ Enquêtes Moralité Avant mariage <br />
            ✓ Enquêtes Garde d’enfants <br />
            ✓ Recherches Personne disparue <br />
            ✓ Recherches Patrimoine / Débiteur <br />
            ✓ Recherches Témoins / Fugue / Abus de confiance <br />
          </p>
        </div>
        <div>
          <p class="text-2xl text-black font-semibold mt-6">
            DÉPARTEMENT PROFESSIONNEL
          </p>
          <p class="text-lg text-black mt-3">
            ✓ Surveillances Vérification de la légitimité / de l’arrêt de
            travail/Affaire prud’hommale <br />
            ✓ Surveillances Concurrence déloyale / Détournement / vol de
            marchandises/ Espionnage industriel & commercial <br />
            ✓ Enquêtes Industrielle & commerciale Pré-embauche /Géolocalisation{" "}
            <br />
            ✓ Recherches Domicile / employeur Dirigeant de société <br />
            ✓ Recherches Bien / Véhicule / Détection de microphones <br />
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}
