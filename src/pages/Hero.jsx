import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaPhoneAlt } from "react-icons/fa";
import BackGroundBg from "../assets/ExcllenceBG1.jfif";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 15 },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a142c] font-sans selection:bg-yellow-400 selection:text-[#0D1B3E]">
      {/* ─── Background Image Overlay (Fixed fallbacks for .jfif asset handling) ─── */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.09] mix-blend-luminosity scale-105 pointer-events-none"
        style={{
          backgroundImage: BackGroundBg ? `url(${BackGroundBg})` : "none",
        }}
      />

      {/* ─── Premium Ambient Backgrounds ─── */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 30%, #4f7ef7 0%, transparent 60%), radial-gradient(circle at 90% 80%, #f5c518 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #091228 0%, #0d1b3e 60%, #162952 100%)",
        }}
      />

      {/* Modern Grid Overlay Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Decorative Floating Elements */}
      <div className="absolute top-24 right-1/3 w-72 h-72 rounded-full bg-blue-500/10 blur-[100px] animate-pulse pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="absolute top-20 right-20 w-80 h-80 rounded-full border border-white/5 hidden lg:block pointer-events-none z-0" />
      <div className="absolute top-32 right-32 w-48 h-48 rounded-full border border-yellow-400/10 hidden lg:block pointer-events-none z-0" />

      {/* ─── Main Content Container ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 lg:py-36 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-16 items-center"
        >
          {/* ─── Left Side: Headings & CTA ─── */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 text-yellow-400 text-xs md:text-sm font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full shadow-lg shadow-yellow-500/5">
                <FaStar className="text-yellow-400 animate-spin-slow text-xs" />
                Admission Open 2026
              </span>
            </motion.div>

            {/* Premium Typography Title (Fixed Spacing & Padding) */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7.5xl font-extrabold text-white leading-[1.15] tracking-tight font-serif"
              style={{
                fontFamily:
                  "'Playfair Display', 'Merriweather', Georgia, serif",
              }}
            >
              Excellence
              <div className="h-2 md:h-3" />{" "}
              {/* Professional micro-gap block */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-300% animate-gradient-shift filter drop-shadow-[0_2px_10px_rgba(245,197,24,0.15)] pb-1 inline-block">
                Coaching
              </span>
              <br />
              Center
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-xl font-normal"
              style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
            >
              Motigarpur, Sultanpur — Building strong academic foundations with
              dedicated expert guidance, personalized mentoring, and
              result-oriented learning.
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-5 pt-2"
            >
              <Link to="/contact">
                <button className="relative group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-[#071126] px-8 py-4.5 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(234,179,8,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(234,179,8,0.5)] active:scale-95">
                  Enroll Now →
                </button>
              </Link>
              <Link to="/courses">
                <button className="border border-white/15 text-white bg-white/5 hover:bg-white/10 px-8 py-4.5 rounded-2xl font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:border-white/30 backdrop-blur-sm active:scale-95">
                  View Courses
                </button>
              </Link>
            </motion.div>

            {/* Contact Info Widget */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 text-blue-200/90 pt-4"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white/[0.04] border border-white/10 rounded-2xl shadow-inner shadow-white/5">
                <FaPhoneAlt className="text-yellow-400 text-sm" />
              </div>
              <div>
                <div className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">
                  Call Us Today
                </div>
                <a
                  href="tel:8737960180"
                  className="text-white text-lg font-bold hover:text-yellow-400 transition-colors"
                >
                  8737960180
                </a>
              </div>
            </motion.div>
          </div>

          {/* ─── Right Side: Glassmorphism Card ─── */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative group z-10"
          >
            {/* Card Background Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

            <div className="relative bg-[#0d1b3e]/60 backdrop-blur-2xl border border-white/10 rounded-[2.2rem] p-8 md:p-10 shadow-2xl">
              <div className="text-yellow-400 text-xs font-black uppercase tracking-widest mb-3">
                2026 Session
              </div>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight font-serif"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Admissions Open
              </h2>
              <p className="text-blue-200/80 mb-8 leading-relaxed text-sm md:text-base">
                Join the highest-rated coaching for Mathematics, Science &amp;
                Accounting with custom study materials and weekly analytics
                tests.
              </p>

              {/* Feature/Course List */}
              <div className="space-y-4 mb-10">
                {[
                  "Class 9 – 12 Mathematics",
                  "Physics, Chemistry &amp; Biology",
                  "Commerce &amp; Accounting",
                ].map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-white/95 text-sm md:text-base font-medium py-1"
                  >
                    <div className="w-6 h-6 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: c }} />
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <button className="w-full relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 text-[#0D1B3E] py-4.5 rounded-2xl font-extrabold uppercase tracking-wider text-xs md:text-sm hover:opacity-95 active:scale-[0.98] transition-all shadow-[0_8px_20px_-6px_rgba(234,179,8,0.3)]">
                  Apply Now — Free Counselling
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
