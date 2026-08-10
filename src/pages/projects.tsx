import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

import {
  SectionHeading,
  StaggerGroup,
  staggerChild,
} from "../components/motion-primitives";

type Project = {
  title: string;
  category: "Web App" | "E-Commerce" | "UI" | "React App" | "Calculator";
  year: string;
  blurb: string;
  detail: string;
  stack: string[];
  image: string;
  gradient: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Dashboard",
    category: "Web App",
    year: "2026",
    blurb:
      "Modern dashboard interface built with React and TypeScript.",
    detail:
      "A responsive dashboard project focused on creating a clean user interface, reusable components, responsive layouts, and a smooth user experience across different screen sizes.",
    stack: ["React", "TypeScript", "Tailwind CSS","MOTIONS"],
    image: "/projects/dashboard.png",
    gradient:
      "linear-gradient(135deg, oklch(0.82 0.15 190), oklch(0.4 0.1 250))",
    href: "https://dashboard-six-olive-26.vercel.app/",
  },

  {
    title: "Netflix Clone",
    category: "Web App",
    year: "2026",
    blurb:
      "Netflix-inspired streaming interface built with JavaScript.",
    detail:
      "A frontend Netflix clone focused on recreating a modern streaming platform interface with movie sections, responsive layouts, navigation, and an engaging visual design.",
    stack: ["JavaScript", "HTML", "CSS","Tailwind CSS"],
    image: "/projects/NetflixClone.png",
    gradient:
      "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.35 0.08 250))",
    href: "https://my-project-tawny-rho.vercel.app/",
  },

  {
    title: "Careem App Clone",
    category: "Web App",
    year: "2026",
    blurb:
      "Responsive Careem-inspired interface built with React.",
    detail:
      "A Careem-inspired frontend project featuring modern UI components, responsive layouts, CSS Modules, and a mobile-first approach.",
    stack: ["React", "CSS Modules", "JavaScript"],
    image: "/projects/careem.png",
    gradient:
      "linear-gradient(135deg, oklch(0.86 0.19 118), oklch(0.45 0.12 160))",
    href: "https://careem-app-clone.vercel.app/",
  },

  {
    title: "Games Reviews",
    category: "Web App",
    year: "2026",
    blurb:
      "Game review interface built with TypeScript.",
    detail:
      "A game review project focused on presenting game information through a clean and responsive frontend interface while practicing TypeScript and component-based development.",
    stack: ["TypeScript", "React", "CSS", "Tailwind CSS"],
    image: "/projects/games_reviews.png",
    gradient:
      "linear-gradient(135deg, oklch(0.75 0.16 300), oklch(0.82 0.15 190))",
    href: "https://games-reviews-rose.vercel.app/",
  },

  {
    title: "Amazon Clone",
    category: "E-Commerce",
    year: "2026",
    blurb:
      "Amazon-inspired e-commerce frontend interface.",
    detail:
      "A frontend Amazon clone created to practice e-commerce layouts, product interfaces, navigation, responsive design, and reusable UI components.",
    stack: ["JavaScript", "HTML", "CSS"],
    image: "/projects/amazon.png",
    gradient:
      "linear-gradient(135deg, oklch(0.8 0.14 60), oklch(0.86 0.19 118))",
    href: "https://amazon-clone-three-nu-54.vercel.app/",
  },

  {
    title: "GPA Calculator",
    category: "Calculator",
    year: "2026",
    blurb:
      "Simple GPA calculator for calculating academic results.",
    detail:
      "A responsive GPA calculator that allows users to enter course information and calculate their GPA through a simple and easy-to-use interface.",
    stack: ["JavaScript", "HTML", "CSS"],
    image: "/projects/gpa_calculator.png",
    gradient:
      "linear-gradient(135deg, oklch(0.82 0.15 190), oklch(0.45 0.12 250))",
    href: "https://gpa-calculator-pi-five.vercel.app/",
  },

  {
    title: "Login Page",
    category: "UI",
    year: "2026",
    blurb:
      "Clean and responsive login interface.",
    detail:
      "A frontend login page focused on creating a simple, modern and responsive authentication interface with clean styling and user-friendly form elements.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/login.png",
    gradient:
      "linear-gradient(135deg, oklch(0.7 0.2 20), oklch(0.75 0.16 300))",
    href: "https://login-page-seven-plum.vercel.app/",
  },

  {
    title: "Scientific Calculator",
    category: "Calculator",
    year: "2025",
    blurb:
      "Simple calculator built to practice frontend fundamentals.",
    detail:
      "A basic calculator project focused on practicing JavaScript logic, user interactions, HTML structure and CSS styling.",
    stack: ["JavaScript", "HTML", "CSS"],
    image: "/projects/scientificcalculator.png",
    gradient:
      "linear-gradient(135deg, oklch(0.86 0.19 118), oklch(0.45 0.12 160))",
    href: "https://react-calculator-six-neon.vercel.app/",
  },
];

const filters = [
  "All",
  "Web App",
  "E-Commerce",
  "UI",
  "Calculator",
];

