import React from 'react';
import { skills } from '../data/mock';
import { Award, Code, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Estimating & Commercial',
      icon: Award,
      skills: skills.estimating,
      color: 'bg-[#b8936a]'
    },
    {
      title: 'Systems & Technical',
      icon: Wrench,
      skills: skills.systems,
      color: 'bg-[#8b7355]'
    },
    {
      title: 'Software & Tools',
      icon: Code,
      skills: skills.software,
      color: 'bg-[#b8936a]'
    },
    {
      title: 'Professional Skills',
      icon: Users,
      skills: skills.professional,
      color: 'bg-[#8b7355]'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-[#b8936a] font-medium mb-4">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f0f10]">
            Skills & Proficiencies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border border-[#e5e5e5] hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${category.color} p-3 rounded-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0f0f10]">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#fafafa] text-[#6b6b6b] rounded-full border border-[#e5e5e5] text-sm hover:border-[#b8936a] hover:text-[#b8936a] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;