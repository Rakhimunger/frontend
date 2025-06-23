import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/image.png";
import logo from "../assets/images/logo.png";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-[#1b2a4e] text-sm pt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-300">
        {/* Logo & About */}
        <div>
          <img src={logo} alt="ANT Logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed text-gray-700">
            We are one of the oldest transport service providers in Delhi/NCR
            since 2003. Serving companies in Delhi, Gurgaon, & Noida with a
            skilled, dedicated team offering end-to-end solutions.
          </p>
          <div className="flex space-x-3 mt-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-orange-600 hover:bg-orange-800 transition-colors p-2 rounded-full text-white shadow-md"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg text-blue-900 font-semibold mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-800">
            {[
              { label: "Home", to: "/home" },
              { label: "AC Delux Bus Hire", to: "/ac-delux-bus" },
              { label: "AC Luxury Bus Hire", to: "/ac-luxury-bus" },
              { label: "AC Sleeper Bus Hire", to: "/ac-sleeper-bus" },
              { label: "AC Delux Minivan Hire", to: "/ac-delux-minivan" },
              { label: "AC Luxury Minivan Hire", to: "/ac-luxury-minivan" },
              { label: "Sedan / Hatchback Car Hire", to: "/sedan-hatchback" },
              { label: "SUV / MUV Car Hire", to: "/suv-muv" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.to}
                  className="hover:text-blue-900 transition-colors duration-200"
                >
                  › {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg text-blue-900 font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            {[
              { label: "Become Bus Operator", to: "/bus-operator-form" },
              { label: "About Us", to: "/about-us" },
              { label: "Contact Us", to: "/contact" },
              { label: "Site Map", to: "/sitemap" },
              { label: "Gallery", to: "/gallery" },
              { label: "Terms & Conditions", to: "/terms-condtions" },
              { label: "Policy", to: "/policy" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.to}
                  className="hover:text-blue-900 transition-colors duration-200"
                >
                  › {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg text-blue-900 font-semibold mb-4">Address</h3>
          <ul className="space-y-4 text-sm text-gray-800">
            <li className="flex items-start">
              <span className="bg-orange-600 text-white p-2 rounded-full mr-3 shadow-md">
                <Phone className="w-4 h-4" />
              </span>
              <span className="pt-1">+91-1800 102 7408</span>
            </li>
            <li className="flex items-start">
              <span className="bg-orange-600 text-white p-2 rounded-full mr-3 shadow-md">
                <Mail className="w-4 h-4" />
              </span>
              <span className="pt-1">mail@anttravels.com</span>
            </li>
            <li className="flex items-start">
              <span className="bg-orange-600 text-white p-2 rounded-full mr-3 shadow-md">
                <MapPin className="w-4 h-4" />
              </span>
              <span className="pt-1">
                B-128, Transport Nagar, Sector-69,
                <br />
                Noida, 201301 (Uttar Pradesh) India
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-[#3B4B96] to-[#FF5722] text-white py-4 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-center">
          © All Rights Reserved. Designed by{" "}
          <strong>A N T Soft Solution</strong>
        </p>
        <div className="flex items-center space-x-3 mt-3 md:mt-0">
          <span>We Accept</span>
          <img src={image} alt="Image" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
