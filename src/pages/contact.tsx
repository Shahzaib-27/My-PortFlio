import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { Check, Loader2, MapPin, Send } from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";

import { SiUpwork } from "react-icons/si";

import {
  Reveal,
  StaggerGroup,
  staggerChild,
  easeSoft,
} from "../components/motion-primitives";

// =========================
// SOCIAL LINKS
// =========================

const socials = [
  {
    icon: SiUpwork,
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01e277f18df9851dbb",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Shahzaib-27",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shahzaib-shahid-924172402/",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/shahzaibs_10/",
  },
  {
    icon: FaMailBulk,
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=Shahzaibshahidr10@gmail.com",
  },
];

// =========================
// INPUT FIELD
// =========================

function Field({
  id,
  label,
  type,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const [focused, setFocused] = useState(false);

  const lifted = focused || value.length > 0;

  return (
    <div className="relative">
      <motion.label
        htmlFor={id}
        animate={{
          y: lifted ? -2 : 40,
          scale: lifted ? 0.99 : 1,
          opacity: lifted ? 1 : 0.7,
        }}
        transition={{
          duration: 0.25,
          ease: easeSoft,
        }}
        className="pointer-events-none absolute left-4 origin-left text-sm text-muted-foreground"
      >
        {label}
      </motion.label>

      <input
        id={id}
        name={id}
        type={type}
        value={value}
        required
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        className="mt-5 w-full rounded-2xl border border-input bg-transparent p-5 text-sm outline-none transition-colors focus:border-primary"
      />

      <motion.span
        animate={{
          scaleX: focused ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: easeSoft,
        }}
        className="absolute bottom-0 left-4 h-0.5 w-[calc(100%-2rem)] origin-left rounded-full bg-gradient-accent"
      />
    </div>
  );
}

// CONTACT PAGE
export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  // =========================
  // FORM SUBMIT
  // =========================

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state !== "idle") {
      return;
    }

    setState("loading");

    try {
      const form = e.currentTarget;

      const response = await fetch("https://formspree.io/f/xojkwajk", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setState("done");

      setValues({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setState("idle");
      }, 300);
    } catch (error) {
      console.error(error);

      setState("idle");

      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* MAIN CONTACT SECTION */}
      <div className="mt-20 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] m-10 p-5 pt-5">

        {/* CONTACT FORM*/}
        <Reveal delay={0.1}>
          <form
            onSubmit={submit}
            className="glass-panel space-y-5 rounded-4xl p-8 m-4"
          >
            {/* Form Heading */}

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                Send a message
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Tell me about your project.
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                I'll get back to you as soon as possible.
              </p>
            </div>

            {/* =========================
                NAME
            ========================= */}

            <Field
              id="name"
              label="Your name"
              type="text"
              value={values.name}
              onChange={(value) =>
                setValues((prev) => ({
                  ...prev,
                  name: value,
                }))
              }
            />

            {/* =========================
                EMAIL
            ========================= */}

            <Field
              id="email"
              label="Email address"
              type="email"
              value={values.email}
              onChange={(value) =>
                setValues((prev) => ({
                  ...prev,
                  email: value,
                }))
              }
            />

            {/* =========================
                MESSAGE
            ========================= */}

            <div className="relative">
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-muted-foreground"
              >
                Your message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={values.message}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-2xl border border-input bg-transparent px-4 py-4 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>

            {/* =========================
                SUBMIT BUTTON
            ========================= */}

            <motion.button
              type="submit"
              disabled={state !== "idle"}
              whileHover={{
                scale: state === "idle" ? 1.03 : 1,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: easeSoft,
              }}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-4 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-70"
            >
              <AnimatePresence mode="wait" initial={false}>
                {/* IDLE */}

                {state === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    className="flex items-center gap-2"
                  >
                    Send message

                    <Send size={15} />
                  </motion.span>
                )}

                {/* LOADING */}

                {state === "loading" && (
                  <motion.span
                    key="loading"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 size={15} className="animate-spin" />

                    Sending...
                  </motion.span>
                )}

                {/* DONE */}

                {state === "done" && (
                  <motion.span
                    key="done"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    className="flex items-center gap-2"
                  >
                    <Check size={15} />

                    Message sent
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </Reveal>

        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="space-y-6 m-4">
          {/* =========================
              LOCATION CARD
          ========================= */}

          <Reveal delay={0.2}>
            <div className="glass-panel relative overflow-hidden rounded-3xl p-8">
              {/* Background */}

              <div className="absolute inset-0 opacity-[0.12] backdrop-blur-[10px]" />

              <div className="relative">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  Available for work
                </p>

                <h3 className="mt-3 flex items-center gap-2 text-xl font-semibold">
                  <MapPin size={18} className="text-accent" />

                  Pakistan · Remote
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Available for frontend development, responsive websites,
                  React applications and modern UI projects.
                </p>
              </div>
            </div>
          </Reveal>

          {/* =========================
              SOCIAL LINKS
          ========================= */}

          <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerChild}
                whileHover={{
                  y: -6,
                  rotate: -5,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.25,
                  ease: easeSoft,
                }}
                className="glass-panel flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-accent py-5 text-primary-foreground transition-colors"
              >
                <Icon size={30} />

                <span className="text-[11px] uppercase tracking-[0.15em]">
                  {label}
                </span>
              </motion.a>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </>
  );
}