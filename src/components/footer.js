import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-green-800 py-5 relative z-20">
      <div className="container mx-auto text-center my-auto">
        <p className="mb-4">
          © {new Date().getFullYear()} Mutiara Pandiangan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
