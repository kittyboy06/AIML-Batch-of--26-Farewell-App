import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";

const links = [
  { path: "/", label: "The Reveal" },
  { path: "/album", label: "Album" },
  { path: "/hall-of-fame", label: "Hall of Fame" },
  { path: "/tributes", label: "Tribute Wall" },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 bg-obsidian/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-b border-white/5 md:border-transparent">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
        
        {/* Mobile Top Bar (Logo & Version align edge-to-edge) */}
        <div className="w-full md:w-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-gold-400 to-gold-600 shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
            <span className="font-display font-bold text-lg md:text-xl tracking-widest text-white">JCE AIML</span>
          </div>
          <div className="flex md:hidden items-center">
            <span className="text-[9px] uppercase tracking-widest text-gold-500 font-bold border border-gold-500/30 px-2 py-0.5 rounded bg-gold-500/10">v2.2.4</span>
          </div>
        </div>
        
        {/* Responsive Links Row */}
        <div className="w-full md:w-auto flex items-center gap-1 md:gap-2 bg-transparent md:bg-glass px-0 md:px-4 py-1 md:py-2 rounded-full overflow-x-auto no-scrollbar justify-start md:justify-center">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  "relative px-4 md:px-6 py-2 rounded-full text-[11px] md:text-sm font-semibold transition-colors uppercase tracking-wider whitespace-nowrap flex-shrink-0",
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
        
        {/* Desktop Version Tag */}
        <div className="hidden md:flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold border border-gold-500/30 px-3 py-1 rounded bg-gold-500/10">v2.2.4</span>
        </div>
      </div>
    </nav>
  );
}
