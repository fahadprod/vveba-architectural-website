'use client'

import About from "@/components/about";
import ContactUs from "@/components/contact";
import Customers from "@/components/customers";
import Footer from "@/components/footer";
import HeroHeader from "@/components/hero-header";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
    const menuIcon = document.querySelector(".menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("change")
    })
  }, []);
  return (
    <div className="container">
      <Navbar />
      <HeroHeader />
      <About />
      <Projects />
      <Customers/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
