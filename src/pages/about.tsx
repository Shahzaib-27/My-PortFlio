import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import {
  Reveal,
  SectionHeading,
  StaggerGroup,
  staggerChild,
  easeSoft,
} from "../components/motion-primitives";

function About() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [40, -40]
  );

  const aboutContent = [
    "I am a Front-End Web Developer who builds modern, responsive, and user-friendly websites. I specialize in creating clean and visually appealing user interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS.",

    "My core skills include:",

    "• Responsive Web Design",

    "• Front-End Development with React",

    "• JavaScript and React Applications",

    "• UI Development with Tailwind CSS",

    "• Clean, Organized, and Maintainable Code",

    "I am constantly learning new technologies and improving my development skills to deliver high-quality work. I value clear communication, meeting deadlines, and creating solutions that align with project requirements.",

    "I am ready to help improve an existing web UI. I am ready to turn your ideas into a polished web experience.",
  ];

  const profileInfo = [
    ["From", "Pakistan, available remotely"],
    ["Focus", "Frontend development, UI & interaction"],
    [
      "Currently",
      "Building projects & improving my skills, also learning backend concepts",
    ],
    ["Future", "Full Stack Developer"],
  ];

  const stats = [
    {
      to: 5,
      suffix: "+",
      label: "Web Projects",
    },
    {
      to: 4,
      suffix: "+",
      label: "Frontend Technologies",
    },
    {
      to: 10,
      suffix: "+",
      label: "React Projects",
    },
    {
      to: 100,
      suffix: "%",
      label: "Passion for Web",
    },
  ];

  return (
    <>
      {/* About Heading */}
      <section className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Building modern web experiences."
          description="A little more about me, my development journey, and the technologies I use to create modern web experiences."
        />

        {/* About Content */}
        <div className="mt-16 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Image */}
          <div
            ref={ref}
            className="relative"
          >
            <motion.div
              style={{ y }}
              className="relative"
            >
              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotate: -1.5,
                }}
                transition={{
                  duration: 0.6,
                  ease: easeSoft,
                }}
                className="glass-panel overflow-hidden rounded-4xl p-2">
                <img
                  src="/portrait.jpg"
                  alt="Portrait of Shahzaib Shahid"
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="h-full w-full rounded-[1.6rem] object-cover 
                  "/>
              </motion.div>

              {/* Glow */}
              <div className="blob -bottom-10 left-10 h-40 w-40 bg-accent" />
            </motion.div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            {aboutContent.map((p, i) => (
              <Reveal
                key={`${p}-${i}`}
                delay={i * 0.01}
              >
                <p className="text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              </Reveal>
            ))}

            {/* Profile Information */}
            <Reveal delay={0.3}>
              <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
                {profileInfo.map(([key, value]) => (
                  <div key={key}>
                    <dt className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary">
                      {key}
                    </dt>

                    <dd className="mt-2 text-sm text-muted-foreground">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-shell pt-10">
        <StaggerGroup className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat,index) => (
            <motion.div
              key={index}
              variants={staggerChild}
              whileHover={{ y: -7 }}
              className="glass-panel rounded-3xl p-8 "
            >
              <span className="text-gradient pt-10">
                {/* Statistics Value */}
                <span className="text-gradient text-5xl font-mono">
                  {stat.to}
                  {stat.suffix}
                </span>
              </span>

              <p className="mt-5 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}

export default About;