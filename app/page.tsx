import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FulfillingLife from "./components/FulfillingLife";
import Specialties from "./components/Specialties";
import SupportSection from "./components/SupportSection";
import IntroSection from "./components/IntroSection"
import FAQSection from "./components/FAQSection";
import ProfessionalBackground from "./components/ProfessionalBackground";
import GetStarted from "./components/GetStarted";
import AddressSection from "./components/AddressSection";
import Footer from "./components/Footer";
import OfficeSection from "./components/OfficeSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FulfillingLife />
      <Specialties />
      <IntroSection />
      <OfficeSection />
      <SupportSection />
      <FAQSection />
      <ProfessionalBackground />
      <GetStarted />
      <AddressSection />
      <Footer />
      </main>
  );
}