function Projects() {
  const [filter, setFilter] =
    useState<(typeof filters)[number]>("All");

  const [open, setOpen] = useState<Project | null>(null);

  const shown = projects.filter(
    (project) =>
      filter === "All" || project.category === filter
  );

  return (
    <section className="section-shell">

      {/* Heading */}
      <SectionHeading
        eyebrow="Projects"
        title="Ideas turned into interactive experiences."
        description={
          "A collection of frontend projects showcasing my skills " +
          "in React, JavaScript, TypeScript, Tailwind CSS, responsive " +
          "design, and modern UI development."
        }
      />

      {/* Filters */}
      <div className="mt-12 flex flex-wrap gap-3">
        {filters.map((f) => {
          const isActive = filter === f;

          return (
            <motion.button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              whileHover={{
                y: -2,
                scale: 1.09,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className={`
                relative cursor-pointer overflow-hidden
                rounded-full border border-border px-5 py-3
                text-sm font-bold transition-colors duration-250
                bg-gradient-accent text-primary-foreground
                ${
                  isActive
                    ? "text-white bg-black"
                    : "text-black"
                }
              `}
            >
              {isActive && (
                <motion.span
                  layoutId="project-filter"
                  className="
                    absolute inset-0 rounded-full
                    m-1 bg-black
                  "
                  transition={{
                    duration: 0.18,
                    ease: "easeOut",
                  }}
                />
              )}

              <span className="relative z-10">
                {f}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <StaggerGroup
        key={filter}
        className="
          mt-10 grid gap-6
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {shown.map((p) => (
          <motion.button
            key={p.title}
            variants={staggerChild}
            onClick={() => setOpen(p)}
            whileHover={{
              y: -8,
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="
              glass-panel group overflow-hidden
              rounded-3xl text-left
            "
          >
            {/* Project Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} project screenshot`}
                loading="lazy"
                className="
                  h-full w-full object-cover
                  transition-transform duration-300
                  ease-out group-hover:scale-105
                "
              />

              {/* Image Gradient */}
              <div
                className="
                  absolute inset-0
                  bg-linear-to-t from-black/60
                  via-transparent to-transparent
                  opacity-60
                "
              />

              {/* Hover Description */}
              <div
                className="
                  absolute inset-0 flex translate-y-full
                  items-end bg-background/85 p-6
                  backdrop-blur-[5px]
                  transition-transform duration-250
                  ease-out group-hover:translate-y-0
                "
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.blurb}
                </p>
              </div>
            </div>

            {/* Project Information */}
            <div
              className="
                flex items-start justify-between
                gap-4 p-6
              "
            >
              <div>
                <h3 className="text-lg font-bold tracking-[1px]">
                  {p.title}
                </h3>

                <p
                  className="
                    mt-1 font-mono text-[11px]
                    uppercase tracking-[0.2em]
                    text-primary
                  "
                >
                  {p.category} · {p.year}
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="
                  text-muted-foreground
                  transition-all duration-150
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-foreground
                "
              />
            </div>
          </motion.button>
        ))}
      </StaggerGroup>

      {/* No Projects */}
      {shown.length === 0 && (
        <div
          className="
            mt-10 rounded-3xl border border-border
            p-10 text-center
          "
        >
          <p className="text-muted-foreground">
            No projects found in this category.
          </p>
        </div>
      )}

      {/* Project Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setOpen(null)}
            className="
              fixed inset-0 z-50 flex items-center
              justify-center bg-background/80 p-6
              backdrop-blur-md
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                glass-panel relative max-h-[90vh]
                w-full max-w-2xl overflow-y-auto
                rounded-3xl
              "
            >

              {/* Modal Image */}
              <div className="relative h-56 w-full overflow-hidden sm:h-72">
                <img
                  src={open.image}
                  alt={`${open.title} project screenshot`}
                  className="h-full w-full object-cover"
                />

                <div
                  className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/60 to-transparent
                  "
                />
              </div>

              {/* Close Button */}
              <motion.button
                type="button"
                aria-label="Close project details"
                onClick={() => setOpen(null)}
                whileHover={{
                  scale: 1.08,
                  rotate: -200,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                className="
                  absolute right-4 top-4
                  rounded-full bg-gradient-accent
                  p-2 text-primary-foreground
                  backdrop-blur-md cursor-pointer
                "
              >
                <X size={18} />
              </motion.button>

              {/* Modal Content */}
              <div className="p-8">

                <p
                  className="
                    font-mono text-[11px]
                    uppercase tracking-[0.2em]
                    text-primary
                  "
                >
                  {open.category} · {open.year}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {open.title}
                </h3>

                <p
                  className="
                    mt-2 text-sm leading-relaxed
                    text-muted-foreground
                  "
                >
                  {open.detail}
                </p>



                  {/* Project Link */}
                  <div className="mt-7 ">
                    <motion.a
                      href={open.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.09,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      transition={{
                        duration: 0.15,
                      }}
                      className="
                        inline-flex items-center
                        justify-center gap-2
                        rounded-full border border-border
                        bg-gradient-accent p-2
                        text-xs font-bold
                        tracking-[1px]
                        text-primary-foreground
                        cursor-pointer
                      ">
                      Click to See Project
                      <ArrowUpRight size={14} />
                    </motion.a>
                  </div>

                {/* Technologies + Project Link */}
                <div className="mt-2 flex flex-wrap gap-2">

                  {open.stack.map((s) => (
                    <motion.span
                      key={s}
                      initial={{
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.15,
                      }}
                      className="
                        mt-7 flex items-center
                        rounded-full border border-border
                        bg-gradient-accent p-2
                        text-xs font-bold
                        tracking-[1px]
                        text-primary-foreground">

                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;