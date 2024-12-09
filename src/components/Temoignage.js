import React, { useEffect, useState } from "react";
import "../css/Temoignage.css";
import TemoignageImage from "../assets/temoignage.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function Temoignage() {
  const texts = [
    "Je dirige une petite entreprise et je soupçonnais l'un de mes employés de me voler. Je ne voulais pas faire d'accusations sans preuve concrète, alors j'ai fait appel à cette agence pour obtenir de l'aide. Ils ont mené une enquête approfondie et ont découvert le coupable. Grâce à leur travail, j'ai pu prendre les mesures appropriées et protéger mon entreprise. Je recommande cette agence à tout propriétaire d'entreprise soupçonnant de la malhonnêteté parmi ses employés.",
    "Je traversais une période difficile de ma vie lorsque j'ai décidé de contacter les détectives privés de cette agence. Ils ont écouté ma situation et ont pris le temps de m'expliquer leur processus. Je me suis senti rassuré et confiant qu'ils pourraient m'aider. Ils m'ont tenu informé à chaque étape du processus et m'ont finalement aidé à obtenir la clôture dont j'avais besoin. Je recommande vivement leurs services à toute personne ayant besoin d'aide.",
    "Je craignais que mon partenaire soit infidèle, mais je ne savais pas comment en être sûr. Les détectives privés de cette agence étaient discrets, professionnels et extrêmement rigoureux. Ils m'ont fourni les preuves dont j'avais besoin pour confronter mon partenaire et avancer dans ma vie. Je n'aurais pas pu le faire sans leur aide.",
  ];
  const [visibleTextIndex, setVisibleTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const onClickBack = () => {
    setIsVisible(false);
    setTimeout(() => {
      setVisibleTextIndex((prevIndex) =>
        visibleTextIndex !== 0
          ? (prevIndex - 1) % texts.length
          : texts.length - 1
      );
      setIsVisible(true);
    }, 1000);
  };

  const onClickNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      setVisibleTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setIsVisible(true);
    }, 1000);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setVisibleTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 1000);
    }, 8000);
    return () => clearInterval(intervalId);
  }, [onClickBack, onClickNext]);

  return (
    <div id="temoignage" className="bg-form-color bg-opacity-50">
      <div class="flex flex-col px-2 md:px-20">
        <center>
          <img
            src={TemoignageImage}
            alt="Image"
            id="temoignageImage"
            class="max-w-full h-auto mb-4 mt-10"
          />
          <p class="text-center text-2xl font-bold text-black mt-2 mb-10">
            Témoignages
          </p>
        </center>
        <p
          className={`flex-grow fadeText ${
            isVisible ? "fadeIn" : "fadeOut"
          } text-center text-xl text-black mt-6 px-2 md:mx-10 px-2 md:px-10`}
        >
          {texts[visibleTextIndex]}
        </p>
        <div class="flex gap-2 my-10 justify-end mt-20 ">
          <button onClick={onClickBack}>
            <FaArrowAltCircleLeft color="black" size="2.5em" />
          </button>
          <button onClick={onClickNext}>
            <FaArrowAltCircleRight color="black" size="2.5em" />
          </button>
        </div>
      </div>
    </div>
  );
}
