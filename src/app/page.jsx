"use client";

import AppNavbar from "../components/AppNavbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import Activities from "../components/Activities";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <AppNavbar />
      <main>
        <Hero />
        <Activities />
        <About />
        <Features />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}
