import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Suryank Technologies",
    period: "Feb 2026 – Present",
    type: "Full-Time · Remote",
    current: true,
    bullets: [
      "Working on production-grade applications and live client projects as a full-time engineer.",
      "Integrated multiple broker APIs including Angel One, Upstox, Zerodha, and Groww to enable seamless multi-broker trading within a unified platform.",
      "Implemented real-time market data streaming using WebSocket connections to continuously receive OHLC and LTP updates with low latency.",
      "Designed and developed an end-to-end automated trading bot that manages broker connectivity, streams live market data, applies strategy logic, and executes trades in real time with built-in reliability safeguards.",
    ],
    stack: ["Python", "WebSocket", "REST APIs", "Trading APIs", "Django"],
  },
  {
    role: "Software Engineer Intern",
    company: "Suryank Technologies",
    period: "Apr 2025 – Jan 2026",
    type: "Internship · Remote",
    current: false,
    bullets: [
      "Collaborated on HubSpot integration tasks, including form handling, custom script development, and CRM object updates.",
      "Contributed to live client projects using Django, Flask and HubSpot.",
      "Reviewed code, identified bugs, and implemented efficient solutions to improve application stability.",
      "Worked with Python-based frameworks to build and connect RESTful APIs.",
    ],
    stack: ["Django", "Flask", "HubSpot", "Python", "REST APIs"],
  },
];

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#0d0d14]">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="font-mono text-[#4ade80] text-sm tracking-widest mb-3">
            02. EXPERIENCE
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-16 leading-tight">
            Where I've <span className="text-gradient">worked</span>
          </h2>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#22c55e] via-[#22c55e30] to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <motion.div whileHover={{ x: 4 }} className="relative md:pl-20">
                  <div className="hidden md:flex absolute left-5 top-6 w-6 h-6 rounded-full border-2 border-[#22c55e] bg-[#0a0a0f] items-center justify-center z-10">
                    <div
                      className={`w-2 h-2 rounded-full ${exp.current ? "bg-[#4ade80] animate-pulse" : "bg-[#22c55e50]"}`}
                    />
                  </div>

                  <div
                    className={`border rounded-xl p-6 transition-all duration-300 ${
                      exp.current
                        ? "border-[#22c55e40] bg-[#22c55e08] hover:border-[#22c55e70]"
                        : "border-[#ffffff10] bg-[#111118] hover:border-[#22c55e30]"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display font-bold text-xl text-white">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="font-mono text-xs bg-[#22c55e20] text-[#4ade80] border border-[#22c55e40] px-2 py-0.5 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-[#4ade80] font-semibold">
                          <Briefcase size={14} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1.5 text-[#ffffff50] font-mono text-xs justify-end">
                          <Calendar size={12} />
                          {exp.period}
                        </div>
                        <div className="text-[#ffffff35] font-mono text-xs mt-1">
                          {exp.type}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-[#ffffff65] text-sm leading-relaxed"
                        >
                          <span className="text-[#4ade80] mt-1 flex-shrink-0">
                            ▸
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs text-[#4ade80] bg-[#22c55e10] px-2.5 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
