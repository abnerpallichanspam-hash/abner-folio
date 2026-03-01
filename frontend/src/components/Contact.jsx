import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { personalInfo } from '../data/mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        toast({
          title: "Message Sent!",
          description: response.data.message,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-[#b8936a] font-medium mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f0f10]">
            Let's Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              I'm always interested in hearing about new opportunities and projects. 
              Whether you have a question or just want to say hello, feel free to reach out.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#fafafa] p-3 rounded-lg">
                  <Mail size={24} className="text-[#b8936a]" />
                </div>
                <div>
                  <p className="text-sm text-[#6b6b6b] mb-1">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-lg text-[#0f0f10] font-semibold hover:text-[#b8936a] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#fafafa] p-3 rounded-lg">
                  <Phone size={24} className="text-[#b8936a]" />
                </div>
                <div>
                  <p className="text-sm text-[#6b6b6b] mb-1">Phone</p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-lg text-[#0f0f10] font-semibold hover:text-[#b8936a] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#fafafa] p-3 rounded-lg">
                  <MapPin size={24} className="text-[#b8936a]" />
                </div>
                <div>
                  <p className="text-sm text-[#6b6b6b] mb-1">Location</p>
                  <p className="text-lg text-[#0f0f10] font-semibold">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="hidden lg:block relative h-64 rounded-lg overflow-hidden mt-8">
              <img
                src="https://images.unsplash.com/photo-1606731685022-7c79f9bc868b?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Contact"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10]/60 to-transparent" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#fafafa] p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#0f0f10] mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#0f0f10] mb-2">
                  Your Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#0f0f10] mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0f0f10] mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#b8936a] hover:bg-[#8b7355] text-white py-6 text-base"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send className="ml-2" size={18} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;