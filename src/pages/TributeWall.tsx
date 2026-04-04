import { motion } from "framer-motion";

const MEMORIES = [
  { id: 1, text: "You all built the future while breaking the dev servers. Proud of you.", author: "Dr. L. Vance", role: "HOD, AIML", rot: -2 },
  { id: 2, text: "May your loss functions always converge to the global minimum, class of '26!", author: "Prof. K. Reynolds", role: "Deep Learning Instructor", rot: 1 },
  { id: 3, text: "The first batch to truly understand that prompt engineering is more art than science.", author: "S. Gupta", role: "Junior Lead", rot: -1 },
  { id: 4, text: "I'll never forget the 3AM GPU crunch before final submissions.", author: "A. Patel", role: "Lab Assistant", rot: 2 },
  { id: 5, text: "You set the bar impossibly high. Now go change the world.", author: "Dr. M. Chen", role: "Ethics in AI", rot: -1.5 },
  { id: 6, text: "Remember to occasionally step out of the latent space and enjoy reality.", author: "Prof. D. Wright", role: "Computer Vision", rot: 1.5 },
  { id: 7, text: "The legacy you leave behind is written in clean, optimized matrices.", author: "J. Doe", role: "Research Associate", rot: -0.5 },
  { id: 8, text: "Farewell, architects of tomorrow. Your journey has just begun.", author: "Dean J. Smith", role: "Faculty of Engineering", rot: 0.5 },
];

export default function TributeWall() {
  return (
    <div className="py-24 max-w-screen-2xl mx-auto w-full min-h-screen">
      <div className="flex flex-col items-center mb-24">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient-gold mb-6 uppercase text-center">
          Luminary Voices
        </h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto font-body text-center">
          Echoes from the faculty and friends who guided you through the latent space.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8 pb-32">
        {MEMORIES.map((memory, i) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (i % 4) * 0.1, duration: 0.6 }}
            style={{ rotate: memory.rot }}
            className="break-inside-avoid bg-gradient-to-br from-obsidian to-[#121217] p-8 rounded-xl border border-gold-500/20 shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(234,179,8,0.05)] relative overflow-hidden group hover:z-10 hover:shadow-[0_20px_60px_rgba(234,179,8,0.15)] hover:border-gold-500/40 transition-all duration-300"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fde047" />
                      <stop offset="100%" stopColor="#ca8a04" />
                    </linearGradient>
                  </defs>
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
             </div>
             
             <p className="text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed mb-8 relative z-10">
               "{memory.text}"
             </p>
             
             <div className="relative z-10 flex flex-col">
               <span className="font-display font-bold text-gold-400 tracking-wider uppercase text-sm mb-1">{memory.author}</span>
               <span className="text-white/40 text-xs tracking-widest uppercase">{memory.role}</span>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
