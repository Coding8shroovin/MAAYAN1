import React from 'react';

const FloatingWhatsappButton = () => {
  return (
    <div className="fixed bottom-5 left-5 z-50">
      <a
        href="https://wa.me/918098787661"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-lg transition-transform transform hover:scale-110"
        />
      </a>
    </div>
  );
};

export default FloatingWhatsappButton;
