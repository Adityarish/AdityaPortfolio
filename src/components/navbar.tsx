import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Importing icons for the hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setIsOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    // Fixed Navbar container with background and shadow
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Site Title */}
        <div className="text-2xl font-bold text-black">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Port<span className='text-primary'>Folio</span></button> {/* Link to top of hero section with smooth scrolling */}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
            About
          </button>
          <button onClick={() => scrollToSection('certifications')} className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
            Certifications
          </button>
          <button onClick={() => scrollToSection('achievements')} className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
            Achievements
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-foreground hover:text-primary focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (conditionally rendered) */}
      {/* Uses absolute positioning to slide down from the top */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background/90 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-center py-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200 font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('certifications')}
            className="block w-full text-center py-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200 font-medium"
          >
            Certifications
          </button>
          <button
            onClick={() => scrollToSection('achievements')}
            className="block w-full text-center py-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200 font-medium"
          >
            Achievements
          </button>  
        </div>
      </div>
    </nav>
  );
};

export default Navbar;