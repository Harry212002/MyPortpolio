import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  MapPin,
  PhoneCall,
} from "lucide-react";

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
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden grid-bg px-4 sm:px-6 lg:px-8">
      {/* Ambient glows - responsive positioning */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#22c55e08] rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 bg-[#4ade8008] rounded-full blur-[60px] sm:blur-[70px] lg:blur-[80px] pointer-events-none" />

      {/* Floating orbs - responsive positioning */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 sm:top-20 right-10 sm:right-20 w-2 h-2 sm:w-3 sm:h-3 bg-[#4ade80] rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 sm:bottom-40 left-4 sm:left-16 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#22c55e] rounded-full opacity-40"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 sm:top-1/2 right-4 sm:right-10 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#86efac] rounded-full opacity-50"
      />

      <div className="max-w-6xl w-full relative z-10 ml-8 mr-8">
        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-6"
          >
            <div className="flex items-center gap-2 bg-[#22c55e12] border border-[#22c55e30] rounded-full px-3 sm:px-4 py-1.5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#4ade80] rounded-full animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs text-[#4ade80] tracking-widest uppercase whitespace-nowrap">
                Available for work
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-[#4ade80] text-xs sm:text-sm mb-2 sm:mb-3 tracking-wider text-center lg:text-left"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-none mb-3 sm:mb-4 text-center lg:text-left"
          >
            <span className="text-white">Shrihari</span>
            <br />
            <span className="text-gradient glow-text whitespace-nowrap">
              Shingetikar.
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-display text-xl sm:text-2xl md:text-3xl text-[#ffffff50] font-semibold mb-4 sm:mb-6 text-center lg:text-left"
          >
            Software Engineer & Full-Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[#ffffff65] text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-3 text-center lg:text-left"
          >
            I build production-grade applications — from real-time trading bots
            with multi-broker APIs to full-stack web platforms. Currently
            shipping live at{" "}
            <span className="text-[#4ade80] whitespace-nowrap">
              Suryank Technologies
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-2 text-[#ffffff40] text-xs sm:text-sm font-mono mb-8 sm:mb-10"
          >
            <MapPin size={12} className="sm:size-14 text-[#4ade80]" />
            <span>Solapur, Maharashtra, India</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px #22c55e33" }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#22c55e] text-[#0a0a0f] px-5 sm:px-7 py-2.5 sm:py-3 rounded font-display font-bold text-xs sm:text-sm tracking-wide hover:bg-[#4ade80] transition-colors cursor-pointer"
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
              className="border border-[#22c55e50] text-[#4ade80] px-5 sm:px-7 py-2.5 sm:py-3 rounded font-display font-bold text-xs sm:text-sm tracking-wide hover:bg-[#22c55e12] transition-colors cursor-pointer"
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center lg:justify-start gap-4 sm:gap-5 mt-8 sm:mt-10"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, color: "#4ade80" }}
                className="text-[#ffffff40] transition-colors duration-200 hover:text-[#4ade80]"
                aria-label={label}
              >
                <Icon size={14} className="sm:size-4" />
              </motion.a>
            ))}
            <div className="hidden sm:block w-12 sm:w-16 h-px bg-[#ffffff20]" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-[#ffffff30]"
      >
        <span className="font-mono text-[10px] sm:text-xs tracking-widest">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} className="sm:size-16" />
        </motion.div>
      </motion.div>
    </section>
  );
}
