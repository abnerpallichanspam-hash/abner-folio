import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const requestRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports hover (not touch device)
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth follow animation
      const dotSpeed = 0.15;
      const ringSpeed = 0.08;

      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * dotSpeed;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * dotSpeed;
      
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringSpeed;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringSpeed;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target && (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.getAttribute('role') === 'button'
      )) {
        if (dotRef.current) {
          dotRef.current.style.width = '12px';
          dotRef.current.style.height = '12px';
        }
        if (ringRef.current) {
          ringRef.current.style.width = '48px';
          ringRef.current.style.height = '48px';
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (target && (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.getAttribute('role') === 'button'
      )) {
        if (dotRef.current) {
          dotRef.current.style.width = '8px';
          dotRef.current.style.height = '8px';
        }
        if (ringRef.current) {
          ringRef.current.style.width = '32px';
          ringRef.current.style.height = '32px';
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Hide on touch devices
  if (window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#b8936a] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-[#b8936a] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference opacity-50"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;