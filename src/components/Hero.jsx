import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, MapPin, PhoneCall } from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/Harry212002",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shriharishingetikar/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:shriharishingetikar2002@gmail.com",
    label: "Email",
  },
  {
    icon: PhoneCall,
    href: "tel:+917020337637",
    label: "+91 7020337637",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22c55e08] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#4ade8008] rounded-full blur-[80px] pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-3 h-3 bg-[#4ade80] rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-40 left-16 w-2 h-2 bg-[#22c55e] rounded-full opacity-40"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-[#86efac] rounded-full opacity-50"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2 bg-[#22c55e12] border border-[#22c55e30] rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse" />
              <span className="font-mono text-xs text-[#4ade80] tracking-widest uppercase">
                Available for work
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-[#4ade80] text-sm mb-3 tracking-wider"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-none mb-4"
          >
            <span className="text-white">Shrihari</span>
            <br />
            <span className="text-gradient glow-text">Shingetikar.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-display text-2xl sm:text-3xl text-[#ffffff50] font-semibold mb-6"
          >
            Software Engineer & Full-Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[#ffffff65] text-lg leading-relaxed max-w-xl mb-3"
          >
            I build production-grade applications — from real-time trading bots
            with multi-broker APIs to full-stack web platforms. Currently
            shipping live at{" "}
            <span className="text-[#4ade80]">Suryank Technologies</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 text-[#ffffff40] text-sm font-mono mb-10"
          >
            <MapPin size={14} className="text-[#4ade80]" />
            Solapur, Maharashtra, India
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px #22c55e33" }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#22c55e] text-[#0a0a0f] px-7 py-3 rounded font-display font-bold text-sm tracking-wide hover:bg-[#4ade80] transition-colors"
            >
              View My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-[#22c55e50] text-[#4ade80] px-7 py-3 rounded font-display font-bold text-sm tracking-wide hover:bg-[#22c55e12] transition-colors"
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-5 mt-10"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, color: "#4ade80" }}
                className="text-[#ffffff40] transition-colors duration-200"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
            <div className="w-16 h-px bg-[#ffffff20]" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#ffffff30]"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
