"use client";

import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Header() {
  const [imageError, setImageError] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      style={heroSection}
      ref={ref}
      className={isVisible ? "scroll-fade-in visible" : "scroll-fade-in"}
    >
      <div style={container}>
        <div style={content}>
          {/* Аватарка */}
          <div style={avatarContainer} className="scale-in visible">
            {!imageError ? (
              <img
                src="/avatar.jpg"
                alt="woookle"
                style={avatar}
                onError={() => setImageError(true)}
              />
            ) : (
              <div style={avatarFallback}>
                <span>WK</span>
              </div>
            )}
          </div>

          {/* Текст */}
          <div style={textContent}>
            <h1 style={title}>
              <span className="glow-text">woookle</span>
            </h1>
            <p style={subtitle}>Web Developer</p>
            <p style={description}>
              19 y/o • Computer Science Student • Full-Stack Developer
            </p>
          </div>
        </div>

        {/* Анимированная стрелка вниз */}
        <div style={scrollIndicator} className="pulse">
          ↓
        </div>
      </div>
    </div>
  );
}

const heroSection: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://media1.tenor.com/m/GnizwXSZ4XgAAAAd/anime-background-black-and-white.gif")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
};

const container: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 2rem",
  textAlign: "center",
};

const content: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
};

const avatarContainer: React.CSSProperties = {
  position: "relative",
};

const avatar: React.CSSProperties = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  border: "3px solid #fff",
  boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
};

const avatarFallback: React.CSSProperties = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #fff 0%, #ccc 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "3rem",
  fontWeight: "bold",
  color: "#000",
  border: "3px solid #fff",
};

const textContent: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const title: React.CSSProperties = {
  fontSize: "4rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
};

const subtitle: React.CSSProperties = {
  fontSize: "1.5rem",
  color: "#fff",
  marginBottom: "1rem",
  opacity: 0.9,
};

const description: React.CSSProperties = {
  fontSize: "1.2rem",
  color: "#ccc",
  marginBottom: "2rem",
};

const scrollIndicator: React.CSSProperties = {
  position: "absolute",
  bottom: "2rem",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "2rem",
  color: "#fff",
  animation: "arrowAnim 5s ease infinite",
};
