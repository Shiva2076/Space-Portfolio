"use client";
import React from "react";
import { motion } from "framer-motion";

const phases = [
  {
    phase: "Phase 1",
    title: "Planning & Strategy",
    description: "We'll collaborate to map out your website's goals, target audience, and key functionalities.",
    color: "#00ff9d",
  },
  {
    phase: "Phase 2",
    title: "Development & Progress Update",
    description: "Once we agree on the plan, I dive into coding. From sketches to polished code, I keep you updated every step of the way.",
    color: "#ff006a",
  },
  {
    phase: "Phase 3",
    title: "Development & Launch",
    description: "This is where the magic happens! I'll translate everything into functional code, building your website from the ground up.",
    color: "#00d1ff",
  }
];

// SVG noise pattern for the sparkle effect
const NoisePattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.08]">
    <filter id="noiseFilter">
      <feTurbulence 
        type="fractalNoise" 
        baseFrequency="0.8" 
        numOctaves="4" 
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);

const PhaseCard = ({ phase, title, description, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative h-[35rem] w-full p-6 rounded-2xl border border-gray-500 bg-[#0a0a0a] text-white 
                 transition-all duration-500 overflow-hidden group flex flex-col items-center justify-center"
    >
      {/* Noise/Sparkle effect overlay */}
      <NoisePattern />
      
      {/* Phase number (hidden on hover) */}
      <div className="text-2xl font-bold mb-4 transition-all duration-500 
                    group-hover:opacity-0 group-hover:-translate-y-full z-10">
        {phase}
      </div>

      {/* Content (visible on hover) */}
      <div className="absolute inset-0 p-6 flex flex-col items-center justify-center 
                    opacity-0 group-hover:opacity-100 transition-all duration-500 
                    translate-y-full group-hover:translate-y-0 z-10">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-center text-gray-300">{description}</p>
      </div>

      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)`,
          filter: "blur(20px)"
        }}
      />

      {/* Active card overlay with noise texture */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(180deg, ${color}22 0%, ${color}11 100%)`,
        }}
      />
    </motion.div>
  );
};

const Approach = () => {
  return (
    <section className="w-full min-h-screen py-16 flex flex-col items-center justify-center p-10">
      <h2 className="text-4xl font-bold text-white mb-10">
        My <span className="text-cyan-400">approach</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {phases.map((phase, index) => (
          <PhaseCard key={index} {...phase} />
        ))}
      </div>
    </section>
  );
};

export default Approach;