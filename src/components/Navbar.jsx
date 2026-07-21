import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/amitlogo1.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[999] bg-[#07111F]/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* ================= Premium Logo Container ================= */}
          <Link to="/" className="flex items-center gap-4 group.">
            <div className="relative flex items-center justify-center">
              <img
                src={logoImg}
                alt="Logo"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-400 shadow-lg shadow-amber-500/30 transition-all duration-500 group-hover:scale-110"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white animate-pulse"></span>
            </div>

            <div className="flex flex-col">
              <h2
                className="font-extrabold text-2xl text-white"
                style={{
                  fontFamily: "'Plus Jakarta Sans','Inter',sans-serif",
                }}
              >
                Excellence <span className="text-amber-400">Coaching</span>
              </h2>
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-300 font-semibold">
                Motigarpur • Sultanpur
              </p>
            </div>
          </Link>

          {/* ================= Desktop Navigation Links ================= */}
          <div className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl border border-amber-400/20 shadow-lg shadow-amber-500/10">
            {links.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 text-slate-900 shadow-lg shadow-amber-500/30"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* ================= Desktop Call To Action / Right Side ================= */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <button className="relative overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 px-7 py-3 font-bold text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(251,191,36,0.45)]">
                Enroll Now
              </button>
            </Link>
          </div>

          {/* ================= Mobile Menu Hamburger Button ================= */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl focus:outline-none transition-colors duration-300 relative z-[1000]"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span
                className={`h-0.5 rounded-full transition-all duration-300 transform origin-right ${
                  scrolled || menuOpen ? "bg-amber-400" : "bg-white"
                } ${menuOpen ? "w-6 -rotate-45 translate-y-[-1px] -translate-x-[2px]" : "w-6"}`}
              ></span>
              <span
                className={`h-0.5 rounded-full transition-all duration-300 ${
                  scrolled || menuOpen ? "bg-slate-900" : "bg-white"
                } ${menuOpen ? "w-0 opacity-0" : "w-4"}`}
              ></span>
              <span
                className={`h-0.5 rounded-full transition-all duration-300 transform origin-right ${
                  scrolled || menuOpen ? "bg-slate-900" : "bg-white"
                } ${menuOpen ? "w-6 rotate-45 translate-y-[1px] -translate-x-[2px]" : "w-5"}`}
              ></span>
            </div>
          </button>
        </nav>

        {/* ================= Mobile Fullscreen/Dropdown Menu ================= */}
        <div
          className={`lg:hidden fixed inset-0 w-full h-screen bg-white/95 backdrop-blur-xl transition-all duration-500 ease-in-out z-[998] flex flex-col justify-center px-8 ${
            menuOpen
              ? "opacity-150 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-10"
          }`}
        >
          <div className="flex flex-col gap-4 text-center">
            {links.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-2xl font-bold tracking-wide rounded-2xl transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-amber-500 scale-105"
                    : "text-slate-800 hover:text-amber-500"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-8 mx-auto w-full max-w-sm"
            >
              <button className="w-full py-4 rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 text-slate-950 font-extrabold text-base shadow-xl shadow-orange-500/20 active:scale-95 transition-all">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
