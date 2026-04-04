import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";

const links = [
  { path: "/", label: "The Reveal" },
  { path: "/timeline", label: "The Journey" },
  { path: "/hall-of-fame", label: "Hall of Fame" },
  { path: "/tributes", label: "Tribute Wall" },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-400 to-gold-600 shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
          <span className="font-display font-bold text-xl tracking-widest text-white">JCE AIML</span>
        </div>
        
        <div className="hidden md:flex items-center gap-2 bg-glass px-4 py-2 rounded-full">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  "relative px-6 py-2 rounded-full text-sm font-semibold transition-colors uppercase tracking-wider",
                  isActive ? "text-obsidian" : "text-white/70 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>
        
        <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold border border-gold-500/30 px-3 py-1 rounded bg-gold-500/10">v2.2.4</span>
        </div>
      </div>
    </nav>
  );
}
