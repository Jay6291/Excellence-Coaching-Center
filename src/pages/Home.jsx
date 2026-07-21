import Navbar from "../components/Navbar";
import Gallery from "./Gallery";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaChalkboardTeacher,
  FaBookOpen,
  FaAward,
  FaUserGraduate,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";
import { MdSchool, MdScience } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import TeamAndTestimonials from "./TeamAndTestimonials";
import OurSubjects from "./OurSubjects";
import Hero from "./Hero";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="font-sans bg-[#F8F9FF] text-[#1a1a2e]">
      <Navbar />

      <Hero />

      {/* ─── STATS BAR ─── */}
      <section className="bg-[#0D1B3E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "500+", label: "Students Guided" },
            { num: "5+", label: "Years Experience" },
            { num: "3", label: "Core Subjects" },
            { num: "98%", label: "Pass Rate" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-extrabold text-yellow-400">
                {s.num}
              </div>
              <div className="text-blue-300 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">
              Who We Are
            </div>
            <h2 className="text-4xl font-extrabold text-[#0D1B3E] leading-tight mb-6">
              Building Tomorrow's
              <br />
              Academic Leaders
            </h2>
            <p className="text-gray-600 leading-8 mb-6">
              Excellence Coaching Center is committed to delivering high-quality
              education with a focus on conceptual clarity, disciplined
              learning, and result-oriented teaching methodology. Located in
              Motigarpur, Sultanpur, we've been guiding students towards
              academic excellence and career success.
            </p>
            <p className="text-gray-600 leading-8">
              Our faculty brings years of domain expertise and a genuine passion
              for teaching that creates an environment where every student can
              thrive and reach their full potential.
            </p>
            <Link to="/about">
              <button className="mt-8 bg-[#0D1B3E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-900 transition-all">
                Learn More About Us →
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: (
                  <FaChalkboardTeacher className="text-3xl text-blue-600" />
                ),
                title: "Expert Faculty",
                desc: "Experienced and passionate educators dedicated to student growth",
              },
              {
                icon: <FaBookOpen className="text-3xl text-yellow-500" />,
                title: "Concept-First",
                desc: "Deep conceptual understanding over rote memorisation",
              },
              {
                icon: <FaUserGraduate className="text-3xl text-green-500" />,
                title: "Personal Attention",
                desc: "Small batches ensuring every student gets individual focus",
              },
              {
                icon: <FaAward className="text-3xl text-red-500" />,
                title: "Proven Results",
                desc: "Consistent top scores and board exam success stories",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="font-bold text-[#0D1B3E] mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurSubjects />

      <TeamAndTestimonials />
      <Gallery />

      {/* ─── CTA ─── */}
      <section className="relative py-24 px-6 overflow-hidden bg-[#0D1B3E]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at center, #4f7ef7 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-blue-300 mb-8 text-lg">
            Join hundreds of students who have already taken the first step
            towards academic excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-[#0D1B3E] px-10 py-4 rounded-xl font-bold text-sm shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/40 transition-all">
                Contact Us Today →
              </button>
            </Link>
            <Link to="/courses">
              <button className="border border-white/25 text-white px-10 py-4 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all">
                Explore Courses
              </button>
            </Link>
          </div>
          <div className="mt-10 flex justify-center items-center gap-2 text-blue-300 text-sm">
            <FaMapMarkerAlt className="text-yellow-400" />
            <span>Motigarpur, Sultanpur, Uttar Pradesh</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
