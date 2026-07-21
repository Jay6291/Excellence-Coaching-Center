import React from "react";
import { motion } from "framer-motion";

import Img1 from "../assets/amit1sir.jpg";
import Img2 from "../assets/EX1.jpeg";
import Img3 from "../assets/EX2.jpeg";
import Img4 from "../assets/EX3.jpeg";
import Img5 from "../assets/EX4.jpeg";
import Img6 from "../assets/EX6.jpeg";
import Img7 from "../assets/shivamsir.jpeg";
import Img8 from "../assets/EX7.jpeg";
import Img9 from "../assets/EX8.jpeg";
import Img10 from "../assets/EX10.jpeg";
import Img11 from "../assets/EX11.jpeg";
import Img12 from "../assets/ambikasir.jpeg";
import Img13 from "../assets/EX9.jpeg";
import Img14 from "../assets/ajaysir.jpg";
import Img15 from "../assets/EX5.jpeg";

const galleryData = [
  {
    id: 1,
    src: Img1,
    title: "Library Session",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    id: 2,
    src: Img2,
    title: "Researching Books",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 3,
    src: Img3,
    title: "Campus Life",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 4,
    src: Img4,
    title: "Art & Culture Gallery",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 5,
    src: Img5,
    title: "Expert Lectures",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 6,
    src: Img6,
    title: "Interactive Smart Classes",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 7,
    src: Img7,
    title: "Graduation Success",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 8,
    src: Img8,
    title: "Excellence Achievers",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    id: 9,
    src: Img9,
    title: "Group Discussions",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 10,
    src: Img10,
    title: "Mentorship Program",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 11,
    src: Img11,
    title: "Self-Study Zone",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    id: 12,
    src: Img12,
    title: "Team Building Activities",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 13,
    src: Img13,
    title: "Bright Futures",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 14,
    src: Img14,
    title: "Deep Thinking",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 15,
    src: Img15,
    title: "Digital Learning",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const Gallery = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-semibold tracking-wide uppercase text-sm"
          >
            Our Memories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900"
          >
            Excellence Coaching Center Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-gray-500"
          >
            A glimpse into our classrooms, library, achievements, and the
            vibrant campus life.
          </motion.p>
        </div>

        {/* Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]"
        >
          {galleryData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className={`relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer ${item.colSpan} ${item.rowSpan}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-blue-300 text-sm mt-1">
                  Excellence Coaching Center
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
