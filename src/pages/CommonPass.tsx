
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "../components/ui/button";
import { Link } from 'react-router-dom';

// Import placeholder image for the project
import projectImage from '/lovable-uploads/c059cbb7-5411-45c8-877c-81902f0effe9.png';

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
        {/* Project Hero Section */}
        <section className="pt-32 pb-16 bg-neutral-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-8">
              <span className="text-primary-500 font-medium">CASE STUDY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Making Global Travel Safer During COVID-19
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <h4 className="text-sm text-neutral-700 mb-1">Project Team</h4>
                <p className="font-medium">Product Manager & UX Lead</p>
              </div>
              <div>
                <h4 className="text-sm text-neutral-700 mb-1">Client</h4>
                <p className="font-medium">The Commons Project</p>
              </div>
              <div>
                <h4 className="text-sm text-neutral-700 mb-1">Timeline</h4>
                <p className="font-medium">December 2020 - July 2022</p>
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
                <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide text-sm">
                  Overview
                </div>
                <h2 className="text-3xl font-bold mb-4">Building Digital Health Infrastructure for Global Reopening</h2>
                <p className="text-neutral-700">
                  The COVID-19 pandemic created unprecedented challenges for international travel. As borders began to reopen, there was an urgent need for a secure and standardized way to verify traveler health status.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
                <div className="animate-on-scroll">
                  <div className="text-3xl md:text-4xl font-bold">50+</div>
                  <div className="text-sm text-neutral-700">National Governments</div>
                </div>
                <div className="animate-on-scroll">
                  <div className="text-3xl md:text-4xl font-bold">220+</div>
                  <div className="text-sm text-neutral-700">Lab Partners</div>
                </div>
                <div className="animate-on-scroll">
                  <div className="text-3xl md:text-4xl font-bold">26K+</div>
                  <div className="text-sm text-neutral-700">Daily Scans</div>
                </div>
                <div className="animate-on-scroll">
                  <div className="text-3xl md:text-4xl font-bold">200m</div>
                  <div className="text-sm text-neutral-700">Travelers Impacted</div>
                </div>
              </div>
              
              <div className="my-12 animate-on-scroll">
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-neutral-700 mb-4">
                  When COVID-19 halted global travel, there was no standardized way for travelers to verify their health status across borders. Paper documentation was prone to fraud and difficult to verify, while privacy concerns made centralized databases problematic.
                </p>
                <p className="text-neutral-700">
                  The Commons Project needed to create a trusted, decentralized solution that would allow travelers to securely share their COVID-19 status while protecting their privacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="animate-on-scroll">
              <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide text-sm">
                Our Approach
              </div>
              <h2 className="text-3xl font-bold mb-4">Solving for Travel Safety</h2>
              <p className="max-w-2xl">
                We created a blockchain-based platform that could securely verify COVID-19 test results and vaccination records without compromising user privacy.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto mt-12">
              <div className="bg-white rounded-lg shadow-md p-8 animate-on-scroll">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 18C19.866 18 23 14.866 23 11C23 7.13401 19.866 4 16 4C12.134 4 9 7.13401 9 11C9 14.866 12.134 18 16 18Z" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 28C4 23.0294 9.35 19 16 19C16.7248 19 17.4366 19.0421 18.1297 19.1239" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-neutral-500">Step 1</div>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-bold mb-2">Lab test verification</h3>
                    <p className="text-neutral-700">
                      Users receive a unique QR code from participating labs after COVID-19 testing. The test results are cryptographically signed to ensure authenticity.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center my-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#828294" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 animate-on-scroll">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16L14.6667 18.6667L20 13.3333" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-neutral-500">Step 2</div>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-bold mb-2">CommonPass verification</h3>
                    <p className="text-neutral-700">
                      The CommonPass app securely stores the user's test results and generates a CommonPass certificate that meets destination requirements while protecting personal data.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center my-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#828294" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 animate-on-scroll">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 17.3333C16.7364 17.3333 17.3333 16.7364 17.3333 16C17.3333 15.2636 16.7364 14.6667 16 14.6667C15.2636 14.6667 14.6667 15.2636 14.6667 16C14.6667 16.7364 15.2636 17.3333 16 17.3333Z" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 8.00001V14.6667M22.6667 16C22.6667 19.682 19.682 22.6667 16 22.6667C12.318 22.6667 9.33333 19.682 9.33333 16C9.33333 12.318 12.318 9.33334 16 9.33334C19.682 9.33334 22.6667 12.318 22.6667 16Z" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-neutral-500">Step 3</div>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-bold mb-2">Border verification</h3>
                    <p className="text-neutral-700">
                      At border control, officials scan the CommonPass QR code to verify that the traveler meets entry requirements, without accessing personal health information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="py-16 bg-white">
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
