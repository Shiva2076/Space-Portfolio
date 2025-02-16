"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image"; 

const EXPERIENCES = [
  {
    title: "Frontend Engineer Intern",
    description:
      "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      icon: "/experience/exp1.svg", 
  },
  {
    title: "Mobile App Dev - JSM Tech",
    description:
      "Designed and developed mobile apps for both iOS & Android platforms using React Native.",
      icon: "/experience/exp2.svg", 

  },
  {
    title: "Freelance App Dev Project",
    description:
      "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      icon: "/experience/exp3.svg", 

  },
  {
    title: "Lead Frontend Developer",
    description:
      "Developed and maintained user-facing features using modern frontend technologies.",
      icon: "/experience/exp4.svg", 

  },
];

export const Experience = () => {
  // Define the keyframes animation style
  const animationKeyframes = `
    @keyframes moveAlongBorder {
      0% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(calc(100% - 8px), 0);
      }
      50% {
        transform: translate(calc(100% - 8px), calc(100% - 8px));
      }
      75% {
        transform: translate(0, calc(100% - 8px));
      }
      100% {
        transform: translate(0, 0);
      }
    }
  `;

  return (
    <div className="w-full text-white py-16 px-4 flex flex-col items-center">
      {/* Add the keyframes style to the DOM */}
      <style>{animationKeyframes}</style>
      
      <h2 className="text-4xl font-bold mb-10 text-center">
        My <span className="text-cyan-400">work experience</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-4/5 max-w-6xl">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.title}
            className="group relative p-6 border-2 border-gray-400 rounded-lg bg-opacity-10 bg-white backdrop-blur-lg shadow-lg hover:border-cyan-400 transition-all overflow-hidden flex flex-col items-center text-center"
          >
            {/* Border animation container */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div 
                className="absolute w-2 h-2 bg-cyan-400/40 rounded-full"
                style={{
                  animation: 'moveAlongBorder 4s linear infinite'
                }}
              />
            </div>
            
            {typeof exp.icon === 'string' && exp.icon.includes('.svg') ? (
              <img 
                src={exp.icon}
                alt={exp.title}
                className="w-16 h-16 mb-4 relative z-10"
              />
            ) : (
              <span className="text-5xl mb-4 relative z-10">{exp.icon}</span>
            )}
            <h3 className="text-xl font-semibold relative z-10">{exp.title}</h3>
            <p className="text-gray-300 mt-2 relative z-10">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};