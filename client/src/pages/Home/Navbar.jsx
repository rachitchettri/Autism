import React from 'react';
import autismLogo from '../../assets/autism.png';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm px-6 py-3 md:py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="flex items-center">
        <a href="/">
          <img
            src={autismLogo}
            alt="Logo"
            className="h-9 md:h-15 w-auto object-contain"
          />
        </a>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <a href="/" className="text-gray-700 hover:text-[#16a34a] font-medium transition">
          Home
        </a>
        <a href="/features" className="text-gray-700 hover:text-[#16a34a] font-medium transition">
          Features
        </a>
        <a href="/community" className="text-gray-700 hover:text-[#16a34a] font-medium transition">
          Community
        </a>
        <a href="/blog" className="text-gray-700 hover:text-[#16a34a] font-medium transition">
          Blog
        </a>
        <a href="/pricing" className="text-gray-700 hover:text-[#16a34a] font-medium transition">
          Pricing
        </a>
        <a
          href="/get-started"
          className="bg-[#16a34a] text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition"
        >
          Help Them Grow
        </a>
      </nav>

    </header>
  );
}
