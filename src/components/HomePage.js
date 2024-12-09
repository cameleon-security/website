import PourquoiNous from "./PourquoiNous";
import Rappelez from "./Rappelez";
import ServicesPart from "./ServicesPart";
import Temoignage from "./Temoignage";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import Engagement from "./Engagement";
import Introduction from "./Introduction";
import MissionsPart from "./MissionsPart";

export default function HomePage() {
  return (
    <>
      <Introduction />
      <ContactForm />
      <ServicesPart />
      <MissionsPart />
      <PourquoiNous />
      <Engagement />
      <Temoignage />
      <Rappelez />
      <Contact />
    </>
  );
}
