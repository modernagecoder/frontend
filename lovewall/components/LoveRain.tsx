import React, { useEffect, useState } from 'react';

// Only hearts and hugs, no kisses
const EMOJIS = ['❤️', '💖', '🤗', '🥰', '😍', '😻', '💕', '💓', '💝', '🫶', '💌', '💞', '💟', '🧡', '💛', '💚', '💙', '💜', '🤎', '🤍', '🫂'];

const LoveRain: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  
  // OPTIMIZED: Reduced bubble count for better performance
  const [bubbles] = useState(() => {
    const items = [];
    
    // Reduced grid density for performance
    const xStep = 8; // Increased spacing
    const yStep = 10; // Increased spacing
    
    let idCounter = 0;

    for (let y = -5; y <= 105; y += yStep) {
      for (let x = -5; x <= 105; x += xStep) {
        const jitterX = (Math.random() - 0.5) * 5;
        const jitterY = (Math.random() - 0.5) * 5;
        
        const size = 40 + Math.random() * 30; 

        items.push({
          id: idCounter++,
          emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
          left: x + jitterX,
          top: y + jitterY,
          size: size,
          rotation: (Math.random() - 0.5) * 60,
          animType: Math.random() > 0.5 ? 'heartbeat' : 'float',
          duration: 1 + Math.random(), 
          delay: -(Math.random() * 2),
        });
      }
    }
    return items;
  });

  useEffect(() => {
    // TIMING STRATEGY for 1.5s Total:
    // 0.0s - 0.5s: Fully visible (Hold)
    // 0.5s - 1.5s: Fading out (1s fade duration)
    // 1.5s: Removed from DOM

    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 500); // Start fading after 0.5 seconds

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // Completely gone at 1.5 seconds

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Decorative only, and deliberately absent from the build-time prerender: the initializer
  // above seeds ~200 emoji from Math.random(), which would otherwise dump hundreds of
  // meaningless emoji divs into the static HTML a crawler reads. This page exists to make 15
  // real reviews readable; emoji confetti is not the content.
  // This check sits AFTER the hooks on purpose — an early return above them would be a Rules
  // of Hooks violation. Safe as a bare typeof-window test only because index.tsx uses
  // createRoot(), not hydrateRoot(): nothing hydrates, so server and client are never diffed.
  // If this page ever moves to hydration, make it a mounted-flag/useEffect pattern instead.
  if (typeof window === 'undefined') return null;

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-white overflow-hidden flex items-center justify-center transition-opacity duration-[1000ms] ease-out ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* 
        We use a white background to hide the app initially.
        The bubbles are rendered absolutely positioned based on the grid logic.
      */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute select-none leading-none flex items-center justify-center"
          style={{
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            fontSize: `${bubble.size}px`,
            transform: `rotate(${bubble.rotation}deg)`,
            animation: `${bubble.animType} ${bubble.duration}s ease-in-out infinite alternate`,
            animationDelay: `${bubble.delay}s`,
            willChange: 'transform, opacity',
          }}
        >
          {bubble.emoji}
        </div>
      ))}
    </div>
  );
};

export default LoveRain;