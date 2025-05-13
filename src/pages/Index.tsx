import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';

// Import placeholder images for now
import profileImage from '/lovable-uploads/be434163-26fb-460e-924d-88c4f9ff34c8.png';
import productStrategyIcon from '/lovable-uploads/7b2b20da-40fb-40fd-9c39-600e3392c01a.png';
import productDesignIcon from '/lovable-uploads/2b49d7e1-5c44-4716-bc78-b6a66d9178d0.png';
import productManagementIcon from '/lovable-uploads/a7ea2ca0-9a17-4998-967c-6a88c27e6469.png';

// Import project logo images
import commonsProjectLogo from '/lovable-uploads/17e7c264-99c0-4b89-a026-795e5a6c74d4.png';
import pittsburghFoodbankLogo from '/lovable-uploads/31aae7ce-4943-44e7-8d86-942608478b00.png';
import tampaWellLogo from '/lovable-uploads/84ef49a6-b49e-464c-be66-f8dd4c9ee882.png';
const Index = () => {
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
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-neutral-100 relative">
          <div className="container mx-auto px-4 md:px-8">
            <div className="w-full max-w-[1440px] px-22 mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
                <div className="text-primary-500 font-medium mb-3">MY NAME IS ERIN FULLER, I AM A</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Product strategist with a design edge
                </h1>
                <div className="mb-8">
                  <Button asChild>
                    <Link to="/contact" className="bg-primary-500 hover:bg-primary-600 text-white flex items-center gap-2">
                      Let's connect
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3 mb-10 md:mb-0 md:pr-12\\n">
                <img src="/lovable-uploads/ff96fce8-2c39-4da5-b607-1325f7bf72a5.png" alt="Product Strategist" className="" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto px-4 md:p-16 rounded-lg bg-neutral-100">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">A Jill of all trades</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto mb-16">
                I'm a hybrid product leader who bridges strategy, design, and execution to build customer-first products that drive business growth and empower teams to deliver with clarity and purpose.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg animate-on-scroll">
                <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <img src={productStrategyIcon} alt="Product Strategy" className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Product Strategy</h3>
                <p className="text-neutral-700">
                  I bring a strategic mindset to product development, consistently aligning cross-functional teams around clear business goals, customer insights, and data-driven roadmaps.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg animate-on-scroll">
                <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <img src={productDesignIcon} alt="Product Design" className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Product Design</h3>
                <p className="text-neutral-700">
                  With a foundation in product design, I champion user-centered thinking to craft intuitive experiences that balance usability with business impact.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg animate-on-scroll">
                <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <img src={productManagementIcon} alt="Product Management" className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Product Management</h3>
                <p className="text-neutral-700">
                  I lead with clarity and empathy, driving execution through collaboration, stakeholder alignment, and a bias for action across the product lifecycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project Section */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <img alt="United Rentals Project" className="rounded-lg shadow-lg w-full" src="/lovable-uploads/38bc9874-3511-4161-9f2f-01b945f90e18.jpg" />
              </div>
              
              <div className="animate-on-scroll">
                <div className="mb-4 text-primary-500 uppercase text-sm font-medium tracking-wide">
                  Featured Work
                </div>
                <h2 className="text-3xl font-bold mb-4">United Rentals</h2>
                <p className="text-neutral-700 mb-6">United Rentals is the largest equipment rental company in North America. I led the redesign of Total Control, a fleet management platform with 50K MAU and $9B in assets—modernizing a key tool to improve usability, retention, and operations.</p>
                
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 text-primary-500 mt-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="currentColor" />
                      </svg>
                    </div>
                    <span className="">Clunky and outdated → seamless workflows</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-primary-500 mt-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="currentColor" />
                      </svg>
                    </div>
                    <span className="">Poor responsiveness → accessible on the go</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-primary-500 mt-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="currentColor" />
                      </svg>
                    </div>
                    <span className="">Time suck → time saved</span>
                  </li>
                </ul>
                
                <Button asChild>
                  <Link to="/projects/united-rentals" className="bg-primary-500 hover:bg-primary-600 text-white flex items-center gap-2">
                    See case study
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Selected Works */}
        <section className="py-16 md:py-24 bg-neutral-100" id="work">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-primary-500 uppercase text-sm font-medium tracking-wide mb-2 animate-on-scroll">
                Selected Works
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* The Commons Project Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm flex-1 animate-on-scroll">
                <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-md bg-neutral-100">
                  <img src={commonsProjectLogo} alt="The Commons Project logo" className="max-w-[70%] max-h-[70%]" />
                </div>
                
                <h3 className="text-xl font-medium mb-2">The Commons Project</h3>
                <p className="text-neutral-700 mb-4">
                  Designed scalable solutions for CommonPass—navigating a 
                  rapidly evolving global health landscape to streamline digital 
                  health verification for international travel.
                </p>
                
                <Link to="/projects/common-pass" className="inline-flex items-center text-primary-500 font-medium hover:underline">
                  See Case Study
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              
              {/* Pittsburgh Foodbank Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm flex-1 animate-on-scroll">
                <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-md bg-neutral-100">
                  <img src={pittsburghFoodbankLogo} alt="Pittsburgh Foodbank logo" className="max-w-[70%] max-h-[70%]" />
                </div>
                
                <h3 className="text-xl font-medium mb-2">Pittsburgh Foodbank</h3>
                <p className="text-neutral-700 mb-4">
                  Redesigned the Greater Pittsburgh Community Food Bank's 
                  locator, turning a static tool into an intuitive, mobile-friendly 
                  experience that helps food-insecure individuals access up-to-date resources.
                </p>
                
                <Link to="/projects/find-food" className="inline-flex items-center text-primary-500 font-medium hover:underline">
                  See Case Study
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              
              {/* Tampa Well Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm flex-1 animate-on-scroll">
                <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-md bg-neutral-100">
                  <img src={tampaWellLogo} alt="Tampa Well logo" className="max-w-[70%] max-h-[70%]" />
                </div>
                
                <h3 className="text-xl font-medium mb-2">Tampa Well</h3>
                <p className="text-neutral-700 mb-4">
                  Designed and launched TampaWell, a scalable digital platform 
                  connecting residents to local wellness events, personalized health 
                  content, and community resources, with plans for expansion to 
                  communities nationwide.
                </p>
                <a href="https://www.tgh.org/tampawell" className="inline-flex items-center text-primary-500 font-medium hover:underline">
                  Learn More
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="animate-on-scroll">
                <h2 className="text-3xl font-bold mb-8">Professional experience</h2>
                <p className="text-neutral-700 mb-8">Driven by a passion for innovation and entrepreneurship, I’ve leveraged design and technology to create impactful solutions from my time at Carnegie Mellon. Leading global health initiatives at The Commons Project, I focused on scaling innovation to address complex challenges. Now, at United Rentals, I bridge strategy, design, and execution to lead teams in building products that drive business growth and inspire leadership.</p>
                <Button asChild>
                  <a href="https://drive.google.com/file/d/1ukDsniESoQ-MUZxd3t2fU9YRKQDECgHm/view?usp=share_link"
                   className="bg-primary-500 hover:bg-primary-600 text-white flex items-center gap-2">
                    See resume
                    {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 10L10 14M10 14L14 10M10 14V4M19 14V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> 
                    </svg>*/}
                  </a>
                </Button>
              </div>
              
              <div className="space-y-6 animate-on-scroll">
                <ExperienceCard company="United Rentals" role="Product Strategy" period="Dec 2022 - Present" description="Leading CX design for digital platforms to unify our digital ecosystem" logoUrl="https://pbs.twimg.com/profile_images/1574796503020933120/URb6phDW_200x200.jpg" />
                
                <ExperienceCard company="Freelance" role="Product Design" period="July 2022 - October 2023" description="Helped startups with UX/UI improvements, wireframes, prototypes, & websites • Projects included: e-Commerce, mobile app, community wellness" logoUrl="https://st2.depositphotos.com/47577860/46774/v/450/depositphotos_467746820-stock-illustration-avatar-designer-freelance-icon-outline.jpg" />
                
                <ExperienceCard company="The Commons Project" role="Product Manager" period="December 2020 - July 2022" description="CommonPass, CommonHealth, CommonCheck COVID-19 verification platform" logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7J6YeRM8Q3tfTchbuGYxgnEtFM0yzcXpVQ&s" />
                
                <ExperienceCard company="Carnegie Mellon University" role="Bachelor's degree" period="Graduate May 2020" description="Bachelor of Human-Computer Interaction and Architecture, Innovation Scholar: Swartz Center for Entrepreneurship" logoUrl="https://www.nist.gov/sites/default/files/styles/social/public/images/2019/12/23/CMU%20logo.png?itok=h0WYxS17" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Index;