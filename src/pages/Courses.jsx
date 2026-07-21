import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const classesData = [
  {
    class: "Class 6",
    board: "Both Boards",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    subjects: ["Math", "Science", "English", "Hindi", "SST", "Computer"],
  },
  {
    class: "Class 7",
    board: "Both Boards",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    subjects: ["Math", "Science", "English", "Hindi", "SST", "Computer"],
  },
  {
    class: "Class 8",
    board: "Both Boards",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    subjects: ["Math", "Science", "English", "Hindi", "SST", "Computer"],
  },
  {
    class: "Class 9",
    board: "CBSE Board",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    subjects: ["Math", "Science", "English", "Hindi", "SST", "IT"],
  },
  {
    class: "Class 10",
    board: "CBSE Board",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    subjects: ["Math", "Science", "English", "Hindi", "SST", "IT"],
  },
  {
    class: "Class 11 Science",
    board: "CBSE Board",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    subjects: ["Physics", "Chemistry", "Math/Bio", "English", "PE"],
  },
  {
    class: "Class 11 Commerce",
    board: "CBSE Board",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    subjects: ["Accountancy", "Business", "Economics", "Math", "English"],
  },
  {
    class: "Class 11 Arts",
    board: "CBSE Board",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    subjects: ["History", "Geography", "Pol Sci", "Economics", "English"],
  },
  {
    class: "Class 12 Science",
    board: "CBSE Board",
    image: "https://images.unsplash.com/photo-1581093458791-9d42e0d7b5b0",
    subjects: ["Physics", "Chemistry", "Math/Bio", "English", "PE"],
  },
  {
    class: "Class 12 Commerce",
    board: "CBSE Board",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    subjects: ["Accountancy", "Business", "Economics", "Math", "English"],
  },
  {
    class: "Class 12 Arts",
    board: "CBSE Board",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    subjects: ["History", "Geography", "Pol Sci", "Economics", "English"],
  },
];

export default function Courses() {
  const whatsappNumber = "918737960180";

  const whatsappMsg = (cls) => {
    const msg = `Hi, I want admission details for ${cls}`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <div className="bg-[#FAFBFD] min-h-screen font-sans antialiased">
      {/* PREMIUM HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1528] to-[#122242] text-white py-20 text-center px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />

        <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6 tracking-wide uppercase">
          Admissions Open 2026-27
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Classes 6 to 12 Premium Coaching
        </h1>
        <p className="text-slate-400 mt-4 text-base md:text-lg max-w-2xl mx-auto font-medium">
          A comprehensive CBSE & UP Board Complete Learning System built to
          empower top-tier academic performance.
        </p>
      </section>

      {/* FIXED STRUCTURED GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {classesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-300"
            >
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={item.class}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />

                {/* Elegant Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Premium Board Badge */}
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-slate-900 px-3 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase shadow-sm border border-slate-200">
                  {item.board}
                </span>

                {/* Info Text Stacked Bottom-Left */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold tracking-tight mb-0.5">
                    {item.class}
                  </h3>
                  <p className="text-slate-300 text-xs font-medium">
                    {item.subjects.length} Specialized Core Subjects
                  </p>
                </div>
              </div>

              {/* Flex Content Box (Auto fills spacing seamlessly) */}
              <div className="flex flex-col flex-1 p-5">
                {/* Subject Badges (Unified grid layout look) */}
                <div className="flex flex-wrap gap-1.5 mb-6 min-h-[56px] items-start content-start">
                  {item.subjects.map((subject, i) => (
                    <span
                      key={i}
                      className="bg-slate-50 text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded border border-slate-200/60 tracking-wide"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                {/* Features Checklist */}
                <div className="space-y-2.5 mb-6 text-sm text-slate-600 font-medium border-t border-slate-50 pt-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold">
                      ✓
                    </span>
                    Expert Senior Faculty
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold">
                      ✓
                    </span>
                    Weekly Rigorous Evaluation Tests
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold">
                      ✓
                    </span>
                    Premium Study Notes & Sheets
                  </div>
                </div>

                {/* Action CTA Buttons (Sticky at bottom of card) */}
                <div className="mt-auto flex gap-2.5">
                  <Link
                    to={`/class/${item.class.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex-1 text-center py-2.5 text-xs font-bold tracking-wider uppercase rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => whatsappMsg(item.class)}
                    className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold tracking-wider uppercase rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition shadow-sm"
                  >
                    {/* Simplified SVG WhatsApp Icon */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4 0 11.973 0c3.184.001 6.177 1.242 8.426 3.496 2.248 2.253 3.487 5.244 3.484 8.425-.004 6.625-5.343 11.974-11.914 11.974-2.005-.001-3.975-.51-5.729-1.479L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.428 2.016 13.96 1.002 11.98 1.002c-5.437 0-9.863 4.37-9.867 9.801-.001 1.744.471 3.447 1.365 4.954l-.999 3.647 3.734-.972l.044.025z" />
                    </svg>
                    Chat
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
