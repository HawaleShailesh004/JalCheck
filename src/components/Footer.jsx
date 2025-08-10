import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-primary-dark py-12 px-6 border-t-2 border-primary-light">
      <div className="max-w-6xl mx-auto flex flex-col gap-5 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img
            src="/images/jalCheck-logo.png"
            alt="JalCheck Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Copyright */}
        <div className="text-sm opacity-80">
          &copy; {new Date().getFullYear()} JalCheck. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
