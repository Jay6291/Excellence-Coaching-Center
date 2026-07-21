import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/918737960180"
      target="_blank"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg text-2xl z-50 hover:scale-110 transition"
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsApp;
