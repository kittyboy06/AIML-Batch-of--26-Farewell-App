import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Award, Lightbulb, Users, GraduationCap } from "lucide-react";
import clsx from "clsx";

const timelineEvents = [
  {
    year: "2022",
    title: "Freshman Orientation",
    description: "The spark ignites. 60 distinct minds gathered to begin a journey into the architecture of intelligence.",
    icon: Users,
  },
  {
    year: "2023",
    title: "Sophomore Hackathon",
    description: "Sleep deprivation meets absolute brilliance. We built our first neural networks and broke production twice.",
    icon: Lightbulb,
  },
  {
    year: "2024",
    title: "Neural Lab Internship",
    description: "Bridging theory and industry. Our models learned to see, hear, and occasionally, hallucinate.",
    icon: Award,
  },
  {
    year: "2026",
    title: "Graduation Day",
    description: "The final epoch. Weights optimized, gradients descended. The legacy is sealed.",
    icon: GraduationCap,
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="py-24 relative" ref={containerRef}>
      <div className="text-center mb-32">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient-gold mb-6 uppercase">
          The Journey
        </h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto font-body">
          Four years of epochs, optimization, and memories compiled into a single thread.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* The Golden Spine (Background) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2"></div>
        
        {/* The Golden Spine (Active) */}
        <motion.div 
          className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 shadow-[0_0_20px_rgba(234,179,8,0.8)] -translate-x-1/2 origin-top"
          style={{ height: lineHeight }}
        />

        <div className="space-y-48">
          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            const Icon = event.icon;
            
            return (
              <motion.div 
                key={event.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={clsx(
                  "flex items-center w-full relative",
                  isEven ? "justify-start" : "justify-end"
                )}
              >
                {/* Center Node */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-obsidian border-4 border-gold-500 shadow-[0_0_15px_rgba(234,179,8,0.5)] z-10">
                  <Icon className="w-5 h-5 text-gold-400" />
                </div>

                {/* Content Card */}
                <div className={clsx("w-[45%] group", isEven ? "pr-16 text-right" : "pl-16 text-left")}>
                  <div className="bg-glass p-8 rounded-2xl transition-all duration-500 group-hover:bg-glass-gold group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] relative overflow-hidden">
                    <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-gold-300 opacity-0 group-hover:opacity-10 transition-opacity blur-xl"></div>
                    
                    <h2 className="text-6xl font-display font-black text-white/5 mb-4 group-hover:text-gold-500/10 transition-colors">
                      {event.year}
                    </h2>
                    <h3 className="text-3xl font-display font-bold text-white mb-4 relative z-10">
                      {event.title}
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed relative z-10">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-48 text-center"
      >
        <Link
          to="/hall-of-fame"
          className="inline-flex items-center gap-4 px-10 py-5 bg-glass-gold hover:bg-gold-500/20 border border-gold-500/50 rounded-full text-white font-bold text-lg uppercase tracking-widest transition-all"
        >
          Enter the Hall of Fame
          <ChevronRight className="w-6 h-6 text-gold-400" />
        </Link>
      </motion.div>
    </div>
  );
}
