import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming your Button component path
import { Mail } from 'lucide-react'; // Using the Mail icon from lucide-react
import speechBubble from '@/assets/speech-bubble.png';

const FloatingContactButton = () => {
  // Function to handle smooth scrolling to a section by ID
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 hover:scale-150 transition-all duration-300"> {/* Adjust bottom/right for desired position */}
      <Button
        variant="ghost"
        onClick={() => scrollToSection('contact')}
        className="bg-background hover:bg-background"
      >
        <img src={speechBubble} alt="" className='w-14 h-14 ' />
      </Button>
    </div>
  );
};

export default FloatingContactButton;
