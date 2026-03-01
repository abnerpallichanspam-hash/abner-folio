import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f10] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-2">{personalInfo.name}</h3>
            <p className="text-[#b8936a]">{personalInfo.role}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#b8b8b8] hover:text-[#b8936a] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[#b8b8b8] hover:text-[#b8936a] transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  {personalInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2a2a2a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#b8b8b8] text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-[#b8b8b8] text-sm">
            Built with React & FastAPI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;