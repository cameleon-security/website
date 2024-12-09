import React,{useEffect} from "react";
import "../css/Contact.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

//fix icon marker
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function Contact() {

  
  //Coordinate of agency
  const position = [33.560305, -7.632039];

  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="bg-form-color bg-opacity-50 p-3" ref={ref}>
      <div className="grid md:grid-cols-2 mt-4">
        <div className="bg-grey md:mt-20 ">
          <h2 className="text-center text-black text-2xl md:text-3xl mx-10 font-bold">
            Contact
          </h2>
          <p class="text-center text-black text-md mt-2 mx-10 mb-10">
            Addresse : 34 RUES des Tabors - OASIS - Casablanca
            <br />
            Mobile : (+212) 0707-090823

            <br />
            Email :  consulting.cameleon@gmail.com

            <br />
          </p>
        </div>
        <AnimatePresence>{
          InView &&(
            <motion.div 
            transition={{ duration: 2 }}
            initial={{ opacity: 0 }}
            animate={controls}
            exit={{ opacity: 0 }}
            variants={{
              visible: { opacity: 1 },
            }}
            className="md:mb-3 mb-10">
            <center>
              <MapContainer
                center={position}
                id="map"
                style={{ height: "60vh", width: "99%" }}
                zoom={17}
                scrollWheelZoom={false}
              >
                <Marker position={position}/>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
              </MapContainer>
            </center>
          </motion.div>
          )
        }</AnimatePresence>
      </div>
    </div>
  );
}
