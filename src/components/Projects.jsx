import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "NextJenJobs",
    description:
      "A full-featured job application platform with React.js frontend and Spring Boot backend. Features JWT-based authentication, role-based access control, an admin panel for job management, and a user module for applications.",
    stack: ["React.js", "Java", "Spring Boot", "SQL", "JWT"],
    highlights: [
      "JWT Auth & RBAC",
      "Admin Panel",
      "REST API",
      "SQL Optimization",
    ],
    featured: true,
    github: "https://github.com/Harry212002/NextJenJobs.git",
    live: "https://github.com/Harry212002/NextJenJobs.git",
  },
  {
    title: "Make My Resume",
    description:
      "A resume builder platform where users log in, choose a default resume theme, fill in details, and download the resulting document as a PDF. Built with a Node.js/Express backend and MongoDB.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    highlights: [
      "PDF Generation",
      "Theme Selection",
      "JWT Auth",
      "Form Validation",
    ],
    featured: true,
    github: "https://github.com/Harry212002/ResumeMaker.git",
    live: "https://github.com/Harry212002/ResumeMaker.git",
  },
  {
    title: "TaskNest",
    description:
      "A full-stack task management web app for creating, managing, and tracking tasks with prioritization, deadlines, and real-time updates. Includes task reminders, dynamic filtering, and progress tracking.",
    stack: ["Python", "Django", "PostgreSQL", "HTML/CSS", "Bootstrap"],
    highlights: [
      "Task Reminders",
      "Dynamic Filtering",
      "Progress Tracking",
      "Responsive UI",
    ],
    featured: false,
    github: "https://github.com/Harry212002/NextJenJobs.git",
    live: "https://github.com/Harry212002/NextJenJobs.git",
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

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-[#4ade80] text-sm tracking-widest mb-3">
            03. PROJECTS
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
            Things I've <span className="text-gradient">built</span>
          </h2>
          <p className="text-[#ffffff50] text-base mb-16 max-w-lg">
            A selection of projects I've worked on — each one pushing my skills
            further.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, borderColor: "#22c55e50" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`group h-full flex flex-col border rounded-xl p-6 bg-[#111118] transition-colors duration-300 relative overflow-hidden ${
                  project.featured ? "border-[#22c55e30]" : "border-[#ffffff10]"
                }`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <Folder className="text-[#4ade80]" size={28} />
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.15, color: "#4ade80" }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#ffffff40] transition-colors"
                          aria-label="GitHub"
                        >
                          <Github size={18} />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.15, color: "#4ade80" }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#ffffff40] transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-[#4ade80] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#ffffff55] text-sm leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-[10px] font-mono text-[#4ade80] bg-[#22c55e12] border border-[#22c55e20] px-2 py-0.5 rounded-full"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] text-[#ffffff40]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
