// absolute top-0  Position the element absolutely at the top left corner of its containing element
// left-1/4 // Position the element at 25% of the width from the left edge of its containing element
// w-full // Set the width of the element to 100% of its containing element's width
// aspect-square // Force the element to maintain a square aspect ratio
// bg-radial-gradient // Apply a radial gradient background to the element
// pointer-events-none // Prevent the element from receiving pointer events, allowing clicks to pass through to elements below

export const GradientLight = () => { // Define a React component named GradientLight
  return ( // Return JSX for rendering
    <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" /> // Render a <div> element with Tailwind CSS classes applied
  );
};
