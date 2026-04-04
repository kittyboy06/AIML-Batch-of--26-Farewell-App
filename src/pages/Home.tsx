import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
         <div className="w-[800px] h-[800px] bg-gold-500/10 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="z-10 text-center max-w-5xl mx-auto"
      >
        <h2 className="text-gold-400 uppercase tracking-[0.5em] text-sm font-bold mb-6">
          System Initialization Complete
        </h2>
        
        <h1 className="text-7xl md:text-9xl font-display font-bold leading-tight mb-8">
          THE <span className="text-gradient-gold">LEGACY</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/60 font-body mb-16 max-w-3xl mx-auto leading-relaxed">
          Artificial Intelligence & Machine Learning
          <br/>
          Batch of 2022-2026
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            to="/timeline"
            className="group relative flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full text-obsidian font-bold text-lg uppercase tracking-widest shadow-[0_0_40px_rgba(234,179,8,0.4)] hover:shadow-[0_0_60px_rgba(234,179,8,0.6)] transition-all"
          >
            Enter The Journey
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-0 right-0 text-center z-10"
      >
        <p className="text-white/30 text-sm tracking-widest uppercase font-display">Class of Excellence · Monolith Protocol</p>
      </motion.div>
    </div>
  );
}
