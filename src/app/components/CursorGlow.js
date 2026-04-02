// file: src/components/CursorGlow.js
"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        requestAnimationFrame(() => {
          // 300px size ke hisaab se 150px offset rakha hai center karne ke liye
          cursorRef.current.style.transform = `translate3d(${e.clientX - 150}px, ${e.clientY - 150}px, 0)`;
        });
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] bg-[#0097B2]/15 dark:bg-[#0097B2]/10 rounded-full blur-[100px] z-[99] hidden lg:block mix-blend-screen dark:mix-blend-lighten"
      style={{ willChange: 'transform' }}
    ></div>
  );
}