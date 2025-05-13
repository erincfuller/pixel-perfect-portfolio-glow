
import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  logoUrl?: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  logoUrl,
  link,
}) => {
  return (
    <Link to={link} className="block project-card overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        {logoUrl && (
          <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-md bg-neutral-100">
            <img src={logoUrl} alt={`${title} logo`} className="max-w-[70%] max-h-[70%]" />
          </div>
        )}
        
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-neutral-700">{description}</p>
        
        <div className="mt-4 flex items-center text-primary-500 font-medium">
          <span>See Case Study</span>
          <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
