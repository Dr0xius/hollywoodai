import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Summary from "@/components/Summary";
import Steps from "@/components/Steps";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Summary />
      <Steps />
      <Footer />
    </>
  );
}
