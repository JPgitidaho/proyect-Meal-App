import { Link } from "react-router-dom";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#5A3E36] text-white py-8">
      <div className=" mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <img src="/assets/logo.svg" alt="Logo" className="h-10 mx-auto md:mx-0 mb-2" />

          <p className="text-sm">Tu proyecto de recetas.</p>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4A373] hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4A373] hover:text-white transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4A373] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4A373] hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>

        <div className="text-center md:text-right">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><Link to="/privacidad" className="text-gray-300 hover:text-white transition-colors duration-300">Política de Privacidad</Link></li>
            <li><Link to="/contacto" className="text-gray-300 hover:text-white transition-colors duration-300">Contacto</Link></li>
          </ul>

        </div>
      </div>
    </footer>
  );
};

export default Footer;