import Navbar from "../components/Navbar";
import { FaChalkboardTeacher, FaBookOpen, FaUserGraduate, FaAward, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-[#F8F9FF] text-[#1a1a2e]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0D1B3E] pt-32 pb-20 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">Our Story</div>
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            About Excellence<br />Coaching Center
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
            A dedicated educational institution founded on the belief that every student
            deserves quality guidance and personalised mentorship.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">Our Mission</div>
            <h2 className="text-3xl font-extrabold text-[#0D1B3E] mb-6 leading-snug">
              Excellence in Education,<br />One Student at a Time
            </h2>
            <p className="text-gray-600 leading-8 mb-4">
              Excellence Coaching Center, Motigarpur, Sultanpur is dedicated to providing
              high-quality education with expert faculty guidance. We focus on conceptual
              learning, discipline, and student success.
            </p>
            <p className="text-gray-600 leading-8">
              Our teaching methodology combines rigorous academic content with a supportive
              environment where curiosity is encouraged and questions are celebrated.
              We believe education is not just about passing exams — it's about building
              lifelong thinking skills.
            </p>
          </div>
          <div className="bg-[#F0F4FF] rounded-3xl p-8">
            <h3 className="text-xl font-bold text-[#0D1B3E] mb-6">Our Core Values</h3>
            <div className="space-y-5">
              {[
                { icon: "🎯", title: "Conceptual Clarity", desc: "We prioritise understanding over memorisation." },
                { icon: "💡", title: "Innovative Teaching", desc: "Modern methods make complex topics accessible." },
                { icon: "🤝", title: "Student Partnership", desc: "Every student is a partner in their learning journey." },
                { icon: "📈", title: "Continuous Growth", desc: "We evolve our teaching to meet changing needs." },
              ].map((v, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">{v.icon}</div>
                  <div>
                    <div className="font-bold text-[#0D1B3E]">{v.title}</div>
                    <div className="text-gray-500 text-sm mt-0.5">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6 bg-[#F0F4FF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">Why Choose Us</div>
            <h2 className="text-3xl font-extrabold text-[#0D1B3E]">What Sets Us Apart</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaChalkboardTeacher className="text-3xl text-blue-600" />, title: "Expert Faculty", desc: "Qualified educators with years of teaching experience" },
              { icon: <FaBookOpen className="text-3xl text-yellow-500" />, title: "Focused Curriculum", desc: "Board-aligned syllabus with strong conceptual foundation" },
              { icon: <FaUserGraduate className="text-3xl text-green-500" />, title: "Small Batches", desc: "Personalised attention in intimate learning groups" },
              { icon: <FaAward className="text-3xl text-red-500" />, title: "Proven Track Record", desc: "Consistent high results across board examinations" },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">{f.icon}</div>
                <h3 className="font-bold text-[#0D1B3E] mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">Find Us</div>
          <h2 className="text-3xl font-extrabold text-[#0D1B3E] mb-4">Our Location</h2>
          <div className="flex justify-center items-center gap-2 text-gray-600 mb-10">
            <FaMapMarkerAlt className="text-blue-600" />
            <span>Motigarpur, Sultanpur, Uttar Pradesh</span>
          </div>
          <div className="flex justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-500" /> 8737960180 (Amit)
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-500" /> 6388338440 (Shivam)
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-5 text-sm text-gray-500">
        © 2026 Excellence Coaching Center | Motigarpur, Sultanpur
      </footer>
    </div>
  );
};

export default About;
