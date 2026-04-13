import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "1+", label: "Broker APIs Integrated" },
  { value: "1+", label: "Production Projects" },
  { value: "7.09", label: "CGPA (BTech)" },
];

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
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

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <p className="font-mono text-[#4ade80] text-sm tracking-widest mb-3">
                01. ABOUT ME
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                Building things that{" "}
                <span className="text-gradient">matter</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-[#ffffff70] text-base leading-relaxed mb-5">
                I'm a Software Engineer based in Solapur, Maharashtra, currently
                working full-time at{" "}
                <span className="text-[#4ade80]">Suryank Technologies</span>. I
                specialize in building production-grade applications across the
                full stack — from Python/Django backends to React frontends and
                real-time WebSocket systems.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-[#ffffff70] text-base leading-relaxed mb-8">
                My most exciting work involves integrating multiple broker APIs
                (Angel One, Upstox, Zerodha, Groww) and building an end-to-end
                automated trading bot with real-time market data streaming and
                strategy execution. I love working on complex systems that need
                to be fast, reliable, and scalable.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="border-l-2 border-[#22c55e40] pl-5 italic text-[#ffffff50] text-sm">
                "I completed my BTech in Electronics & Telecommunication from NK
                Orchid College of Engineering, and a Diploma in Information
                Technology from Government Polytechnic Solapur with 83.88%."
              </div>
            </FadeIn>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={0.1 * i}>
                  <motion.div
                    whileHover={{ scale: 1.03, borderColor: "#22c55e55" }}
                    className="border border-[#22c55e20] bg-[#111118] rounded-xl p-6 transition-colors duration-200"
                  >
                    <div className="font-display font-extrabold text-4xl text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="font-mono text-xs text-[#ffffff50] tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <div className="mt-6 bg-[#111118] border border-[#22c55e20] rounded-xl p-5">
                <p className="font-mono text-xs text-[#4ade80] mb-3 tracking-widest">
                  CURRENTLY WORKING WITH
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Django",
                    "Flask",
                    "React.js",
                    "WebSocket",
                    "PostgreSQL",
                    "Docker",
                    "Python",
                    "Java",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs bg-[#22c55e12] text-[#4ade80] border border-[#22c55e25] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
