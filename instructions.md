Project Specification: JCE AIML Farewell App (Gold Legacy Edition)
1. Executive Summary
A premium, fully static, desktop-optimized web application designed for a live projector reveal for the Artificial Intelligence and Machine Learning Class of 2026. This application abandons standard mobile-first layouts in favor of a "Windows big-screen" cinematic experience, utilizing high-end gold metallic accents, deep obsidian backgrounds, and complex scroll animations to deliver a striking, frictionless tribute without the need for a backend database.

2. Global Design System
The entire UI has been overhauled from the previous violet theme to an exclusive, high-impact gold aesthetic.

Layout Architecture: Desktop-first (widescreen optimized). Mobile bottom tabs are completely removed and replaced by a clean, top-fixed navigation bar.

Background Base: Deep Obsidian / Pure Black (bg-black or bg-zinc-950).

Primary Accents: Rich Gold to Metallic Yellow gradients (from-yellow-500 to-amber-300).

Card Surfaces: Dark glassmorphism (bg-white/5 backdrop-blur-xl) with glowing gold borders on hover (border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.3)]).

Typography: High-contrast pure white for primary text, with major headers utilizing a gold text-gradient clip.

3. Technical Stack (The "Static Engine")
Framework: React + Vite.

Styling: Tailwind CSS (configured for custom gold variables).

Animation: Framer Motion (heavy emphasis on stagger effects and scroll-tracking).

Data Tier: 100% hardcoded local JSON files (seniors.json, timeline.json, tributes.json).

Deployment: Vercel (seamless updates via GitHub pushes).

4. Page-by-Page Architecture
Page 1: The Reveal (Home)
Vibe: "Neural Nexus Established" – A cinematic, distraction-free landing screen.

Background: Full-screen hero featuring large, pulsing gold neural network line-art on a dark background.

Typography: Massive gold gradient text: "THE LEGACY: JCE AIML BATCH OF 2022-2026".

Interaction: A single, oversized gold gradient button: "ENTER THE JOURNEY".

Footer Details: Scaled-up, subtle typography at the bottom reading "CLASS OF EXCELLENCE" and "MONOLITH PROTOCOL 2.2.4".

Page 2: The Journey (Timeline)
Vibe: A chronological, animated descent through four years of college.

Background: Dark with subtle gold circuit traces.

The Spine: A single, continuous glowing central gold line.

Card Layout: Reusable GlassCards alternate left and right along the line. Cards slide in and fade up on scroll.

Content & Assets:

2022: Freshman Orientation.

2023: Sophomore Hackathon (Features a gold lightbulb icon).

2024: Neural Lab Internship (Features a gold diploma icon).

2025/26: Graduation Day (Features a gold graduation cap icon).

Footer Interaction: A large gold button at the end: "EXPLORE MORE CYCLES" leading to the Hall of Fame.

Page 3: Hall of Fame (Student Directory)
Vibe: An exclusive, classified archive of the graduating class.

Layout: A large, searchable grid layout optimized for big screens.

Top Nav: A scaled, centered search bar reading "Filter by name...".

Card Structure (The 'Luminary' Card):

Circular, optimized profile photo.

Name (Bold, White).

Department/Focus (e.g., "NEURAL NETWORKS").

Hardcoded DOB & Contact Details.

Status Tags: Gold pill badges indicating specific honors (e.g., "GOLD", "HONOR", "ELITE").

The Quote: A placeholder string in italicized gray (e.g., "Pending Senior Wisdom...").

Hidden Interaction: A pulsing, hidden gold "CLAIM PROFILE" button overlaid on the quote field (purely for aesthetic effect).

Page 4: Tributes (The Guestbook)
Vibe: An organic, digital corkboard filled with golden memories.

Header: Large gold gradient text: "LUMINARY VOICES: THE TRIBUTE WALL".

Layout: A dynamic Masonry grid displaying varied sizes of "sticky notes".

Styling: Notes feature a mix of handwritten gold and crisp white fonts. The components are given slight, randomized CSS rotations (rotate-1, -rotate-2) to feel organically placed on the board.

Content: Hardcoded messages from professors (e.g., Prof. Marcus Volkov, Dr. Elena Thorne) and specific junior leads.