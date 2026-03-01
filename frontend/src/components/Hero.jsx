import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#fafafa] via-white to-[#f5f5f5]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-[#b8936a] font-medium">
                Security Systems Engineer
              </p>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#0f0f10] leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-[#6b6b6b] leading-relaxed">
                {personalInfo.role}
              </p>
            </div>

            <p className="text-lg text-[#6b6b6b] leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={(e) => scrollToSection(e, '#projects')}
                className="bg-[#b8936a] hover:bg-[#8b7355] text-white px-8 py-6 text-base"
              >
                View Projects
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                variant="outline"
                className="border-[#b8936a] text-[#b8936a] hover:bg-[#b8936a] hover:text-white px-8 py-6 text-base"
              >
                <Download className="mr-2" size={18} />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#e5e5e5] hover:shadow-md transition-shadow">
              <p className="text-4xl font-serif font-bold text-[#b8936a] mb-2">
                {personalInfo.experience}
              </p>
              <p className="text-sm text-[#6b6b6b] uppercase tracking-wide">
                Experience
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#e5e5e5] hover:shadow-md transition-shadow">
              <p className="text-4xl font-serif font-bold text-[#b8936a] mb-2">
                {personalInfo.projectsCompleted}
              </p>
              <p className="text-sm text-[#6b6b6b] uppercase tracking-wide">
                Projects
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#e5e5e5] hover:shadow-md transition-shadow col-span-2">
              <p className="text-2xl font-serif font-bold text-[#b8936a] mb-2">
                {personalInfo.specialization}
              </p>
              <p className="text-sm text-[#6b6b6b] uppercase tracking-wide">
                Specialization
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#b8936a] rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-[#b8936a] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;