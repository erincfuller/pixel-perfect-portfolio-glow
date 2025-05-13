import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "../components/ui/button";
import { Link } from 'react-router-dom';
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { FileText, ChevronRight, Users, Shield } from "lucide-react";

// Import main project image
import projectImage from '/lovable-uploads/7d8833a2-f336-4886-88d4-1a02fde3f482.png';
// Import process diagram
import processDiagram from '/lovable-uploads/c9c10c48-7c9b-403d-b9d7-9dc99b9ff8dd.png';
// Import smart health cards image
import smartHealthCards from '/lovable-uploads/085f2968-3ca1-4de7-a630-5e1dcc448db3.png';
// Import verification diagram
import verificationDiagram from '/lovable-uploads/10bbcafd-2363-40e5-bdc8-c13f79a6dffc.png';
// Import ecosystem diagram
import ecosystemDiagram from '/lovable-uploads/c7afbf43-0851-417b-8f75-bd7b640378ef.png';
// Import SMART Health Cards phones image
import smartHealthCardsPhones from '/lovable-uploads/29c3680a-6ab1-4737-a14f-d9aa359d0586.png';
// Import role icons
import standardsIcon from '/lovable-uploads/1893beb9-94bd-4112-a58d-9d9c2cd39e5b.png';
import funnelIcon from '/lovable-uploads/1f77d6d0-46eb-43ec-9ccc-2c91aa520971.png';
import playbooksIcon from '/lovable-uploads/24fba8b3-d957-4e24-982f-4fb91c2fdbf7.png';

// Import new network scale icons
import govIcon from '/lovable-uploads/c3c5d9fd-0412-4525-bc20-b87ed9a1b70c.png';
import dataIcon from '/lovable-uploads/1350de9f-3aea-469d-bb80-fb429249265c.png';
import testingIcon from '/lovable-uploads/676fe7ec-e36f-487b-9273-1e9eaafe55ce.png';
import usersIcon from '/lovable-uploads/610511a5-0fb6-4076-9e08-83f6909db426.png';

