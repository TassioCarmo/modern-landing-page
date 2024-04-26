/** @type {import('tailwindcss').Config} */
/**
 * This file exports a configuration object for Tailwind CSS.
 * It defines customizations for colors, typography, spacing, transitions, and more.
 * Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.
 */

// Import necessary functions and default theme values from Tailwind CSS.
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

// Export default Tailwind CSS configuration object.
export default {
  // Specify the content paths to be scanned for Tailwind CSS utility classes.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  // Define custom theme values, extending the default Tailwind CSS theme.
  theme: {
    extend: {
      // Extend the colors object to include custom color palettes.
      colors: {
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      // Extend the fontFamily object to include custom font families.
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      // Extend other theme values like letterSpacing, spacing, opacity, etc.
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        // Define custom background images using URLs.
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
        "benefit-card-1": "url(assets/benefits/card-1.svg)",
        "benefit-card-2": "url(assets/benefits/card-2.svg)",
        "benefit-card-3": "url(assets/benefits/card-3.svg)",
        "benefit-card-4": "url(assets/benefits/card-4.svg)",
        "benefit-card-5": "url(assets/benefits/card-5.svg)",
        "benefit-card-6": "url(assets/benefits/card-6.svg)",
      },
    },
  },
  // Define custom plugins to extend Tailwind CSS functionality.
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      // Add base styles, components, and utilities using Tailwind CSS utility classes.
      addBase({});
      addComponents({
        // Define reusable component styles using Tailwind CSS utility classes.
        ".container": {
          // Apply styles for a responsive container with max width and margin auto.
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          // Apply styles for heading 1 with font size and line height adjustments for various screen sizes.
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        // Add similar styles for other heading levels, body text, and other UI elements.
      });
      addUtilities({
        // Define custom utilities to apply specific CSS properties.
        ".tap-highlight-color": {
          // Apply CSS property to prevent tap highlighting on touch devices.
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};