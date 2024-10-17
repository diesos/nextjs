import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

// Chnage this with your own data
const defaultNavigationLinks = [
  { href: "#1", label: "About Us" },
  { href: "#2", label: "Services" },
  { href: "#3", label: "Blog" },
  { href: "#4", label: "Contact" },
];

const defaultSocialLinks = [
  { href: "#5", icon: <Facebook size={24} />, hoverColor: "text-gray-600" },
  { href: "#6", icon: <Twitter size={24} />, hoverColor: "text-gray-600" },
  { href: "#7", icon: <Linkedin size={24} />, hoverColor: "text-gray-600" },
  { href: "#8", icon: <Github size={24} />, hoverColor: "text-gray-600" },
];

const FooterThird = ({
  brandName = "StickyNote",
  navigationLinks = defaultNavigationLinks,
  socialLinks = defaultSocialLinks,
}) => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/" className="text-gray-900 hover:text-gray-600">
              {brandName}
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center space-x-6 text-sm">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gray-600">
                {link.label}
              </Link>
            ))}
          </div>
          {/* Social Icons */}
          <div className="flex flex-wrap justify-center space-x-4 text-gray-700">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                // target="_blank"
                rel="noopener noreferrer"
                className={`hover:${social.hoverColor || 'text-gray-600'}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-200 mt-5">
        <div className="mt-5 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} {brandName}. All rights reserved.</p>
        </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterThird;
