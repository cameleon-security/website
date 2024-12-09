import React from "react";
import "../css/Rappelez.css";
import Recompense from "../assets/recompense.png";
import Graphique from "../assets/graphique.png";
import Agent from "../assets/agent.png";

export default function Rappelez() {
  return (
    <div className="mt-8">
      <h2 className="text-center text-black text-2xl md:text-3xl mt-8 font-bold">
        Rappelez
      </h2>
      <div className="grid md:grid-cols-3 mt-10 mx-10">
        <div>
          <img
            src={Recompense}
            alt="Image recompence"
            id="rappelez_badges"
            class="mt-3 md:mt-10"
          />
          <p className="mt-3 text-center text-black text-sm md:text-lg font-bold">
            21 ANS D 'EXPÉRIENCE
          </p>
          <p className="mt-3 mx-2 mb-8 text-center text-black text-sm md:text-lg font-normal">
            Plus de 21 ans d'expertise et de métier. Nous saurons répondre à
            toutes vos demandes.(détective privé Casablanca)
          </p>
        </div>
        <div>
          {" "}
          <img
            src={Agent}
            alt="Image agent"
            id="rappelez_badges"
            class="mt-3 md:mb-4 md:mt-10"
          />
          <p className="mt-3 text-center text-black text-sm md:text-lg font-bold">
            7/7
          </p>
          <p className="mt-3 mx-2 mb-8 text-center text-black text-sm md:text-lg font-normal">
            Nous restons à votre écoutes 7/7 pour trouver ensemble une solution
            à vos problèmes(détective privé Casablanca)
          </p>
        </div>
        <div>
          {" "}
          <img
            src={Graphique}
            alt="Image graphique"
            id="rappelez_badges"
            class="mt-3 md:mb-4 md:mt-10"
          />
          <p className="mt-3 text-center text-black text-sm md:text-lg font-bold">
            DEVIS GRATUIT
          </p>
          <p className="mt-3 mx-2 mb-8 text-center text-black text-sm md:text-lg font-normal">
            Nous proposons aussi des facilités de paiements Appelez-nous
            maintenant 0707-090823,(détective privé Casablanca)
          </p>
        </div>
      </div>
    </div>
  );
}
