# Design System Strategy: Gold Legacy Edition

## 1. Overview & Creative North Star
**Creative North Star: "Gold Legacy"**
This application abandons standard mobile-first layouts in favor of a "Windows big-screen" cinematic experience, utilizing high-end gold metallic accents, deep obsidian backgrounds, and complex scroll animations to deliver a striking, frictionless tribute.

## 2. Colors & Tonal Depth
We utilize an exclusive, high-impact gold aesthetic.
*   **Background (Obsidian/`#09090b`):** Deep Obsidian / Pure Black.
*   **Primary Accent (Gold Gradient):** Rich Gold to Metallic Yellow gradients (`from-yellow-500` to `to-amber-300`). Used for primary accents, glowing borders, and major UI interactions.
*   **Secondary Tone:** Deep warm grays and subtle metallic reflections for ambient padding.
*   **Text Primary (White/`#ffffff`):** Stark, high-contrast pure white for readability.
*   **Text Accents:** Major headers utilize a gold text-gradient clip to stand out against the background.

### Surface Hierarchy & Nesting
We use heavy dark glassmorphism to separate layout panels instead of solid colors.
*   **Level 0:** Base Background `#09090b`
*   **Level 1 (Cards):** White fill at `5%` opacity, heavily blurred (`backdrop-filter: blur(24px)`).
*   **Level 2 (Hover/Active):** Glowing gold borders (`border-yellow-500/50`) with an intense box shadow glow (`shadow-[0_0_15px_rgba(234,179,8,0.3)]`).

## 3. Typography
*   **Headlines:** Bold, geometric, and high contrast. Should feel monumental.
*   **Body:** Crisp, pure white sans-serif for optimal legibility against the abyss.
*   **Stylized Text:** Used for "Luminary Quotes" or handwritten sticky notes on the Tribute Wall to convey personality.

## 4. Components
### The "Glass" Rule
No opaque solid cards. All containers (directories, memories) MUST be slightly transparent glass panels radiating a sense of high-end value.
### Buttons
Buttons should feature intense gold gradients. For example, "ENTER THE JOURNEY" is an oversized gold gradient button.
### Borders
Avoid thick solid borders. Let hover states drive the glowing gold border aesthetic.

## 5. Interactions
*   **Hover States:** Cards translate effortlessly and gain the defined gold outer glow on hover.
*   **Timeline:** Elements should ease-in gracefully based on scroll position, anchored by a central glowing gold spine.
