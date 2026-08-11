import { Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import {ArrowDownRight,ArrowRight,MousePointer2,} from "lucide-react";
import {easeSoft,Reveal,StaggerGroup,staggerChild,} from "../components/motion-primitives";

const headline = [
  "Turning "," Code Into","Engaging Experiences.","\n"
];

const marquee = [
  "React", "TypeScript","JavaScript","Tailwind","HTML","GitHub","CSS",
];

const features = [
  {
    title: "Frontend Development",
    body:
      "Building modern, responsive interfaces with React, TypeScript and reusable components.",
  },
  {
    title: "UI & Interaction",
    body:
      "Creating smooth animations, intuitive interactions and polished experiences with Framer Motion and CSS.",
  },
  {
    title: "Responsive Design",
    body:
      "Designing websites that work smoothly across desktops, tablets and mobile devices.",
  },
  {
    title: "React Applications",
    body:
      "Developing component-based React applications with clean structure, reusable logic and modern development practices.",
  },
  {
    title: "JavaScript Development",
    body:
      "Building interactive web experiences using JavaScript, DOM manipulation, events and modern ES6+ features.",
  },
  {
    title: "Modern Web Interfaces",
    body:
      "Turning ideas into visually polished websites with modern layouts, animations, gradients and interactive elements.",
  },
];

export default function Home() {
  const { scrollY } = useScroll();

  const parallax = useTransform(
    scrollY,
    [0, 600],
    [0, 120]
  );

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <>
      {/*  HERO  */}
      <section className="section-shell pt-28 ">

        {/* Projects Button */}
        <Reveal y={12}>
          <span
            onClick={handleClick}
            className="glass-panel inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-accent px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Click to see projects.
          </span>
        </Reveal>


        {/* Heading */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
              },
            },
          }}
          className="mt-8 text-4xl leading-[1.15] font-semibold sm:text-6xl md:text-7xl">
          {headline.map((line, i) => (
          <span
            key={line}
            className="block py-1"
          >
            <motion.span
              className={i === 2 ? "block text-gradient" : "block"}
              variants={{
                hidden: {
                  y: "100%",
                },
                show: {
                  y: "0%",
                  transition: {
                    duration: 0.9,
                    ease: easeSoft,
                  },
                },
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
        </motion.h1>


        {/* Description */}
        <Reveal delay={0.5}>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm shahzaib — I design and engineer product
            experiences where motion carries meaning.
          </p>
        </Reveal>


        {/* Buttons */}
        <Reveal delay={0.21}>
          <div className="mt-10 flex flex-wrap items-center gap-4">

            {/* Projects */}
            <Link
              to="/projects"
              className="group flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
            >
              View selected work

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>


            {/* Contact */}
            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105" >
              Any Ideas
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>
        </Reveal>


        {/* Scroll */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-20 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          <MousePointer2 size={14} />

          Scroll

          <ArrowDownRight size={14} />
        </motion.div>

      </section>


      {/*  MARQUEE  */}
      <section className="overflow-hidden border-y border-border py-6">

        <motion.div
          animate={{
            x: ["0%", "-42%"],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-10 pr-10"
        >
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display text-2xl font-semibold text-muted-foreground/50"
            >
              {item}

              <span className="text-accent">
                ◆
              </span>
            </span>
          ))}
        </motion.div>

      </section>


      {/*  FEATURES  */}
      <section className="section-shell">

        {/* Parallax Element */}

        <motion.div
          style={{
            y: parallax,
          }}
          className="pointer-events-none absolute"
        />


        {/* Feature Cards */}
        <StaggerGroup className="grid gap-6 md:grid-cols-3">

          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={staggerChild}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.4,
                ease: easeSoft,
              }}
              className="glass-panel rounded-3xl p-8">

              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.body}
              </p>

            </motion.article>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}