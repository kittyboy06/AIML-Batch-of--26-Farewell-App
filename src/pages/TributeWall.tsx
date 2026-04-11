import { motion } from "framer-motion";

const MEMORIES = [
  { id: 101, text: "I just wanted to thank you for your support", author: "Naveen Raji M", role: "Junior", rot: 1.5 },
  { id: 102, text: "Will be missed for sure!!!!have a great life seniors🧿🔥🌟", author: "R.Nandhini", role: "Junior", rot: -1.5 },
  { id: 103, text: "One of the best seniors we got,we were lucky enough to get a friendly Anna's and Akka's and thanks guys for your guidance 🥹🙏🏾", author: "Junior Batch", role: "To Seniors", rot: 0.5 },
  { id: 1, text: "Thank you, Pragadesh, for always being so supportive and kind. Your guidance really meant a lot to us. We’ll truly miss you and all the fun moments we shared!", author: "Junior Batch", role: "To Pragadesh", rot: -2 },
  { id: 2, text: "Jayasooriya, you’ve been such an amazing senior and inspiration to us. Your positivity and encouragement made a big difference. Wishing you all the best—we’ll miss you a lot!", author: "Junior Batch", role: "To Jayasooriya", rot: 1 },
  { id: 3, text: "Afsal, thank you for being such a friendly and helpful senior. You made things easier and more enjoyable for all of us. You’ll definitely be missed!", author: "Junior Batch", role: "To Afsal", rot: -1 },
  { id: 4, text: "Akshaya, you’ve been more than just a senior—you’ve been a mentor and a friend. Thank you for all your support and guidance. We’re lucky to have had you!", author: "Junior Batch", role: "To Akshaya", rot: 2 },
  { id: 5, text: "Thank you for always guiding us and being so supportive. We’ll truly miss you and wish you all the success ahead!", author: "Junior Batch", role: "To Seniors", rot: -1.5 },
  { id: 6, text: "It was really great having you as our senior. Your kindness and encouragement meant a lot to us.", author: "Junior Batch", role: "To Seniors", rot: 1.5 },
  { id: 7, text: "You’ve been an amazing mentor and friend. Thank you for everything—you’ll always be remembered!", author: "Junior Batch", role: "To Seniors", rot: -0.5 },
  { id: 8, text: "We’re lucky to have had such wonderful seniors. Wishing you success and happiness in everything you do!", author: "Junior Batch", role: "To Seniors", rot: 0.5 },
  { id: 9, text: "Your support and positivity made our journey better. We’ll miss you a lot!", author: "Junior Batch", role: "To Seniors", rot: -2 },
  { id: 10, text: "Thank you for all the memories, guidance, and fun moments. Farewell and best wishes!", author: "Junior Batch", role: "To Seniors", rot: 1 },
  { id: 11, text: "You’ve left a lasting impact on us. We’ll always remember your support and kindness.", author: "Junior Batch", role: "To Seniors", rot: 1.5 },
  { id: 12, text: "College won’t be the same without you. Thank you for everything and all the best for your future!", author: "Junior Batch", role: "To Seniors", rot: -1 },
  { id: 13, text: "Your presence made a difference in our lives. We’re grateful and will miss you dearly.", author: "Junior Batch", role: "To Seniors", rot: 2 },
  { id: 14, text: "Wishing you success, happiness, and a bright future ahead. Thank you for being such a great senior!", author: "Junior Batch", role: "To Seniors", rot: -0.5 },
  { id: 15, text: "Thank you for being approachable and always ready to help us. We’ll miss you!", author: "Junior Batch", role: "To Seniors", rot: -1.5 },
  { id: 16, text: "Your guidance and support made a big impact on us. All the best for your future!", author: "Junior Batch", role: "To Seniors", rot: 0.5 },
  { id: 17, text: "We’ll always remember the memories and lessons you gave us. Thank you!", author: "Junior Batch", role: "To Seniors", rot: -2 },
  { id: 18, text: "You made our college life better and more fun. We’ll miss you a lot!", author: "Junior Batch", role: "To Seniors", rot: 1.5 },
  { id: 19, text: "Thank you for being such an inspiring and caring senior. Wishing you success ahead!", author: "Junior Batch", role: "To Seniors", rot: -1 },
  { id: 20, text: "It’s hard to say goodbye to such amazing seniors. Thank you for everything!", author: "Junior Batch", role: "To Seniors", rot: 2 },
];

export default function TributeWall() {
  return (
    <div className="py-24 max-w-screen-2xl mx-auto w-full min-h-screen">
      <div className="flex flex-col items-center mb-24">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient-gold mb-6 uppercase text-center">
          Luminary Voices
        </h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto font-body text-center">
          Heartfelt messages and farewell wishes from the juniors who looked up to you.
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
