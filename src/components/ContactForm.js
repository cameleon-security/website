import React, { useState,useRef } from "react";
import "../css/ContactForm.css";
import Audit from "../assets/audit.svg";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [selectedOption, setSelectedOption] = useState("0");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xm9mby2', 'template_jgfkp5s', form.current, '4NwpVF6XLEgTNHohr')
      .then((result) => {
          alert("Merci pour votre message, nous vous repondrons le plus tôt possible.");
          console.log(result.text);
          window.location.reload();
      }, (error) => {
          alert("Message non envoyé");
          console.log(error.text);
      });
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === "0") {
      alert("Choisissez un service s'il vous plait ");
      return;
    }
    // Submit the form data
  };

  return (
    <div className="bg-form-color bg-opacity-50">
      <div class="flex flex-col items-center">
        <img
          src={Audit}
          alt="Image"
          id="formImage"
          class="max-w-full h-auto mb-4 mt-10"
        />
        <p id="formTitle" class="text-center text-black mt-2">
          UNE QUESTION, UNE SOLUTION, UN DEVIS….
        </p>
        <p id="formSubTitle" class="text-center text-black mt-2">
          Pour nous contacter et pour avoir des réponses à vos questions,
          appelez-nous ou contactez-nous via notre formulaire.
        </p>
      </div>
      <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4" ref={form} onSubmit={sendEmail} action>
        <div class="flex flex-wrap -mx-4 mb-4 ml-10 mr-10">
          <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <label
              class="block text-gray-700 font-bold mb-2 text-center md:text-start"
              for="field1"
            >
              Nom
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="field1"
              type="text"
              placeholder="Enter Nom"
              name="name"
              required
            />
          </div>
          <div class="w-full md:w-1/2 px-4">
            <label
              class="block text-gray-700 font-bold mb-2 text-center md:text-start"
              for="field2"
            >
              Email
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="field2"
              type="email"
              placeholder="Enter Email"
              name="email"
              required
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 mb-4 ml-10 mr-10">
          <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <label
              class="block text-gray-700 font-bold mb-2 text-center md:text-start"
              for="field3"
            >
              Téléphone
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="field3"
              type="text"
              pattern="[0-9]+"
              placeholder="Enter Téléphone"
              required
              name="phone"
            />
          </div>
          <div class="w-full md:w-1/2 px-4">
            <label
              class="block text-gray-700 font-bold mb-2 text-center md:text-start"
              for="field4"
            >
              Service
            </label>
            <select
              class="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="field4"
              value={selectedOption}
              onChange={handleOptionChange}
              name="service"
            >
              <option value="0">Choix de Service</option>
              <option value="Affaire conjugale">Affaire conjugale</option>
              <option value="Recherche">Recherche</option>
              <option value="Géolocalisation">Géolocalisation</option>
              <option value="Enquête">Enquête</option>
              <option value="Avant mariage">Avant mariage</option>
              <option value="Espionnage indistruel & commercial">
                Espionnage indistruel & commercial
              </option>
              <option value="Autre">Autre</option>
            </select>
          </div>
        </div>
        <div class="flex justify-center">
          <input
            class="bg-cameleon-primary bg-opacity-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            type="submit"
            value="Validé"
          />
        </div>
      </form>
    </div>
  );
}
