
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from '@/hooks/use-toast';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon!"
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Header />
      <main>
        {/* Contact Hero */}
        <section className="pt-32 pb-16 bg-neutral-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Connect
              </h1>
              <p className="text-neutral-700 mb-6">
                Have a question about my work or interested in collaborating? Feel free to reach out!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="animate-on-scroll">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-neutral-700 mb-1">
                        Name <span className="text-primary-500">*</span>
                      </label>
                      <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-neutral-700 mb-1">
                        Email <span className="text-primary-500">*</span>
                      </label>
                      <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-neutral-700 mb-1">
                        Subject
                      </label>
                      <Input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-neutral-700 mb-1">
                        Message <span className="text-primary-500">*</span>
                      </label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required />
                    </div>
                    
                    <Button type="submit" disabled={isSubmitting} className="bg-primary-500 hover:bg-primary-600 text-white">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
                
                <div className="animate-on-scroll">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 text-primary-500">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 8L10.7829 13.5215C11.5 14 12.5 14 13.2171 13.5215L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <a href="mailto:erincfuller@gmail.com" className="text-primary-500 hover:underline">erincfuller@gmail.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 text-primary-500">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 13V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V13M21 13V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V13M21 13H3M10 8H14M9 16H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/erincfuller" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">linkedin.com/in/erincfuller</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 text-primary-500">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9896 14.5C13.3768 14.5 14.5 13.3768 14.5 11.9896C14.5 10.6024 13.3768 9.47922 11.9896 9.47922C10.6024 9.47922 9.47922 10.6024 9.47922 11.9896C9.47922 13.3768 10.6024 14.5 11.9896 14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M11.99 5C15.979 5 19.5 7.58 19.5 12C19.5 16.42 15.979 19 11.99 19C8.00098 19 4.5 16.42 4.5 12C4.5 9.88 5.50526 8 7.34338 6.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Based In</h3>
                        <p>New York City</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
