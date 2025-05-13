
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "../components/ui/button";
import { Link } from 'react-router-dom';

// Import main project image
import projectImage from '/lovable-uploads/7d8833a2-f336-4886-88d4-1a02fde3f482.png';
// Import process diagram
import processDiagram from '/lovable-uploads/c9c10c48-7c9b-403d-b9d7-9dc99b9ff8dd.png';
// Import smart health cards image
import smartHealthCards from '/lovable-uploads/085f2968-3ca1-4de7-a630-5e1dcc448db3.png';
// Import verification diagram
import verificationDiagram from '/lovable-uploads/10bbcafd-2363-40e5-bdc8-c13f79a6dffc.png';

const CommonPass = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add scroll animations
    const fadeElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });
    
    fadeElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-neutral-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-8">
              <span className="text-primary-500 font-medium">THE COMMONS PROJECT</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Making Global Travel Safer During COVID-19
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div>
                <h4 className="text-sm text-neutral-700 mb-1">Project Type</h4>
                <p className="font-medium">B2B2C · Healthcare & Travel Tech</p>
              </div>
              <div>
                <h4 className="text-sm text-neutral-700 mb-1">Role</h4>
                <p className="font-medium">Product Designer</p>
              </div>
              <div>
                <h4 className="text-sm text-neutral-700 mb-1">Timeline</h4>
                <p className="font-medium">Dec 2020 – Jul 2022</p>
              </div>
              <div>
                <h4 className="text-sm text-neutral-700 mb-1">Team</h4>
                <p className="font-medium">PMs, Engineers, Health Experts, Airline Partners</p>
              </div>
            </div>
            <div className="mt-12">
              <img 
                src={projectImage} 
                alt="CommonPass Mobile Application" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="mb-12 animate-on-scroll">
                <h2 className="text-3xl font-bold mb-4">Building Digital Health Infrastructure for Global Reopening</h2>
                <p className="text-neutral-700">
                  The Commons Project created a trusted, decentralized solution that allowed travelers to securely verify and share their COVID-19 status while protecting their privacy, helping governments and airlines safely reopen borders during the pandemic.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
                <div className="animate-on-scroll">
                  <div className="text-3xl md:text-4xl font-bold">50+</div>
                  <div className="text-sm text-neutral-700">National Governments</div>
                </div>
                <div className="animate-on-scroll">
                  <div className="text-3xl md:text-4xl font-bold">220+</div>
                  <div className="text-sm text-neutral-700">Data Sources</div>
                </div>
                <div className="animate-on-scroll">
                  <div className="text-3xl md:text-4xl font-bold">26K+</div>
                  <div className="text-sm text-neutral-700">Testing Locations</div>
                </div>
                <div className="animate-on-scroll">
                  <div className="text-3xl md:text-4xl font-bold">200M+</div>
                  <div className="text-sm text-neutral-700">Individuals Reached</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Setting the Stage Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="animate-on-scroll">
                <h2 className="text-2xl font-bold mb-4">Solving for Travel Safety</h2>
                <p className="text-neutral-700 mb-8">
                  As the pandemic evolved, my role expanded from creating the initial COVID-19 test verification experience to building a comprehensive system for vaccine verification. I led the design of digital SMART Health Cards that could be securely stored on mobile devices and verified at borders, establishing an interoperable global standard.
                </p>
                <div className="mt-8 mb-4">
                  <img 
                    src={processDiagram} 
                    alt="CommonPass Verification Process" 
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Standard Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="animate-on-scroll">
                <h2 className="text-2xl font-bold mb-4">Creating a Global Standard for Health Credentials</h2>
                <p className="text-neutral-700 mb-8">
                  I contributed to the adoption of SMART Health Cards as an open-source standard by designing a verification ecosystem that balanced security with ease of use. This work helped establish a globally recognized framework for digital health credentials that was eventually adopted by governments and healthcare providers worldwide.
                </p>
                <div className="mt-8 mb-4">
                  <img 
                    src={smartHealthCards} 
                    alt="SMART Health Cards on Mobile Devices" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Role Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="animate-on-scroll">
                <h2 className="text-2xl font-bold mb-6">My Role</h2>
                <ul className="space-y-4 list-disc pl-5 text-neutral-700">
                  <li>Designed UX and visual standards for state and pharmacy partners</li>
                  <li>Provided <a href="#" className="text-primary-500 hover:underline">Open Source Design File</a> for implementation partners</li>
                  <li>Led digital funnel design to onboard health systems and labs</li>
                  <li>Authored launch playbooks for adoption and privacy education</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="animate-on-scroll">
                <h2 className="text-2xl font-bold mb-4">Impact</h2>
                <p className="text-neutral-700">
                  The SMART Health Card standard was adopted by over 200 million Americans through state health departments, pharmacies, and healthcare providers. Our digital health cards became accepted verification for entry into Japan, Singapore, and several European countries, establishing a new paradigm for interoperable health credentials.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scaling Verification Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="animate-on-scroll">
                <h2 className="text-2xl font-bold mb-4">Scaling Verification</h2>
                <p className="text-neutral-700 mb-8">
                  I designed the CommonCheck verifier app to enable airlines and border officials to quickly validate travelers' health credentials against entry requirements. This solution was deployed at major international airports and border crossings, helping to safely process millions of travelers during the pandemic recovery.
                </p>
                <div className="mt-8 mb-4">
                  <img 
                    src={verificationDiagram} 
                    alt="CommonCheck Verification System" 
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="animate-on-scroll">
                <h2 className="text-2xl font-bold mb-4">Reflection</h2>
                <p className="text-neutral-700">
                  This project highlighted the importance of ecosystem design, where success depends on aligning multiple stakeholders with different priorities. I learned to translate complex technical requirements into simple human experiences, balancing security with usability in a high-stakes environment where both public health and personal privacy were on the line.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 bg-neutral-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-neutral-800 font-medium">
                Interested in a deeper dive? <a href="/contact" className="text-primary-500 hover:underline">Contact me</a> for the full case study with additional insights and artifacts.
              </p>
            </div>
          </div>
        </section>

        {/* External Links */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a 
                  href="https://thecommonsproject.org/commonpass" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-500 hover:underline flex items-center gap-2"
                >
                  CommonPass Website
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a 
                  href="https://thecommonsproject.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-500 hover:underline flex items-center gap-2"
                >
                  The Commons Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="py-16 bg-neutral-50 border-t border-neutral-200">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-2xl font-bold mb-8">Next Project</h2>
            <Button asChild>
              <Link to="/projects/find-food" className="bg-primary-500 hover:bg-primary-600 text-white flex items-center gap-2 w-fit mx-auto">
                View Find Food Project
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CommonPass;
