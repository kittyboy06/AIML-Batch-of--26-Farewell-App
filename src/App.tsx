import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/Navigation";

function App() {
  const location = useLocation();

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-obsidian text-white font-body selection:bg-gold-500/30 selection:text-gold-200 overflow-x-hidden">
      <Navigation />
      
      {/* Page Transitions Wrapper */}
      <AnimatePresence>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.3 }}
          className="relative pt-24 min-h-screen container mx-auto px-6 w-full widescreen:px-24"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default App;
