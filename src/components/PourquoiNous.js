import { React, useEffect } from "react";
import "../css/PourquoiNous.css";
import PourquoiNousImage from "../assets/pourquoinous.png";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import CountUp from "react-countup";

export default function PourquoiNous() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={ref}>
      <div class="grid md:grid-cols-3">
        <AnimatePresence>
          {InView && (
            <motion.div
              initial={{ x: -300 }}
              animate={controls}
              exit={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 3 }}
              variants={{
                visible: { x: 0 },
              }}
              class="flex justify-center md:justify-start items-center md:items-start md:col-span-1 mx-3"
            >
              <img
                src={PourquoiNousImage}
                id="PourquoiNousImage"
                alt="pourquoi nous image"
                class="mt-3 md:mb-4 md:mt-10"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div class="md:col-span-2 mt-5">
          <h2 className="text-center text-black text-2xl md:text-3xl md:mt-8 font-bold">
            Pourquoi nous ?
          </h2>
          <p className="text-center mt-5 md:text-md text-l mx-6 mb-3 text-black">
            <center>
            <b>Bienvenue à l'agence de détectives privés Caméléon de Casablanca,
            Maroc !</b>
            </center>
            Nous sommes une agence de détectives expérimentée et fiable
            opérant dans les zones de Casablanca et de la région. Chez Caméléon,
            nous sommes fiers de vous offrir les meilleurs services d'enquête
            privée. Toutes nos enquêtes sont menées par des agents expérimentés,
            hautement qualifiés, hommes et femmes, qui comprennent à la fois les
            lois locales et internationales. Tous nos agents reçoivent une
            formation continue et sont régulièrement certifiés avec les
            techniques d'investigation les plus avancées.<br/> Nous comprenons les
            complexités de la surveillance et des enquêtes modernes et nous nous
            efforçons de rester à la pointe de la technologie. Nos garanties de
            résultats et de sécurité font de nous l'une des agences de
            détectives les plus fiables de la région et au-delà. Ce qui nous
            distingue des autres agences de détectives, c'est notre engagement à
            l'égard de chaque affaire sur laquelle nous travaillons. <br/>Nos
            détectives disposent de l'expérience et des ressources nécessaires
            pour mener des enquêtes approfondies qui aboutissent souvent à des
            informations précieuses pouvant être utilisées pour résoudre des
            conflits en cours. <br/>Chez Caméléon, nous pensons que la justice doit
            être rendue rapidement et équitablement. Nous nous engageons à
            respecter les normes professionnelles les plus élevées et à
            satisfaire nos clients. Nous savons que les résultats de nos
            enquêtes peuvent avoir un impact important sur l'avenir des
            personnes et des organisations avec lesquelles nous travaillons.
            <br/>
            Nous sommes fiers du succès que nous avons remporté au fil des ans
            et de la qualité de nos services. Nous sommes impatients de vous
            servir et sommes prêts à faire un effort supplémentaire pour vous
            aider à tirer le meilleur parti de votre enquête. Merci d'avoir
            pensé à Caméléon. Nous sommes impatients de vous entendre et de vous
            aider à explorer les possibilités d'une enquête réussie.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mx-3">
        <div className="bg-gray-200 text-center py-16">
          <p className="text-cameleon-primary text-5xl font-bold mb-2">
            {inView ? <CountUp end={600} duration={4} /> : 0}
          </p>
          <p className="text-black font-semibold text-xl">Affaires résolues</p>
        </div>
        <div className="bg-gray-300 text-center py-16">
          <p className="text-cameleon-primary text-5xl font-bold mb-2">
            {inView ? <CountUp end={910000} duration={4} /> : 0}
          </p>
          <p className="text-black font-semibold text-xl">
            heures de surveillance
          </p>
        </div>
        <div className="bg-gray-300 md:bg-gray-200 text-center py-16">
          <p className="text-cameleon-primary text-5xl font-bold mb-2">
            {inView ? <CountUp end={670} duration={4} /> : 0}
          </p>
          <p className="text-black font-semibold text-xl">Clients satisfais</p>
        </div>
        <div className="bg-gray-200 md:bg-gray-300 text-center py-16">
          <p className="text-cameleon-primary text-5xl font-bold mb-2">
            {inView ? <CountUp end={30} duration={4} /> : 0}
          </p>
          <p className="text-black font-semibold text-xl">
            Agents sur le terrain
          </p>
        </div>
      </div>
    </div>
  );
}
