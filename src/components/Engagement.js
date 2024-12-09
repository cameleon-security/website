import React, { useEffect } from "react";
import "../css/Engagement.css";
import Image from "../assets/image1.png";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";

export default function Engagement() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    controls.start("visible");
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="grid md:grid-cols-2 bg-white mx-3 text-center my-2"
    >
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            exit={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            variants={{
              visible: { opacity: 1 },
            }}
            className="col-1"
          >
            <img src={Image} id="EngagementImage" alt="Image" class="md:mb-4" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="col-1 mt-20 mx-4">
        <h2 className="text-center text-black text-2xl md:text-3xl md:mt-8 font-bold">
          Notre Engagement
        </h2>
        <p className="text-center mt-10 md:text-lg text-l mx-6 mb-5 text-black">
          À l'issue de chacune de nos interventions, vous recevrez un rapport
          détaillé, daté et signé, accompagné de photographies attestant de la
          qualité de notre travail. Ces rapports sont acceptés comme preuves
          recevables devant un tribunal et témoignent de l'expertise et du
          professionnalisme de notre équipe.
        </p>
      </div>
    </div>
  );
}
