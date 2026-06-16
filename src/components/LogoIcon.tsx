import React from "react";

interface LogoIconProps {
  className?: string;
  light?: boolean;
}

export default function LogoIcon({ className = "w-10 h-10", light = false }: LogoIconProps) {
  // Brand Colors: Navy (#012b5c), Emerald (#0c9c76)
  const navyColor = light ? "#ffffff" : "#012b5c";
  const emeraldColor = "#0c9c76";

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${className} transition-all duration-300`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dynamic, clean, sharp, custom geometric 'M' */}
      <path 
        d="M 5,85 L 5,22 L 21,33 L 28,62 L 35,22 L 51,33 L 51,85 L 38,85 L 28,48 L 18,85 Z" 
        fill={navyColor} 
        className="transition-colors duration-300"
      />

      {/* Styled custom 'P' with curved bottom-left corner */}
      <path 
        d="M 66,85 L 66,61 L 76,61 C 86.5,61 95,52.5 95,41.5 C 95,30.5 86.5,22 76,22 L 54,22 L 54,70 Q 54,85 66,85 Z" 
        fill={emeraldColor} 
      />

      {/* Symmetric Medical Cross cutout inside the loop of the 'P' */}
      <path 
        d="M 75,29.5 H 81 V 38.5 H 90 V 44.5 H 81 V 53.5 H 75 V 44.5 H 66 V 38.5 H 75 Z" 
        fill="white" 
      />
    </svg>
  );
}
