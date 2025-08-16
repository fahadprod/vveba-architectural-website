'use client'

import About from "@/components/about";
import CostCalculator from "@/components/cost-calculator";
import Customers from "@/components/customers";
import Footer from "@/components/footer";
import HeroHeader from "@/components/hero-header";
import MaterialSelector from "@/components/material-selector";
import Navbar from "@/components/navbar";
import BeforeAfterSlider from "@/components/our-work";
import PanoramaViewer from "@/components/panorama-view";
import ProjectTimeline from "@/components/project-timeline";
import Projects from "@/components/projects";
import { useEffect } from "react";
import NewsletterForm from "@/components/newsletter-form";
import ContactSection from "@/components/contact-us";


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
      <CostCalculator/>
      <PanoramaViewer/>
      <About />
      <MaterialSelector/>
      <BeforeAfterSlider/>
      <Projects />
      <ProjectTimeline/>
      <Customers/>
      <NewsletterForm/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
