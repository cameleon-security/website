import { React, useEffect,useCallback } from "react";
import Casablanca from "../assets/casablanca.jpg";
import Surveillance from "../assets/surveillance.png";
import Consulting from "../assets/consulting.jpg";
import "../css/ServicesPart.css";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {useNavigate} from 'react-router-dom';


export default function ServicesPart() {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  //const [animationPlayed, setAnimationPlayed] = useState(false);

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/contact', {replace: true}), [navigate]);


  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    controls.start("visible");
  }, [inView]);

  return (
    <div
      ref={ref}
      id="servicesDiv"
      class="grid py-2 grid-cols-1 mx-12 sm:mx-20 md:grid-cols-3 md:mx-4 gap-4 bg-white"
    >
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={controls}
            exit={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            class="rounded-lg shadow-md flex flex-col p-4 h-full bg-form-color bg-opacity-50 "
          >
            <h3 class="text-xl text-black font-bold mb-4 text-center">
              SURVEILLANCE, ENQUÊTE,
              <br /> RECHERCHE
            </h3>
            <img
              id="services"
              src={Surveillance}
              alt="Card Image"
              class="mb-4 mx-auto"
            />
            <p class="text-black text-center flex-grow">
              Toutes enquêtes et filatures, divorces, privées, industrielles et
              commerciales...
            </p>
            <div class="mt-10 flex justify-center mb-2">
              <button onClick={handleOnClick} class="bg-cameleon-primary bg-opacity-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Plus d'info
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={controls}
            transition={{ duration: 1.6 }}
            exit={{ opacity: 1, y: 0 }}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            class="rounded-lg shadow-md flex flex-col p-4 h-full bg-form-color bg-opacity-50 "
          >
            <h3 class="text-xl text-black font-bold mb-4 text-center">
              SERVICES AUX ENTREPRISES ET PARTICULIERS
            </h3>
            <img
              id="services"
              src={Consulting}
              alt="Card Image"
              class="mb-4 mx-auto"
            />
            <p class="text-black text-center flex-grow">
              L'Agence Cameleon Détective propose différentes services que
              vous soyez un particulier ou un chef d'entreprise
            </p>
            <div class="mt-10 flex justify-center mb-2">
              <button onClick={handleOnClick} class="bg-cameleon-primary bg-opacity-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Plus d'info
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            exit={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            class="rounded-lg shadow-md flex flex-col p-4 h-full bg-form-color bg-opacity-50 "
          >
            <h3 class="text-xl text-black font-bold mb-4 text-center">
              DÉTECTIVE PRIVÉ CASABLANCA <br />
              MAROC
            </h3>
            <img
              id="services"
              src={Casablanca}
              alt="Card Image"
              class="mb-4 mx-auto"
            />
            <p class="text-black text-center">
              Intervention Casablanca et au Maroc Notre agence de détective
              privée est sur Casablanca Confidentialité absolue, contact
              permanent au 0707-090823
            </p>
            <div class="mt-10 flex justify-center mb-2">
              <button onClick={handleOnClick} class="bg-cameleon-primary bg-opacity-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Plus d'info
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
