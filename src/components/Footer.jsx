import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#071126] border-t border-white/5 text-white font-sans selection:bg-yellow-400 selection:text-[#0D1B3E]">
      {/* ─── Main Footer Content ─── */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
        {/* Column 1: Brand & About (4/12 width) */}
        <div className="md:col-span-5 space-y-4">
          <h3
            className="text-xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Excellence{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Coaching Center
            </span>
          </h3>
          <p className="text-blue-200/60 text-sm leading-relaxed max-w-sm">
            Building strong academic foundations with expert guidance,
            innovative learning methods, and a result-oriented approach.
          </p>

          {/* Social Media Links */}
          <div className="pt-2 flex items-center gap-3">
            {[
              {
                icon: <FaInstagram />,
                url: "https://www.instagram.com/excllence_coaching_center/",
                hoverColor:
                  "hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 hover:text-white",
              },

              {
                icon: <FaWhatsapp />,
                url: "https://wa.me/918737960180",
                hoverColor: "hover:bg-green-500 hover:text-white",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-blue-200/70 transition-all duration-300 backdrop-blur-sm ${social.hoverColor} hover:-translate-y-1 hover:shadow-lg`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links (3/12 width) */}
        <div className="md:col-span-3">
          <h4 className="font-bold mb-5 text-xs uppercase tracking-widest text-blue-400">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Courses", "Contact"].map((l) => (
              <li key={l}>
                <Link
                  to={`/${l === "Home" ? "" : l.toLowerCase()}`}
                  className="relative text-blue-200/60 hover:text-white transition duration-200 group block w-max"
                >
                  {l}
                  {/* Premium Link Underline Animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info (4/12 width) */}
        <div className="md:col-span-4">
          <h4 className="font-bold mb-5 text-xs uppercase tracking-widest text-blue-400">
            Contact Info
          </h4>
          <div className="space-y-4 text-sm text-blue-200/70">
            <div className="flex items-start gap-3 group">
              <div className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-yellow-400/30 transition">
                <FaPhoneAlt className="text-yellow-400 text-xs" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-blue-400/70 font-semibold">
                  Amit Sir
                </p>
                <a
                  href="tel:8737960180"
                  className="hover:text-white transition font-medium"
                >
                  8737960180
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 group">
              <div className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-yellow-400/30 transition">
                <FaPhoneAlt className="text-yellow-400 text-xs" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-blue-400/70 font-semibold">
                  Shivam Sir
                </p>
                <a
                  href="tel:6388338440"
                  className="hover:text-white transition font-medium"
                >
                  6388338440
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 group">
              <div className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-yellow-400/30 transition">
                <FaMapMarkerAlt className="text-yellow-400 text-xs" />
              </div>
              <p className="leading-relaxed group-hover:text-white transition font-medium">
                Motigarpur, Sultanpur, <br />
                Uttar Pradesh — 228132
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom Copyright & Developer Credit Bar ─── */}
      <div className="border-t border-white/[0.05] bg-[#050c1b]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs md:text-sm text-blue-200/40 font-medium tracking-wide text-center">
          {/* Excellence Copyright */}
          <span className="font-sans">
            © 2026 Excellence Coaching Center. All rights reserved.
          </span>

          {/* Premium Dot Separator */}
          <span className="text-yellow-400/50 hidden sm:inline">•</span>

          {/* Developer Credit */}
          <div className="flex items-center gap-1.5 font-sans">
            <span>Developed By</span>
            <a
              href="https://jay6291.github.io/Jay_Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 hover:brightness-110 transition duration-300 filter drop-shadow-[0_0_8px_rgba(234,179,8,0.2)]"
            >
              Jay Kamal
            </a>
            <span className="text-blue-200/20">|</span>
            <span className="text-blue-400/70 font-semibold">
              Full Stack Developer
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
