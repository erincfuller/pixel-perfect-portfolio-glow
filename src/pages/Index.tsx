import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';

// Import placeholder images for now
import profileImage from '/lovable-uploads/be434163-26fb-460e-924d-88c4f9ff34c8.png';
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
            <div className="flex flex-col md:flex-row items-center">
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
              <div className="md:w-1/2 relative">
                <img src={profileImage} alt="Product Strategist" className="w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-white" id="about">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">A Jill of all trades</h2>
              <p className="text-neutral-700 max-w-2xl mx-auto">
                I'm a hybrid product leader who combines strategy, design, and execution to build customer-first products that drive user, team, revenue growth and purpose.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-neutral-50 p-6 rounded-lg animate-on-scroll">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8.00002C21 6.4087 20.3679 4.88259 19.2426 3.75738C18.1174 2.63217 16.5913 2.00002 15 2.00002H9C7.4087 2.00002 5.88258 2.63217 4.75736 3.75738C3.63214 4.88259 3 6.4087 3 8.00002V16C3 17.5913 3.63214 19.1174 4.75736 20.2427C5.88258 21.3679 7.4087 22 9 22H15C16.5913 22 18.1174 21.3679 19.2426 20.2427C20.3679 19.1174 21 17.5913 21 16Z" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 8H21" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 12H17" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 16H17" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Product Strategy</h3>
                <p className="text-neutral-700">Using research to define customer, competition, and business needs to identify feature work, prioritize roadmaps, and define go-to-market strategies.</p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg animate-on-scroll">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 7L12 2L22 7V17L12 22L2 17V7Z" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 7L12 12L22 7" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12V22" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Product Design</h3>
                <p className="text-neutral-700">With a background in traditional and UX design, I can create and direct wireframes, prototypes, UI, and UX for web and mobile products.</p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg animate-on-scroll">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Product Management</h3>
                <p className="text-neutral-700">Leading agile engineering teams, coordinating cross-functional stakeholders, and communicating with leadership to get effective, on-time products shipped.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project Section */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <img src="/lovable-uploads/df9b97a3-b6c1-4b95-ac46-c0ca28c58a0e.png" alt="United Rentals Project" className="rounded-lg shadow-lg w-full" />
              </div>
              
              <div className="animate-on-scroll">
                <div className="mb-4 text-primary-500 uppercase text-sm font-medium tracking-wide">
                  Featured Work
                </div>
                <h2 className="text-3xl font-bold mb-4">United Rentals</h2>
                <p className="text-neutral-700 mb-6">
                  United Rentals is the largest equipment rental company in North America. I led the roles of a PM, Customer Success lead, and implemented optimizations to make our CRM faster and improve customer experience.
                </p>
                
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 text-primary-500 mt-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="currentColor" />
                      </svg>
                    </div>
                    <span>Lorem ipsum dolor sit amet consectetur.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-primary-500 mt-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="currentColor" />
                      </svg>
                    </div>
                    <span>Suspendisse ut leo elementum tristique.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-primary-500 mt-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="currentColor" />
                      </svg>
                    </div>
                    <span>Duis cursus mi quis viverra ut diam lobortis.</span>
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

        {/* Projects Section */}
        <section className="py-16 md:py-24" id="work">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide text-sm animate-on-scroll">
                Selected Works
              </div>
              <h2 className="text-3xl md:text-4xl font-bold animate-on-scroll">Selected Works</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-on-scroll">
                <ProjectCard title="The Commons Project" description="Designed scalable solutions for CommonPass—navigating a rapidly evolving global health landscape to streamline digital health verification for international travel." imageUrl="/lovable-uploads/c059cbb7-5411-45c8-877c-81902f0effe9.png" link="/projects/common-pass" />
              </div>
              
              <div className="animate-on-scroll">
                <ProjectCard title="Pittsburgh Foodbank" description="Redesign, test design, and implement food bank directory to help low-income individuals and families find food, resources, and support services" imageUrl="/lovable-uploads/ec0d9b50-4293-44a1-ba1c-37273bd2d428.png" link="/projects/find-food" />
              </div>
              
              <div className="animate-on-scroll">
                <ProjectCard title="Tamaya Well" description="Designed and built an open-source digital platform to analyze, validate, and collaborate on water quality data with local communities" imageUrl="/lovable-uploads/df9b97a3-b6c1-4b95-ac46-c0ca28c58a0e.png" link="/projects/tamaya-well" />
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
                <p className="text-neutral-700 mb-8">
                  Driven by a passion for innovation and entrepreneurship, I've leveraged design and technology to create impactful solutions. From my time at Navigate by Common Projects, I focused on creating a platform to address complex civic needs, to leading product strategy, design, and execution to lead teams in building products that make businesses grow and turgen leadership.
                </p>
                <Button asChild>
                  <Link to="#" download={true} className="bg-primary-500 hover:bg-primary-600 text-white flex items-center gap-2">
                    Download resume
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 10L10 14M10 14L14 10M10 14V4M19 14V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </Button>
              </div>
              
              <div className="space-y-6 animate-on-scroll">
                <ExperienceCard company="United Rentals" role="Product Strategy" period="Dec 2022 - Present" description="Leading CX design for digital platforms to unify our digital ecosystem" logoUrl="/public/placeholder.svg" />
                
                <ExperienceCard company="Freelance" role="Product Design" period="July 2022 - December 2023" description="Helped startups with UX/UI improvements, wireframes, prototypes, & websites" logoUrl="/public/placeholder.svg" />
                
                <ExperienceCard company="The Commons Project" role="Product Manager" period="December 2020 - July 2022" description="CommonPass, CommonHealth, CommonCheck COVID-19 verification platform" logoUrl="/public/placeholder.svg" />
                
                <ExperienceCard company="Carnegie Mellon University" role="Master's Degree" period="Graduate May 2020" description="Bachelor of Human-Computer Interaction and Architecture, Master's Scholar: Exhibit Center for Entrepreneurship" logoUrl="/public/placeholder.svg" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Index;
