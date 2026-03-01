import React from 'react';
import { experience } from '../data/mock';
import { CheckCircle2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-[#b8936a] font-medium mb-4">
            Career Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f0f10]">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-16">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Content - alternates left/right */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="space-y-2">
                  <p className="text-sm text-[#b8936a] font-medium">{exp.period}</p>
                  <h3 className="text-3xl font-serif font-bold text-[#0f0f10]">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-[#6b6b6b]">
                    {exp.company} • {exp.location}
                  </p>
                </div>

                <p className="text-lg text-[#6b6b6b] leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#b8936a] mt-1 flex-shrink-0" />
                      <p className="text-[#6b6b6b]">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10]/40 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;