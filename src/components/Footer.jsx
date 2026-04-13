export default function Footer() {
  return (
    <footer className="border-t border-[#ffffff08] py-8 px-6 text-center">
      <p className="font-mono text-xs text-[#ffffff25] tracking-widest">
        DESIGNED & BUILT BY{" "}
        <span className="text-[#4ade80]">SHRIHARI SHINGETIKAR</span> ·{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
