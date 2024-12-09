import React,{useRef} from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import emailjs from '@emailjs/browser';



//fix icon marker
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function ContactPage() {
  //Coordinate of agency
  const position = [33.560305, -7.632039];

  const form = useRef();


const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_xm9mby2', 'template_k23ef8i', form.current, '4NwpVF6XLEgTNHohr')
    .then((result) => {
      alert("Merci pour votre message, nous vous repondrons le plus tôt possible.");
      console.log(result.text);
      window.location.reload();
    }, (error) => {
        console.log(error.text);
    });
};



  return (
    <div className="bg-white">
      <div class="flex flex-col items-center bg-form-color py-10 bg-opacity-50">
        <p class="text-center text-3xl text-black font-bold">CONTACT</p>
      </div>
      <p class="text-black text-center my-5 mx-3 font-semibold">
        La direction de Cameleon ainsi que nos enquêteurs de nos différentes
        agences sont à votre disposition
      </p>
      <div className="bg-form-color bg-opacity-25 p-3">
        <div className="grid md:grid-cols-2 mt-4">
          <div className="bg-grey md:mt-14 ">
            <p class="bg-white px-3 py-10 text-black text-md mt-2 mx-10 mb-10">
              <span class="inline-flex items-center">
                <FaHome class="mr-2" /> <b>Location :</b>
              </span>
              <br />
              34 RUES des Tabors - OASIS - Casablanca
              <br />
              <br />
              <span class="inline-flex items-center">
                <FaPhone class="mr-2" /> <b>Mobile :</b>
              </span>
              <br />
              0707-090823
              <br />
              <br />
              <span class="inline-flex items-center">
                <FaAddressBook class="mr-2" /> <b>Email :</b>
              </span>
              <br />
              consulting.cameleon@gmail.com
            </p>
          </div>
          <div className="md:mb-3 mb-10">
            <center>
              <MapContainer
                center={position}
                id="map"
                style={{ height: "70vh", width: "99%" }}
                zoom={15}
                scrollWheelZoom={false}
              >
                <Marker position={position} />
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
              </MapContainer>
            </center>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <p class="text-center text-3xl text-black font-semibold mt-6">
          POUR PLUS DE SIMPLICITÉ
        </p>
      </div>
      <p id="formSubTitle" class="text-center text-black mt-2">
        nous vous proposons également le formulaire ci-dessous:
      </p>
      <form class="shadow-md rounded pt-6 pb-8 mb-4 mx-4" ref={form} onSubmit={sendEmail} action>
        <div class="flex flex-wrap mb-4 ml-10 mx-10">
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
              required
              name="name"
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
              required
              name="email"

            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 mb-4 ml-10 mr-10">
          <div class="w-full px-4 mb-4 md:mb-2">
            <label
              class="block text-gray-700 font-bold mb-2 text-center md:text-start"
              for="field3"
              
            >
              Sujet
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="field3"
              type="text"
              placeholder="Enter Sujet"
              required
              name="sujet"

            />
          </div>
          <div class="w-full px-4">
            <label
              class="block text-gray-700 font-bold mb-2 text-center md:text-start"
              for="field4"
            >
              Message
            </label>
            <textarea
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Entrer message"
              name="message"
              style={{ height: "100px" }}
            ></textarea>
          </div>
        </div>
        <div class="flex justify-center">
          <input
            class="bg-cameleon-primary bg-opacity-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            type="submit"
            value="Envoyer"
          />
        </div>
      </form>
    </div>
  );
}
