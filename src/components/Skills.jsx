import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    icon: "{ }",
    skills: ["Python", "Java", "JavaScript", "HTML/CSS", "SQL", "PostgreSQL"],
  },
  {
    category: "Frameworks",
    icon: "⚙",
    skills: [
      "Django",
      "Flask",
      "React.js",
      "FastAPI",
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "⚒",
    skills: ["Docker", "Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA"],
  },
  {
    category: "Integrations",
    icon: "⇌",
    skills: [
      "HubSpot CRM",
      "Angel One API",
      "Upstox API",
      "Zerodha API",
      "Groww API",
      "WebSocket",
    ],
  },
];

const allSkills = [
  "Python",
  "Django",
  "React.js",
  "WebSocket",
  "PostgreSQL",
  "Docker",
  "Java",
  "Flask",
  "MongoDB",
  "HubSpot",
  "REST APIs",
  "JWT",
  "Git",
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

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-[#4ade80] text-sm tracking-widest mb-3">
            04. SKILLS
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-16 leading-tight">
            My <span className="text-gradient">toolkit</span>
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, borderColor: "#22c55e40" }}
                className="border border-[#ffffff10] bg-[#111118] rounded-xl p-5 h-full transition-colors duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[#4ade80] text-lg">
                    {group.icon}
                  </span>
                  <h3 className="font-display font-semibold text-white text-sm tracking-wide">
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-[#ffffff60] text-sm"
                    >
                      <span className="w-1 h-1 bg-[#22c55e] rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Animated skill cloud */}
        <FadeIn delay={0.3}>
          <div className="border border-[#22c55e20] rounded-xl p-6 bg-[#22c55e05]">
            <p className="font-mono text-xs text-[#4ade80] tracking-widest mb-5 text-center">
              ALL TECHNOLOGIES
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {allSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.04,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: "#4ade80",
                    borderColor: "#22c55e70",
                  }}
                  className="font-mono text-sm text-[#ffffff60] border border-[#ffffff15] px-4 py-1.5 rounded-full cursor-default transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Certifications */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Java Full Stack Development",
              issuer: "Mindscript Tech",
              year: "2024",
              link: "https://your-certificate-link.com/java-fullstack",
            },
            {
              title: "Intro to HTML, CSS & JavaScript",
              issuer: "IBM",
              year: "2023",
              link: "https://coursera.org/share/b65e3cfbe88e55b54e7c2c42e598b074",
            },
            {
              title: "Developing Front-End Apps with React",
              issuer: "IBM",
              year: "2024",
              link: "https://coursera.org/share/138eef7b2d24d49f62d440cf9e944d7a",
            },
          ].map((cert, i) => (
            <FadeIn key={cert.title} delay={i * 0.1}>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ borderColor: "#22c55e40" }}
                  className="border border-[#ffffff10] bg-[#111118] rounded-xl p-4 flex items-center gap-4 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#22c55e15] border border-[#22c55e30] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#4ade80] font-mono text-xs">✓</span>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm text-white">
                      {cert.title}
                    </div>
                    <div className="font-mono text-xs text-[#ffffff40] mt-0.5">
                      {cert.issuer} · {cert.year}
                    </div>
                  </div>
                </motion.div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
