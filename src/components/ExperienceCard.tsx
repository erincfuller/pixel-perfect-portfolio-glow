
import React from 'react';

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  logoUrl?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  period,
  description,
  logoUrl,
}) => {
  return (
    <div className="flex gap-6 mb-8 fade-in-up">
      {logoUrl && (
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-md bg-neutral-100 flex items-center justify-center overflow-hidden">
            <img src={logoUrl} alt={`${company} logo`} className="w-10 h-10 object-contain" />
          </div>
        </div>
      )}
      
      <div>
        <h3 className="text-lg font-semibold">{company}</h3>
        <div className="flex flex-col md:flex-row md:items-center text-neutral-700 mt-1 mb-2">
          <span className="font-medium">{role}</span>
          <span className="hidden md:block mx-2">•</span>
          <span>{period}</span>
        </div>
        <p className="text-neutral-800">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
