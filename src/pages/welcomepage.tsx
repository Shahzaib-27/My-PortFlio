import { ArrowRight } from "lucide-react";
import { motion,easeOut  } from "motion/react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <motion.main 
    initial={{ 
        y: -1000 
    }}
    animate={{ 
        y: 0 
    }}
    transition={{
        duration:0.5,
        ease:easeOut
    }}
    className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background Glow */}
      <div className="blob left-[-10%] top-[10%] h-80 w-80 bg-cyan-400" />
      <div className="blob bottom-[-10%] right-[-5%] h-96 w-96 bg-lime-400" />

      {/* Content */}
      <section className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        {/* Portfolio */}
        <motion.p 
        initial={{ 
        y: -1000 
        }}
        animate={{ 
            y: 0 
        }}
        transition={{
            duration:0.6,
            ease:easeOut
        }}
        className="mb-7 font-mono text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
          Portfolio
        </motion.p>

        {/* Name */}
        <motion.h1 
        initial={{ 
        y: -1000 
            }}
            animate={{ 
                y: 0 
            }}
            transition={{
                duration:0.7,
                ease:easeOut
            }}
        className="text-gradient text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          Shahzaib Shahid
        </motion.h1>

        {/* Description */}
        <motion.p 
        initial={{ 
        y: -1000 
        }}
        animate={{ 
            y: 0 
        }}
        transition={{
            duration:0.8,
            ease:easeOut
        }}
        className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Frontend developer portfolio showcasing React, JavaScript,
          <br className="hidden sm:block" />
          TypeScript, Tailwind CSS and modern web projects.
        </motion.p>

        {/* Enter Button */}
            <motion.section
            initial={{ 
                y: -1000 
                }}
                animate={{ 
                    y: 0 
                }}
                transition={{
                    duration:0.9,
                    ease:easeOut
                }}
            >
        
            <Link
            to="/home"
            className="group mt-10 flex items-center gap-3 rounded-full bg-gradient-accent px-7 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 
            hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
            <button 
                type="submit"
            className="bg-linear-gradient(90deg,rgba(2, 0, 38, 1) 0%, rgba(9, 9, 121, 1) 39%, rgba(0, 212, 255, 1) 100%)">
                Enter site
            </button>
            <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
            />
            </Link>
        </motion.section>
      </section>
    </motion.main>
  );
};

export default WelcomePage;