const CommonPass = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Add scroll animations
    const fadeElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    fadeElements.forEach(el => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return <>
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
              <img src={projectImage} alt="CommonPass Mobile Application" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </section>

        {/* Overview Section - Updated */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-16 text-center">
            <p className="text-primary-500 uppercase text-sm mb-2">Overview</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Building Digital Health Infrastructure<br/>for Global Reopening</h2>
            <p className="max-w-3xl mx-auto text-neutral-700 mb-12">
              The Commons Project, backed by the World Economic Forum and the Rockefeller Foundation, builds solutions that empower people to manage and share their health data. In less than three years, the team launched a suite of products to address safe travel and health data verification during COVID-19.
            </p>
            
            {/* Network Scale Block */}
            <div className="bg-neutral-100 rounded-lg p-8 md:p-12">
              <p className="text-primary-500 uppercase text-sm mb-8">Network Scale</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {/* Stat 1 */}
                <div className="animate-on-scroll">
                  <div className="bg-primary-50 w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-3">
                    <img src={govIcon} alt="Government Icon" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-3xl font-semibold">50+</p>
                  <p className="text-neutral-700">National Governments</p>
                </div>
                
                {/* Stat 2 */}
                <div className="animate-on-scroll">
                  <div className="bg-primary-50 w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-3">
                    <img src={dataIcon} alt="Data Icon" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-3xl font-semibold">220+</p>
                  <p className="text-neutral-700">Data Sources</p>
                </div>
                
                {/* Stat 3 */}
                <div className="animate-on-scroll">
                  <div className="bg-primary-50 w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-3">
                    <img src={testingIcon} alt="Testing Icon" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-3xl font-semibold">26K+</p>
                  <p className="text-neutral-700">Testing Locations</p>
                </div>
                
                {/* Stat 4 */}
                <div className="animate-on-scroll">
                  <div className="bg-primary-50 w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-3">
                    <img src={usersIcon} alt="Users Icon" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-3xl font-semibold">200M</p>
                  <p className="text-neutral-700">Individuals reached</p>
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
                  <img src={processDiagram} alt="CommonPass Verification Process" className="rounded-lg w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Standard Section - Updated with two-column layout */}
        <section className="py-16 bg-neutral-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Left Column - 40% */}
              <div className="md:col-span-5 animate-on-scroll">
                <span className="text-primary-500 uppercase text-sm font-medium tracking-wider">
                  Creating a Global Standard for Health Credentials
                </span>
                <h2 className="text-3xl font-bold my-4">
                  Leading Ecosystem Design: SMART Health Cards
                </h2>
                <p className="text-neutral-700 mb-8">
                  As vaccinations scaled, we tackled a bigger challenge: building an interoperable standard to
                  unify digital health records. SMART Health Cards became the open-source framework
                  adopted by 900+ partners including Apple, Microsoft, and leading health systems.
                </p>

                <div className="mt-10">
                  <h3 className="text-lg font-semibold mb-4 text-neutral-800">My Role</h3>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-3 p-2 rounded-s bg-white">
                      <div className="flex-shrink-0 w-10 h-10 p-1 bg-primary-100 rounded-s">
                        <img src={standardsIcon} alt="Standards icon" className="object-contain" />
                      </div>
                      <div>
                        <p className="text-neutral-800">
                          Designed <span className="font-medium">reference UX and visual standards</span> adopted by state health
                          departments for states like <span className="font-medium">California and Louisiana</span>, and major national pharmacies like
                          <span className="font-medium"> CVS and Walmart</span>.
                        </p>
                        <a href="#" className="text-primary-500 hover:underline mt-1 inline-block">
                          Open Source Design File →
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-2 rounded-s bg-white">
                      <div className="flex-shrink-0 w-10 h-10 p-1 bg-primary-100 rounded-s">
                        <img src={funnelIcon} alt="Funnel icon" className="object-contain" />
                      </div>
                      <div>
                        <p className="text-neutral-800">
                          Led <span className="font-medium">digital funnel design</span> to onboard health
                          systems, labs, and pharmacies into the <span className="font-medium">CommonTrust Network</span>, ensuring
                          adoption pathways were clear and user-friendly.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-2 rounded-s bg-white">
                      <div className="flex-shrink-0 w-10 h-10 p-1 bg-primary-100 rounded-s ">
                        <img src={playbooksIcon} alt="Playbooks icon" className="object-contain" />
                      </div>
                      <div>
                        <p className="text-neutral-800">
                          Authored <span className="font-medium">launch playbooks</span> to help partners
                          drive user adoption and explain the privacy-preserving technology behind the cards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - 60% */}
              <div className="md:col-span-7 flex justify-center items-center animate-on-scroll">
                <img src={smartHealthCardsPhones} alt="SMART Health Cards on mobile devices showing verification states" className="w-full max-w-xl rounded-lg" />
              </div>
            </div>

            {/* Impact Statement - Full Width */}
            <div className="text-center mt-16 animate-on-scroll ">
              <span className="text-primary-500 uppercase text-sm font-medium tracking-wider">
                Impact
              </span>
              <p className="text-neutral-700 mt-4 max-w-3xl mx-auto max-w-xl">
                As of July 2022, <span className="font-medium">200M+ Americans</span> already have access to SMART Health Cards, now
                accepted globally in countries like <span className="font-medium">Japan, Aruba, and Rwanda</span>.
              </p>
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
                  <img src={verificationDiagram} alt="CommonCheck Verification System" className="rounded-lg w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection Section - Updated to two-column layout */}
        <section className="py-16 bg-neutral-100 rounded-lg">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="animate-on-scroll">
                <h2 className="text-3xl font-bold mb-6">Reflection</h2>
                <p className="text-neutral-700 mb-6">
                  I'm proud to have contributed to building a <span className="font-medium">global standard for digital health</span> that balances <span className="font-medium">user empowerment, privacy, and scale</span>. This experience sharpened my ability to lead <span className="font-medium">ecosystem-level product design</span>, partner with diverse stakeholders, and translate complex systems into <span className="font-medium">simple, usable solutions</span>.
                </p>
                <p>
                  <span className="text-primary-500">Interested in a deeper dive?</span> Contact me for the full case study with additional insights and artifacts.
                </p>
              </div>
              <div className="animate-on-scroll flex justify-center md:justify-end">
                <img src={ecosystemDiagram} alt="CommonTrust Network Ecosystem Diagram" className="rounded-lg w-full max-w-md" />
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
                <a href="https://thecommonsproject.org/commonpass" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline flex items-center gap-2">
                  CommonPass Website
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="https://thecommonsproject.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline flex items-center gap-2">
                  The Commons Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                  <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default CommonPass;
