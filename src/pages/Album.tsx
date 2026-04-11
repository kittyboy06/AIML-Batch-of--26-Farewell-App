import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Image, Film } from "lucide-react";
import clsx from "clsx";

/* ─── Media Data ─── */


const photos: MediaItem[] = (() => {
  const list: MediaItem[] = [];
  // 1-6 are .jpg, 7-31 are .jpeg
  for (let i = 1; i <= 6; i++) {
    list.push({ id: `photo-${i}`, src: `${import.meta.env.BASE_URL}album/photos/${i}.jpg`, type: "photo" });
  }
  for (let i = 7; i <= 31; i++) {
    list.push({ id: `photo-${i}`, src: `${import.meta.env.BASE_URL}album/photos/${i}.jpeg`, type: "photo" });
  }
  return list;
})();

const videos: MediaItem[] = Array.from({ length: 11 }, (_, i) => ({
  id: `video-${i + 1}`,
  src: `${import.meta.env.BASE_URL}album/videos/${i + 1}.mp4`,
  type: "video" as const,
}));

type MediaItem = { id: string; src: string; type: "photo" | "video" };

/* ─── Scroll Lock Hook ─── */
function useScrollLock(lock: boolean) {
  useEffect(() => {
    if (lock) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [lock]);
}

/* ─── Album Page ─── */
export default function Album() {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [lightbox, setLightbox] = useState<{ items: MediaItem[]; index: number } | null>(null);

  const items = activeTab === "photos" ? photos : videos;

  // Lock scroll when lightbox is open
  useScrollLock(lightbox !== null);

  // Keyboard navigation
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox(prev => prev ? { ...prev, index: (prev.index + 1) % prev.items.length } : null);
      if (e.key === "ArrowLeft") setLightbox(prev => prev ? { ...prev, index: (prev.index - 1 + prev.items.length) % prev.items.length } : null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  const openLightbox = useCallback((index: number) => {
    setLightbox({ items, index });
  }, [items]);

  const closeLightbox = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightbox(null);
  }, []);

  const goNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightbox(prev => prev ? { ...prev, index: (prev.index + 1) % prev.items.length } : null);
  }, []);

  const goPrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightbox(prev => prev ? { ...prev, index: (prev.index - 1 + prev.items.length) % prev.items.length } : null);
  }, []);

  return (
    <div className="py-16 max-w-screen-2xl mx-auto w-full min-h-screen">
      {/* ── Header ── */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold text-gradient-gold mb-6 uppercase"
        >
          The Album
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-body"
        >
          Captured moments from four years of code, camaraderie, and chaos.
        </motion.p>
      </div>

      {/* ── Tab Switcher ── */}
      <div className="flex items-center justify-center gap-4 mb-16">
        {([
          { key: "photos", label: "Photos", icon: Image, count: photos.length },
          { key: "videos", label: "Videos", icon: Film, count: videos.length },
        ] as const).map((tab) => {
          const isActive = activeTab === tab.key;
          const TabIcon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={clsx(
                "relative flex items-center gap-3 px-8 py-4 rounded-full font-display font-bold text-sm uppercase tracking-widest transition-all duration-300",
                isActive
                  ? "bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian shadow-[0_0_30px_rgba(234,179,8,0.4)]"
                  : "bg-glass text-white/60 hover:text-white hover:border-gold-500/30"
              )}
            >
              <TabIcon className="w-5 h-5" />
              {tab.label}
              <span className={clsx(
                "text-xs px-2 py-0.5 rounded-full",
                isActive ? "bg-obsidian/20 text-obsidian" : "bg-white/10 text-white/40"
              )}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Grid ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "photos" ? (
            <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 md:gap-4 space-y-2 md:space-y-4 px-2 md:px-0">
              {photos.map((photo, i) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (i % 15) * 0.04, duration: 0.5 }}
                  className="break-inside-avoid group relative cursor-pointer rounded-xl overflow-hidden"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={photo.src}
                    alt={`Memory ${i + 1}`}
                    loading="lazy"
                    className="w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-4">
                    <span className="text-gold-400 text-xs font-display tracking-widest uppercase flex items-center gap-2">
                      <Image className="w-4 h-4" /> View
                    </span>
                  </div>
                  {/* Gold border glow on hover */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gold-500/40 group-hover:shadow-[inset_0_0_20px_rgba(234,179,8,0.1)] transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-2 md:px-0">
              {videos.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden bg-glass border border-white/5 hover:border-gold-500/30 transition-all duration-500"
                  onClick={() => openLightbox(i)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <video
                      src={video.src}
                      muted
                      preload="metadata"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-obsidian/40 group-hover:bg-obsidian/20 transition-colors duration-300">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.5)] group-hover:shadow-[0_0_50px_rgba(234,179,8,0.7)] transition-shadow duration-300 group-hover:scale-110 transform">
                        <Play className="w-7 h-7 text-obsidian ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <span className="font-display text-white/80 text-sm tracking-wider uppercase">
                      Video {i + 1}
                    </span>
                    <span className="text-xs text-gold-500/60 font-display tracking-widest">MP4</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Lightbox ── */}
      {createPortal(
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] bg-obsidian/95 backdrop-blur-2xl flex items-center justify-center"
              onClick={closeLightbox}
            >
              {/* Close button — prominent top-right */}
              <button
                onClick={closeLightbox}
                className="absolute top-5 right-5 z-[10000] flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-red-500/30 border border-white/20 hover:border-red-400/50 text-white hover:text-red-200 transition-all duration-300 group cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                <span className="text-sm font-display font-bold tracking-wider uppercase">Close</span>
              </button>

              {/* Counter */}
              <div className="absolute top-7 left-6 z-[10000] font-display text-white/50 text-sm tracking-widest">
                <span className="text-gold-400 font-bold">{lightbox.index + 1}</span>
                <span className="mx-1">/</span>
                <span>{lightbox.items.length}</span>
              </div>

              {/* Prev button */}
              <button
                onClick={goPrev}
                className="absolute left-4 md:left-8 z-[10000] w-14 h-14 rounded-full bg-white/5 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500/40 flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-7 h-7 text-white" />
              </button>

              {/* Next button */}
              <button
                onClick={goNext}
                className="absolute right-4 md:right-8 z-[10000] w-14 h-14 rounded-full bg-white/5 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500/40 flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-7 h-7 text-white" />
              </button>

              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightbox.items[lightbox.index].id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-[90vw] h-[85vh] flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {lightbox.items[lightbox.index].type === "photo" ? (
                    <img
                      src={lightbox.items[lightbox.index].src}
                      alt={`Memory ${lightbox.index + 1}`}
                      className="w-full h-full object-contain rounded-xl shadow-[0_0_60px_rgba(234,179,8,0.15)] pointer-events-none"
                    />
                  ) : (
                    <video
                      key={lightbox.items[lightbox.index].src}
                      src={lightbox.items[lightbox.index].src}
                      controls
                      autoPlay
                      className="w-full h-full object-contain rounded-xl shadow-[0_0_60px_rgba(234,179,8,0.15)]"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
