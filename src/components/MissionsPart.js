import React, { useEffect } from "react";
import "../css/MissionsPart.css";
import Image from "../assets/missions.png";
import Recompense from "../assets/recompense.png";
import Graphique from "../assets/graphique.png";
import Agent from "../assets/agent.png";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";

function MissionsPart() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="mt-8">
      <div
        id="textMissions"
        class="bg-form-color bg-opacity-50 grid md:grid-cols-3"
      >
        <div class="md:col-span-2">
          <h2 className="text-center text-black text-2xl md:text-3xl mt-8 font-bold">
            Notre Mission ( DÉTECTIVE PRIVÉ )
          </h2>
          <h3 className="text-center text-black text-lg md:text-xl mt-1 font-semibold">
            Votre détective privé :Rechercher la vérité, servir la justice en
            servant nos Clients
          </h3>
          <p className="text-center mt-10 text-lg mx-3 text-black">
            Faire toute la lumière pour préserver et défendre vos droits et vous
            préserver telle est la mission de Cameleon Appelez-nous maintenant
            +212 707090823 disponible 24h/7 Casablanca
          </p>
          <div className="grid md:grid-cols-3 mt-10 mx-1">
            <div>
              <img
                src={Recompense}
                alt="Image"
                id="badges"
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
                alt="Image"
                id="badges"
                class="mt-3 md:mb-4 md:mt-10"
              />
              <p className="mt-3 text-center text-black text-sm md:text-lg font-bold">
                7/7
              </p>
              <p className="mt-3 mx-2 mb-8 text-center text-black text-sm md:text-lg font-normal">
                Nous restons à votre écoutes 7/7 pour trouver ensemble une
                solution à vos problèmes(détective privé Casablanca)
              </p>
            </div>
            <div>
              {" "}
              <img
                src={Graphique}
                alt="Image"
                id="badges"
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
        <AnimatePresence>
          {InView && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={controls}
              exit={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3 }}
              variants={{
                visible: { opacity: 1 },
              }}
              class="md:col-span-1 mt-20 hidden md:block"
            >
              <img
                src={Image}
                id="missionsImage"
                alt="Image"
                class="mt-3 md:mb-4 md:mt-10"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MissionsPart;
