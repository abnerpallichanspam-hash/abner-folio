import React, { useState } from 'react';
import { projects } from '../data/mock';
import { MapPin, Calendar, X } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = ['All', 'Healthcare', 'Security', 'Aged Care'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-[#b8936a] font-medium mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f0f10] mb-8">
            Featured Projects
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? 'default' : 'outline'}
                className={`${
                  activeFilter === filter
                    ? 'bg-[#b8936a] text-white hover:bg-[#8b7355]'
                    : 'border-[#e5e5e5] text-[#6b6b6b] hover:border-[#b8936a] hover:text-[#b8936a]'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e5e5e5]"
            >
              <div 
                className="relative h-64 overflow-hidden"
                style={project.isPattern ? {
                  backgroundImage: `url("${project.image}")`,
                  backgroundSize: 'auto',
                  backgroundRepeat: 'repeat',
                  backgroundColor: '#fafafa'
                } : {}}
              >
                {!project.isPattern && (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10]/80 via-[#0f0f10]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                )}
                <div className="absolute bottom-4 left-4 right-4 text-[#0f0f10] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{project.scope}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {project.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs px-3 py-1 bg-[#fafafa] text-[#b8936a] rounded-full border border-[#e5e5e5]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0f0f10] mb-2 group-hover:text-[#b8936a] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#6b6b6b] mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-sm text-[#6b6b6b]">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-serif font-bold text-[#0f0f10]">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Image Gallery */}
                <div className="space-y-4">
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.gallery[currentImageIndex]}
                      alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-2 overflow-x-auto">
                    {selectedProject.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                          currentImageIndex === idx
                            ? 'border-[#b8936a]'
                            : 'border-[#e5e5e5] opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-[#b8936a] font-medium mb-1">Company</p>
                    <p className="text-lg text-[#0f0f10] font-semibold">{selectedProject.company}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#b8936a] font-medium mb-1">Location</p>
                    <p className="text-lg text-[#0f0f10] font-semibold">{selectedProject.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#b8936a] font-medium mb-1">Scope</p>
                    <p className="text-lg text-[#0f0f10] font-semibold">{selectedProject.scope}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#b8936a] font-medium mb-1">Year</p>
                    <p className="text-lg text-[#0f0f10] font-semibold">{selectedProject.year}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-[#b8936a] font-medium mb-3">Project Description</p>
                  <p className="text-[#6b6b6b] leading-relaxed">{selectedProject.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.category.map((cat) => (
                    <span
                      key={cat}
                      className="px-4 py-2 bg-[#fafafa] text-[#b8936a] rounded-full border border-[#e5e5e5] text-sm font-medium"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;