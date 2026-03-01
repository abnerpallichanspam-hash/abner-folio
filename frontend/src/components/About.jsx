import React from 'react';
import { MapPin, Mail, Phone, Award } from 'lucide-react';
import { personalInfo, education } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-[#b8936a] font-medium mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f0f10]">
            Professional Background
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              With a strong background in preparing competitive tenders, interpreting construction drawings, 
              and liaising with clients, suppliers, and subcontractors, I bring a comprehensive understanding 
              of the entire project lifecycle from estimation to delivery.
            </p>
            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              Proficient in AutoCAD, Revit, Bluebeam, and estimating workflows, I have a proven ability to 
              manage multiple bids while maintaining accuracy, compliance, and commercial margins.
            </p>

            {/* Contact Info */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-3 text-[#6b6b6b]">
                <MapPin size={20} className="text-[#b8936a]" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-[#6b6b6b]">
                <Mail size={20} className="text-[#b8936a]" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-[#b8936a] transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-[#6b6b6b]">
                <Phone size={20} className="text-[#b8936a]" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-[#b8936a] transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Education & Image */}
          <div className="space-y-8">
            <div 
              className="relative h-96 rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url("${require('../data/geometricPatterns').geometricPatterns.professional1}")`,
                backgroundSize: 'auto',
                backgroundRepeat: 'repeat',
                backgroundColor: '#fafafa'
              }}
            />

            {/* Education */}
            <div className="bg-[#fafafa] p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <Award size={24} className="text-[#b8936a]" />
                <h3 className="text-2xl font-serif font-bold text-[#0f0f10]">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-[#b8936a] pl-4">
                    <h4 className="text-lg font-semibold text-[#0f0f10] mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-[#6b6b6b]">{edu.institution}</p>
                    <p className="text-sm text-[#b8936a]">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;