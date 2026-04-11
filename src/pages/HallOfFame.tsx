import { useState } from "react";
import { motion } from "framer-motion";
import studentsData from "../data/students.json";

export default function HallOfFame() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLuminaries = studentsData.filter(luminary => 
    luminary.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (luminary.rollNo && luminary.rollNo.toString().includes(searchTerm))
  );

  return (
    <div className="py-24 max-w-screen-2xl mx-auto w-full min-h-screen">
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient-gold mb-8 uppercase text-center">
          Hall of Fame
        </h1>
        
        <div className="w-full max-w-2xl relative">
          <input 
            type="text" 
            placeholder="Search by name or roll no..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-glass border border-white/20 rounded-full px-8 py-5 text-xl text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all font-display tracking-widest"
          />
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8 px-2 md:px-0"
      >
        {filteredLuminaries.map((luminary, i) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (i % 20) * 0.05, duration: 0.4 }}
            key={luminary.id}
            className="group relative bg-glass p-4 md:p-8 rounded-2xl border border-white/5 hover:bg-glass-gold hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col items-center text-center"
          >
            {/* Hover Glow */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-full bg-obsidian border border-white/20 mb-4 md:mb-6 group-hover:border-gold-500/50 transition-colors shadow-inner overflow-hidden flex items-center justify-center">
               {luminary.image ? (
                 <img src={`${import.meta.env.BASE_URL}${luminary.image.replace(/^\//, '')}`} alt={luminary.name} className="w-full h-full object-cover" loading="lazy" />
               ) : (
                 <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                    <span className="text-2xl md:text-4xl text-white/20 font-display font-bold group-hover:text-gold-500/40 transition-colors">
                      {luminary.name.charAt(0)}
                    </span>
                 </div>
               )}
            </div>

            <div className="mb-2">
              <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] md:text-xs font-bold tracking-widest rounded-full mb-2 md:mb-4">
                {luminary.status}
              </span>
            </div>

            <h3 className="text-base sm:text-lg md:text-2xl font-bold font-display text-white mb-1 md:mb-2 leading-tight">{luminary.name}</h3>
            <p className="text-[9px] md:text-sm tracking-widest text-white/50 uppercase mb-1 md:mb-2 font-semibold line-clamp-2 md:line-clamp-none">{luminary.focus}</p>
            <p className="text-[10px] md:text-xs text-white/30 uppercase tracking-wider mb-2 md:mb-6">Roll No: {luminary.rollNo}</p>
            
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
