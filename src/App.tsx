import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/Navigation";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-obsidian text-white font-body selection:bg-gold-500/30 selection:text-gold-200 overflow-x-hidden">
      <Navigation />
      
      {/* Page Transitions Wrapper */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative pt-24 min-h-screen container mx-auto px-6 w-full widescreen:px-24"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default App;
