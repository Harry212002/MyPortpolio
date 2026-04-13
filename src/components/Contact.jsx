import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shriharishingetikar2002@gmail.com",
    href: "mailto:shriharishingetikar2002@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7020337637",
    href: "tel:+917020337637",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Solapur, Maharashtra, India",
    href: null,
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

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#22c55e30]" />

      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="font-mono text-[#4ade80] text-sm tracking-widest mb-3">
            05. CONTACT
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Let's <span className="text-gradient">work together</span>
          </h2>
          <p className="text-[#ffffff50] max-w-md mx-auto">
            I'm currently open to new opportunities. Whether you have a question
            or just want to say hi, my inbox is always open!
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-5">
            {contactInfo.map((info, i) => (
              <FadeIn key={info.label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4, borderColor: "#22c55e40" }}
                  className="border border-[#ffffff10] bg-[#111118] rounded-xl p-4 flex items-center gap-4 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#22c55e15] border border-[#22c55e30] flex items-center justify-center flex-shrink-0">
                    <info.icon size={16} className="text-[#4ade80]" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#ffffff40] tracking-widest uppercase mb-0.5">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-white hover:text-[#4ade80] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm text-white">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              </FadeIn>
            ))}

            <FadeIn delay={0.3}>
              <div className="border border-[#ffffff10] bg-[#111118] rounded-xl p-5">
                <p className="font-mono text-xs text-[#ffffff40] tracking-widest uppercase mb-4">
                  Find me on
                </p>
                <div className="flex gap-4">
                  {[
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
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="w-10 h-10 rounded-lg border border-[#ffffff15] bg-[#1a1a26] flex items-center justify-center text-[#ffffff50] hover:text-[#4ade80] hover:border-[#22c55e40] transition-colors"
                      aria-label={label}
                    >
                      <Icon size={16} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <FadeIn delay={0.2}>
            {sent ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="border border-[#22c55e40] bg-[#22c55e08] rounded-xl p-8 flex flex-col items-center justify-center h-full gap-4 text-center"
              >
                <CheckCircle size={40} className="text-[#4ade80]" />
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    Message sent!
                  </h3>
                  <p className="text-[#ffffff60] text-sm">
                    Thanks for reaching out. I'll get back to you soon!
                  </p>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-[#ffffff10] bg-[#111118] rounded-xl p-6 space-y-4"
              >
                <div>
                  <label className="font-mono text-xs text-[#ffffff40] tracking-widest uppercase block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-[#1a1a26] border border-[#ffffff10] rounded-lg px-4 py-3 text-sm text-white placeholder-[#ffffff30] outline-none focus:border-[#22c55e50] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-[#ffffff40] tracking-widest uppercase block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="w-full bg-[#1a1a26] border border-[#ffffff10] rounded-lg px-4 py-3 text-sm text-white placeholder-[#ffffff30] outline-none focus:border-[#22c55e50] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-[#ffffff40] tracking-widest uppercase block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Let's talk about..."
                    className="w-full bg-[#1a1a26] border border-[#ffffff10] rounded-lg px-4 py-3 text-sm text-white placeholder-[#ffffff30] outline-none focus:border-[#22c55e50] transition-colors resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 25px #22c55e33" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full bg-[#22c55e] text-[#0a0a0f] py-3 rounded-lg font-display font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-[#4ade80] transition-colors disabled:opacity-60"
                >
                  {loading ? (
                    <span className="font-mono text-xs animate-pulse">
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
