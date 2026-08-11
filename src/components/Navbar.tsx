import { Link, useLocation } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const easeSoft = [0.22, 1, 0.36, 1] as const;

const links = [
  { to: "/home", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  // Detect page scroll
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (value) => {
      setScrolled(value > 24);
    });

    return () => unsubscribe();
  }, [scrollY]);

  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // Handle navigation click
  const handleNavClick = (to: string) => {
    setOpen(false);

    // If clicking the page you're already on
    if (pathname === to) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "linear",
      }}
      className="fixed inset-x-0 top-0 z-40 backdrop-blur-[5px]"
    >
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        {/* Logo */}
        <Link
          to="/home"
          onClick={() => handleNavClick("/home")}
          className="rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-bold text-black"
        >
          Shahzaib
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden items-center gap-2 rounded-full px-2 py-2 transition-all duration-200 md:flex ${
            scrolled
              ? "glass-panel bg-gradient-accent"
              : "bg-gradient-accent border border-transparent"
          }`}
        >
          {links.map((link) => {
            const active = pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`relative rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  active
                    ? "text-white"
                    : "text-primary-foreground"
                }`}
              >
                {/* Active Link Background */}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-black/90"
                    transition={{
                      duration: 0.6,
                      ease: easeSoft,
                    }}
                  />
                )}

                {/* Link Text */}
                <span className="relative z-10">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Let's Talk */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            onClick={() => handleNavClick("/contact")}
            className="rounded-xl bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:scale-110"
          >
            Let's talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="glass-panel rounded-full bg-gradient-accent p-2.5 text-primary-foreground md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.4,
              ease: easeSoft,
            }}
            className="glass-panel mx-6 overflow-hidden rounded-2xl md:hidden"
          >
            <div className="flex flex-col p-4">
              {links.map((link) => {
                const active = pathname === link.to;

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => handleNavClick(link.to)}
                    className={`m-1 rounded-xl bg-gradient-accent px-5 py-4 text-sm font-bold ${
                      active
                        ? "text-white"
                        : "text-primary-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const width = useTransform(
    scrollYProgress,
    (value) => `${value * 110}%`
  );

  return (
    <motion.div
      style={{ width }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-accent"
    />
  );
}