import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-content p-10">
      <div className="container mx-auto max-w-screen-lg">
        {/* Columns Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-4">
          {/* Left Column */}
          <nav className="text-left">
            <h6 className="footer-title font-bold text-lg mb-2">Services</h6>
            <a className="link link-hover block">Branding</a>
            <a className="link link-hover block">Design</a>
            <a className="link link-hover block">Marketing</a>
            <a className="link link-hover block">Advertisement</a>
          </nav>

          {/* Center Column */}
          <nav className="text-left lg:text-center">
            <h6 className="footer-title font-bold text-lg mb-2">Company</h6>
            <a className="link link-hover block">About us</a>
            <a className="link link-hover block">Contact</a>
            <a className="link link-hover block">Jobs</a>
            <a className="link link-hover block">Press kit</a>
          </nav>

          {/* Right Column */}
          <nav className="text-left lg:text-right">
            <h6 className="footer-title font-bold text-lg mb-2">Legal</h6>
            <a className="link link-hover block">Terms of use</a>
            <a className="link link-hover block">Privacy policy</a>
            <a className="link link-hover block">Cookie policy</a>
          </nav>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} E-shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
