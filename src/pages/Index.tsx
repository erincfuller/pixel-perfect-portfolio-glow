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
            <div className="w-full max-w-[1440px] px-22 py-10 mx-auto">
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
                <img src="/lovable-uploads/ff96fce8-2c39-4da5-b607-1325f7bf72a5.png" alt="Product Strategist" className="Explanation:\nw-full \u2013 full width of parent\nmax-w-[1440px] \u2013 custom max width to match your design\npx-22 \u2013 horizontal padding (22 * 4px = 88px)\npy-10 \u2013 vertical padding (10 * 4px = 40px)\nmx-auto \u2013 center align the container" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-neutral-100">
          <div className="container mx-auto px-4 md:p-16\\n">
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