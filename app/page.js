import AboutSection from "@/components/about-us";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import TopBar from "@/components/topbar";
import WhyChooseUsSection from "@/components/why-us";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Header />
      <AboutSection />
      <WhyChooseUsSection />
    </>
  );
}