import { motion } from "framer-motion";

const subjectsData = [
  {
    title: "Mathematics",
    desc: "Build strong problem solving skills and mathematical concepts.",
    color: "from-blue-500 to-indigo-600",
    bgAccent: "bg-blue-500/10",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 002-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Science",
    desc: "Explore the world of experiments, concepts and innovation.",
    color: "from-emerald-500 to-teal-600",
    bgAccent: "bg-emerald-500/10",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    title: "English",
    desc: "Enhance grammar, vocabulary, reading, writing and communication.",
    color: "from-purple-500 to-deep-purple-600",
    bgAccent: "bg-purple-500/10",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Hindi",
    desc: "Learn Hindi language, literature and develop communication skills.",
    color: "from-amber-500 to-orange-600",
    bgAccent: "bg-amber-500/10",
    icon: <span className="text-white text-xl font-bold font-serif">अ</span>,
  },
  {
    title: "Social Science",
    desc: "Understand the world through history, geography, civics and more.",
    color: "from-cyan-500 to-blue-600",
    bgAccent: "bg-cyan-500/10",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2 2 0 002-2V7.5A2.5 2.5 0 0016.5 5h-.059a2 2 0 01-1.826-1.556l-.11-.44a2 2 0 00-1.94-1.515h-1a2 2 0 00-1.94 1.515l-.11.44A2 2 0 016.742 3.935z"
        />
      </svg>
    ),
  },
  {
    title: "Computer Science",
    desc: "Learn coding, algorithms, programming and digital technologies.",
    color: "from-blue-600 to-indigo-700",
    bgAccent: "bg-blue-600/10",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Physics",
    desc: "Discover the laws of nature and understand how the universe works.",
    color: "from-rose-500 to-pink-600",
    bgAccent: "bg-rose-500/10",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 11H3m14 4.5l-.7-.7M7.4 7.4l-.7-.7m0 10.6l.7-.7m10.6-10.6l.7-.7M9 12a3 3 0 116 0 3 3 0 01-6 0z"
        />
      </svg>
    ),
  },
  {
    title: "Chemistry",
    desc: "Study matter, reactions and chemical principles that shape our world.",
    color: "from-light-green-500 to-green-600",
    bgAccent: "bg-green-500/10",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5l3 3" />
      </svg>
    ),
  },
  {
    title: "Biology",
    desc: "Explore living organisms and the science of life in depth.",
    color: "from-purple-600 to-indigo-700",
    bgAccent: "bg-indigo-600/10",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.381-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    title: "Accountancy",
    desc: "Learn accounting principles, financial statements and analytical skills.",
    color: "from-amber-600 to-orange-700",
    bgAccent: "bg-orange-600/10",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Business Studies",
    desc: "Understand business concepts, management and real-world strategies.",
    color: "from-blue-600 to-sky-700",
    bgAccent: "bg-blue-600/10",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Economics",
    desc: "Examine how economies work and how decisions affect our world.",
    color: "from-purple-600 to-fuchsia-700",
    bgAccent: "bg-fuchsia-600/10",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

// Stagger configuration for parent elements
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

export default function OurSubjects() {
  return (
    <div className="bg-[#050C1A] min-h-screen text-white py-20 px-4 relative overflow-hidden">
      {/* Decorative Blur Background Circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-900/15 blur-[150px] pointer-events-none" />

      {/* HEADER ZONE */}
      <div className="max-w-4xl mx-auto text-center mb-7 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-2xl font-black tracking-tight uppercase"
        >
          OUR{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            SUBJECTS
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-slate-400 mt-3 text-sm md:text-base tracking-wide font-medium"
        >
          Comprehensive Learning for Classes 6 to 12 (CBSE & UP Board)
        </motion.p>

        {/* Sleek Underline Accent from the reference picture */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-5 h-[1.5px] bg-blue-500/60 mx-auto relative flex items-center justify-center"
        >
          <span className="absolute bg-[#050C1A] px-2 text-slate-400 text-[10px]">
            🎓
          </span>
        </motion.div>
      </div>

      {/* CONTENT GRID CONTAINER */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
      >
        {subjectsData.map((subject, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group relative bg-white rounded-2xl p-6 text-slate-900 overflow-hidden flex flex-col justify-between min-h-[190px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
          >
            {/* Soft, beautiful corner gradient blobs matching image_954005.jpg layout */}
            <div
              className={`absolute bottom-0 left-0 w-32 h-32 rounded-tr-full bg-gradient-to-tr ${subject.color} opacity-15 blur-lg pointer-events-none group-hover:opacity-25 transition-opacity duration-300`}
            />

            <div>
              {/* Icon Row & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${subject.color} shadow-md shadow-slate-200 shrink-0 transform group-hover:scale-105 transition-transform duration-300`}
                >
                  {subject.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold tracking-tight text-slate-900">
                    {subject.title}
                  </h3>
                  <div className="w-6 h-[2px] bg-slate-200 mt-1 group-hover:w-10 transition-all duration-300" />
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-xs leading-relaxed font-medium pr-2">
                {subject.desc}
              </p>
            </div>

            {/* Tiny Premium Detail Interactive Action Arrow */}
            <div className="flex justify-end mt-4">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center border border-slate-200 text-slate-400 group-hover:border-slate-800 group-hover:text-slate-900 transition-all duration-300`}
              >
                <svg
                  className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
