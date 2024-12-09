import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Logo from "./assets/logo.png";
import AppRouter from "./AppRouter";
import { FloatingWhatsApp } from 'react-floating-whatsapp'



function App() {
  return (
    <main className="text-gray-400 bg-white body-font">
      <Navbar />
      <AppRouter />
      <Footer />
      <FloatingWhatsApp phoneNumber={"+212707090823"} accountName={"Cameleon"} avatar={Logo} statusMessage={"En ligne"} chatMessage={"Bonjour, nous sommes à votre ecoute"}/>
    </main>
  );
}

export default App;
