import React from "react";

interface LogoIconProps {
  className?: string;
  light?: boolean;
  variant?: "emblem" | "horizontal" | "square";
}

export default function LogoIcon({ className = "w-10 h-10", light = false, variant = "emblem" }: LogoIconProps) {
  // Brand Colors: Navy (#012b5c), Emerald (#0c9c76)
  const navyColor = light ? "#ffffff" : "#012b5c";
  const emeraldColor = "#0c9c76";

  if (variant === "horizontal") {
    return (
      <svg 
        viewBox="0 0 450 100" 
        className={`${className} transition-all duration-300`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Crisp rendering optimizations */}
        <g transform="translate(10, 5) scale(1.05)">
          {/* Custom elegant 'M' in Navy Blue / White */}
          <path 
            d="M 5,85 L 5,22 L 21,33 L 28,62 L 35,22 L 51,33 L 51,85 L 38,85 L 28,48 L 18,85 Z" 
            fill={navyColor} 
            className="transition-colors duration-300"
          />
          
          {/* Custom signature 'P' in Emerald Green */}
          <path 
            d="M 66,85 L 66,61 L 76,61 C 86.5,61 95,52.5 95,41.5 C 95,30.5 86.5,22 76,22 L 54,22 L 54,70 Q 54,85 66,85 Z" 
            fill={emeraldColor} 
          />
          
          {/* White Medical Cross inside 'P' */}
          <path 
            d="M 75,29.5 H 81 V 38.5 H 90 V 44.5 H 81 V 53.5 H 75 V 44.5 H 66 V 38.5 H 75 Z" 
            fill="white" 
          />
        </g>

        {/* Typography Alignment Group */}
        <g transform="translate(130, 0)">
          {/* MEDPROFILE Capital Letters */}
          <text 
            x="0" 
            y="50" 
            font-family="system-ui, -apple-system, 'SF Pro Display', 'Inter', sans-serif" 
            font-weight="950" 
            font-size="34" 
            letter-spacing="1"
          >
            <tspan fill={navyColor} className="transition-colors duration-300">MED</tspan>
            <tspan fill={emeraldColor}>PROFILE</tspan>
          </text>

          {/* Sleek thin dividing green rule */}
          <line x1="0" y1="62" x2="230" y2="62" stroke={emeraldColor} stroke-width="2.5" stroke-linecap="round"/>

          {/* BANGLADESH with generous modern tracking */}
          <text 
            x="2" 
            y="80" 
            fill={navyColor} 
            font-family="system-ui, -apple-system, 'SF Pro Text', 'Inter', sans-serif" 
            font-weight="800" 
            font-size="14" 
            letter-spacing="7.5"
            className="transition-colors duration-300"
          >BANGLADESH</text>
        </g>
      </svg>
    );
  }

  if (variant === "square") {
    return (
      <svg 
        viewBox="0 0 500 500" 
        className={`${className} transition-all duration-300`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Centered Scaled MP Logo Icon Emblem */}
        <g transform="translate(122, 60) scale(2.8)">
          {/* Custom sharp 'M' */}
          <path 
            d="M 5,85 L 5,22 L 21,33 L 28,62 L 35,22 L 51,33 L 51,85 L 38,85 L 28,48 L 18,85 Z" 
            fill={navyColor} 
            className="transition-colors duration-300"
          />
          
          {/* Custom elegant 'P' with curved base */}
          <path 
            d="M 66,85 L 66,61 L 76,61 C 86.5,61 95,52.5 95,41.5 C 95,30.5 86.5,22 76,22 L 54,22 L 54,70 Q 54,85 66,85 Z" 
            fill={emeraldColor} 
          />
          
          {/* White Medical Cross cutout inside 'P' loop */}
          <path 
            d="M 75,29.5 H 81 V 38.5 H 90 V 44.5 H 81 V 53.5 H 75 V 44.5 H 66 V 38.5 H 75 Z" 
            fill="white" 
          />
        </g>

        {/* MEDPROFILE Typography */}
        <text 
          x="250" 
          y="346" 
          text-anchor="middle" 
          font-family="system-ui, -apple-system, 'SF Pro Display', 'Inter', sans-serif" 
          font-weight="900" 
          font-size="44" 
          letter-spacing="2"
        >
          <tspan fill={navyColor} className="transition-colors duration-300">MED</tspan>
          <tspan fill={emeraldColor}>PROFILE</tspan>
        </text>

        {/* BANGLADESH Sub-brand with side accent rules */}
        {/* Left horizontal green line */}
        <line x1="72" y1="396" x2="135" y2="396" stroke={emeraldColor} stroke-width="3" stroke-linecap="round"/>
        
        {/* "BANGLADESH" letters */}
        <text 
          x="254" 
          y="404" 
          text-anchor="middle" 
          fill={navyColor} 
          font-family="system-ui, -apple-system, 'SF Pro Text', 'Inter', sans-serif" 
          font-weight="800" 
          font-size="20.5" 
          letter-spacing="9"
          className="transition-colors duration-300"
        >BANGLADESH</text>
        
        {/* Right horizontal green line */}
        <line x1="365" y1="396" x2="428" y2="396" stroke={emeraldColor} stroke-width="3" stroke-linecap="round"/>
      </svg>
    );
  }

  // Default emblem mode
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${className} transition-all duration-300`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M 5,85 L 5,22 L 21,33 L 28,62 L 35,22 L 51,33 L 51,85 L 38,85 L 28,48 L 18,85 Z" 
        fill={navyColor} 
        className="transition-colors duration-300"
      />
      <path 
        d="M 66,85 L 66,61 L 76,61 C 86.5,61 95,52.5 95,41.5 C 95,30.5 86.5,22 76,22 L 54,22 L 54,70 Q 54,85 66,85 Z" 
        fill={emeraldColor} 
      />
      <path 
        d="M 75,29.5 H 81 V 38.5 H 90 V 44.5 H 81 V 53.5 H 75 V 44.5 H 66 V 38.5 H 75 Z" 
        fill="white" 
      />
    </svg>
  );
}
