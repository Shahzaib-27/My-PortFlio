import {Link,} from "react-router-dom";
import {  motion } from "motion/react";
import { ArrowUp, 
  // Github, Linkedin, 
  // Instagram,
    } from "lucide-react";

import { FaGithub,FaLinkedin,FaInstagram ,FaMailBulk  } from "react-icons/fa";
import { SiUpwork   } from "react-icons/si";

import { Reveal } from "./motion-primitives";

const socials = [
  { icon: SiUpwork, label: "Upwork", href: "https://www.upwork.com/freelancers/~01e277f18df9851dbb" },
  { icon: FaGithub , label: "GitHub", href: "https://github.com/Shahzaib-27" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shahzaib-shahid-924172402/" },
  { icon: FaInstagram   , label: "I", href: "https://www.instagram.com/shahzaibs_10/" },
  { icon: FaMailBulk, label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=Shahzaibshahidr10@gmail.com" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border ">
      <div className="blob top-24 left-1/3 h-64 w-64 bg-primary "/>
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 ">
        <Reveal>
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
                Available for work
              </p>
              <h3 className="mt-4 max-w-md text-3xl font-semibold sm:text-4xl">
                Let's build something worth <span className="text-gradient">remembering</span>.
              </h3>
              <Link
                to="/contact"
                className="link-underline mt-6 inline-block text-sm text-muted-foreground hover:text-foreground "
              >
                Shahzaibshahidr10@gamil.com
              </Link>
            </div>

            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -8, rotate: -25 }}
                  transition={{ duration: 0.35 ,ease:"easeOut"}}
                  className="glass-panel rounded-full p-3 bg-gradient-accent text-primary-foreground cursor-pointer" 
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row ">
          <p>© {new Date().getFullYear()} Shahzaib Shahid. ALL Right Resevered.</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 bg-gradient-accent text-primary-foreground cursor-pointer font-bold"
          >
            Back to top <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
