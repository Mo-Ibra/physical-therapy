import TopBar from "@/components/topbar";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import AboutSection from "@/components/about-us";
import WhyChooseUsSection from "@/components/why-us";
import ServicesSection from "@/components/services";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Header />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
    </>
  );
}