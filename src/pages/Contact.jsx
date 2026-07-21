import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY",
      );

      console.log(result.text);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    // min-h-screen और items-center को हटाकर यहाँ pt (Padding-Top) सेट की है ताकि ये Navbar के ठीक नीचे से शुरू हो
    <div className="bg-[#FAFBFD] w-full pt-12 md:pt-20 pb-12 px-4 md:px-10 font-sans antialiased">
      <div className="max-w-7xl w-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[750px] mx-auto">
        {/* LEFT PANEL: INFO ZONE (Deep Navy Blue Layout) */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#0B1528] to-[#122242] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Blur Effect */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none rounded-b-3xl" />

          <div className="relative z-10 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
                Get In Touch
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 leading-tight">
                We're Here to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  Help You
                </span>
              </h1>
              <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed">
                Have questions or need guidance? Our team is ready to assist
                you. Reach out to us anytime!
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-6 pt-4">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                    Phone Number
                  </h4>
                  <p className="text-base font-semibold mt-0.5 text-slate-200">
                    +91 87379 60180
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                    Email Address
                  </h4>
                  <p className="text-base font-semibold mt-0.5 text-slate-200">
                    Kanaujiyaamit52@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                    Our Location
                  </h4>
                  <p className="text-sm font-semibold mt-0.5 text-slate-200 leading-relaxed">
                    Excellence Coaching Center ,Motigarpur ,Sultanpur <br />{" "}
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                    Working Hours
                  </h4>
                  <p className="text-sm font-semibold mt-0.5 text-slate-200">
                    Monday - Saturday <br /> 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons Footer - Beautiful Brand SVGs added */}
          <div className="pt-8 relative z-10 border-t border-slate-800/60 mt-10">
            <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-3">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {/* Facebook */}

              {/* Instagram */}
              <a
                href="https://www.instagram.com/excllence_coaching_center/"
                className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white transition-all text-slate-300 shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* YouTube */}

              {/* LinkedIn */}

              {/* Twitter / X */}

              {/* WhatsApp */}
              <a
                href="https://wa.me/918737960180"
                className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all text-slate-300 shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: MESSAGE FORM ZONE */}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Send Us a Message
                </h2>
                <p className="text-slate-400 text-xs md:text-sm mt-0.5">
                  Fill out the form below and we'll get back to you shortly.
                </p>
              </div>
            </div>

            {/* Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative border border-slate-200 rounded-2xl p-3 flex items-center gap-3 bg-[#FAFBFD]/50 focus-within:border-blue-500 focus-within:bg-white transition-all duration-300">
                <div className="text-slate-400 shrink-0 pl-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-transparent border-none p-0 text-slate-800 placeholder-slate-400 text-sm focus:ring-0 focus:outline-none mt-0.5"
                    required
                  />
                </div>
              </div>

              <div className="relative border border-slate-200 rounded-2xl p-3 flex items-center gap-3 bg-[#FAFBFD]/50 focus-within:border-blue-500 focus-within:bg-white transition-all duration-300">
                <div className="text-slate-400 shrink-0 pl-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full bg-transparent border-none p-0 text-slate-800 placeholder-slate-400 text-sm focus:ring-0 focus:outline-none mt-0.5"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div className="relative border border-slate-200 rounded-2xl p-3 flex items-center gap-3 bg-[#FAFBFD]/50 focus-within:border-blue-500 focus-within:bg-white transition-all duration-300">
              <div className="text-slate-400 shrink-0 pl-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-none p-0 text-slate-800 placeholder-slate-400 text-sm focus:ring-0 focus:outline-none mt-0.5"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="relative border border-slate-200 rounded-2xl p-3 flex items-center gap-3 bg-[#FAFBFD]/50 focus-within:border-blue-500 focus-within:bg-white transition-all duration-300">
              <div className="text-slate-400 shrink-0 pl-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="w-full bg-transparent border-none p-0 text-slate-800 placeholder-slate-400 text-sm focus:ring-0 focus:outline-none mt-0.5"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative border border-slate-200 rounded-2xl p-3 flex items-start gap-3 bg-[#FAFBFD]/50 focus-within:border-blue-500 focus-within:bg-white transition-all duration-300">
              <div className="text-slate-400 shrink-0 pl-1 pt-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows={4}
                  className="w-full bg-transparent border-none p-0 text-slate-800 placeholder-slate-400 text-sm focus:ring-0 focus:outline-none mt-1 resize-none"
                  required
                />
              </div>
            </div>

            {/* Button */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold p-4 rounded-2xl flex items-center justify-center gap-2 shadow-md shadow-blue-500/10 transition duration-300 text-sm tracking-wider uppercase"
            >
              <svg
                className="w-4 h-4 transform rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Send Message
            </motion.button>
          </form>

          {/* Footer Separator & Emergency Box */}
          <div className="mt-8 space-y-5">
            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-slate-100"></div>
              <span className="px-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
                OR
              </span>
              <div className="flex-1 border-t border-slate-100"></div>
            </div>

            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-500">
                  Need Immediate Assistance?
                </h4>
                <a
                  href="tel:+918737960180"
                  className="text-sm font-extrabold text-blue-600 hover:underline"
                >
                  Call us directly at +91 87379 60180
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
