import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import amitImg from "../assets/amit1sir.jpg";
import shivamImg from "../assets/shivamsir.jpeg";
import ajayImg from "../assets/ajaysir.jpg";
import ambikaImg from "../assets/ambikasir.jpeg";

// Component wrapper or page container down below
export default function TeamAndTestimonials() {
  return (
    <>
      {/* ─── OUR TEAM SECTION ─── */}
      <section className="py-10 px-6 bg-[#030712] relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em] bg-amber-400/10 px-4 py-1.5 rounded-full inline-block mb-4">
              Meet Our Experts
            </span>
            <h2
              className="text-4xl lg:text-5xl font-black text-white tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Our Elite{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-amber-400">
                Faculty Team
              </span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base sm:text-lg font-light leading-relaxed">
              Dedicated educators shaping success through structured experience,
              high discipline, and absolute passion.
            </p>
          </motion.div>

          {/* TEAM GRID (Full-Image Premium Layout) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Amit",
                role: "Founder | B.Sc",
                img: amitImg,
                glowColor: "group-hover:shadow-blue-500/20",
              },
              {
                name: "Shivam Singh",
                role: "Director | B.Sc, M.Sc",
                img: shivamImg,
                glowColor: "group-hover:shadow-emerald-500/20",
              },
              {
                name: "Ajay Kumar",
                role: "Faculty | B.A, B.Ed, M.A",
                img: ajayImg,
                glowColor: "group-hover:shadow-orange-500/20",
              },
              {
                name: "Ambika Prakash Singh",
                role: "Faculty | B.Sc",
                img: ambikaImg,
                glowColor: "group-hover:shadow-purple-500/20",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                {/* Main Premium Card Wrapper */}
                <div
                  className={`relative h-[380px] w-full rounded-2xl overflow-hidden border border-white/5 bg-slate-900/40 shadow-xl transition-all duration-500 ${t.glowColor} group-hover:scale-[1.02] group-hover:border-white/10`}
                >
                  {/* Full Cover Image */}
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-[80] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay for Text Visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity duration-300" />

                  {/* Card Premium Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end">
                    <p className="text-amber-400 text-[10px] uppercase tracking-widest font-bold mb-1 opacity-90">
                      {t.role.split(" | ")[0]}
                    </p>
                    <h3
                      className="text-white font-extrabold text-xl tracking-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {t.name}
                    </h3>
                    <p className="text-slate-300 text-xs mt-0.5 font-medium">
                      {t.role.split(" | ")[1]} Graduate
                    </p>

                    {/* Subtle Hover Animated Line */}
                    <div className="w-8 h-[3px] bg-gradient-to-r from-amber-400 to-orange-500 mt-4 rounded-full group-hover:w-20 transition-all duration-500 ease-out" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL SECTION ─── */}
      <section className="py-10 px-6 bg-[#0A0F1D] border-t border-white/5 relative overflow-hidden">
        {/* Decorative Background Mesh */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em] bg-blue-500/10 px-4 py-1.5 rounded-full inline-block mb-4">
              Student Voices
            </span>
            <h2
              className="text-4xl lg:text-5xl font-black text-white tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Students Say
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "The teachers here explain concepts so clearly. My math scores improved dramatically after joining.",
                name: "Priya S.",
                grade: "Class 12 Student",
              },
              {
                text: "Best coaching centre in Sultanpur. Small batch size means sir gives personal attention to every student.",
                name: "Rahul K.",
                grade: "Class 10 Student",
              },
              {
                text: "Shivam sir's science classes are excellent. He makes complex topics simple and easy to remember.",
                name: "Ananya T.",
                grade: "Class 11 Student",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-to-b from-slate-900/80 to-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 shadow-xl hover:border-white/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1 text-amber-400 text-sm">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <FaQuoteLeft className="text-slate-700 group-hover:text-blue-500/40 text-xl transition-colors duration-300" />
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-8 italic font-light">
                    "{t.text}"
                  </p>
                </div>

                {/* User Info Block */}
                <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md">
                    {t.name[0]}
                  </div>
                  <div>
                    <div
                      className="font-bold text-white text-sm tracking-wide"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {t.name}
                    </div>
                    <div className="text-slate-500 text-xs font-medium mt-0.5">
                      {t.grade}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
