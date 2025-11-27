"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const skills = [
    // Frontend
    {
      name: "JavaScript",
      icon: "🟨",
      description: "ES6+, Async/Await, Modern JS features",
    },
    {
      name: "TypeScript",
      icon: "🔷",
      description: "Type System, Interfaces, Generics, Type Safety",
    },
    {
      name: "React",
      icon: "⚛️",
      description: "Hooks, Context, State Management, Components",
    },
    {
      name: "Redux",
      icon: "📦",
      description: "State Management, Predictable State Container",
    },
    {
      name: "Vite",
      icon: "⚡",
      description: "Fast Build Tool, Hot Module Replacement",
    },

    // Backend
    {
      name: "Node.js",
      icon: "🟢",
      description: "Runtime, Event Loop, Non-blocking I/O",
    },
    {
      name: ".NET",
      icon: "💜",
      description: "ASP.NET Core, C#, Web APIs, Framework",
    },
    {
      name: "Express",
      icon: "🚂",
      description: "Web Framework, Middleware, Routing, REST APIs",
    },
    {
      name: "NestJS",
      icon: "🪺",
      description: "TypeScript Framework, Architecture, Dependency Injection",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      description: "NoSQL, Document Database, Aggregation, Data Modeling",
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      description: "SQL, Relational Database, Transactions, Relations",
    },
    {
      name: "Postman",
      icon: "📮",
      description: "API Testing, Documentation, Request Collection",
    },

    // Languages
    {
      name: "Python",
      icon: "🐍",
      description: "Django, Algorithms, Scripting, Data Processing",
    },
    {
      name: "C++",
      icon: "🔵",
      description: "Algorithms, System Programming, Performance",
    },
    {
      name: "C#",
      icon: "🌀",
      description: ".NET Ecosystem, Object-Oriented, Web Development",
    },
  ];

  const categories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["JavaScript", "TypeScript", "React", "Redux", "Vite"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        "Node.js",
        ".NET",
        "Express",
        "NestJS",
        "MongoDB",
        "PostgreSQL",
        "Postman",
      ],
    },
    {
      title: "Languages",
      icon: "📝",
      skills: ["Python", "C++", "C#"],
    },
  ];

  return (
    <div
      style={section}
      ref={ref}
      className={isVisible ? "scroll-fade-in visible" : "scroll-fade-in"}
    >
      <div style={container}>
        <h2 style={title}>
          <span className="glow-text">Technologies & Skills</span>
        </h2>

        <p style={subtitle}>
          Full-stack technologies I use to build modern web applications
        </p>

        {/* Категории */}
        <div style={categoriesSection}>
          {categories.map((category) => (
            <div key={category.title} style={categoryCard}>
              <div style={categoryHeader}>
                <span style={categoryIcon}>{category.icon}</span>
                <h3 style={categoryTitle}>{category.title}</h3>
              </div>
              <div style={categorySkills}>
                {category.skills.map((skillName) => (
                  <span key={skillName} style={categorySkillTag}>
                    {skillName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Детальные карточки навыков */}
        <div style={skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.name} style={skillCard}>
              <div style={skillHeader}>
                <div style={skillIcon}>{skill.icon}</div>
                <h3 style={skillName}>{skill.name}</h3>
              </div>

              <p style={skillDescription}>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const section: React.CSSProperties = {
  padding: "5rem 0",
  background: "#0a0a0a",
  borderTop: "1px solid #333",
  borderBottom: "1px solid #333",
};

const container: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 2rem",
};

const title: React.CSSProperties = {
  fontSize: "2.5rem",
  textAlign: "center",
  marginBottom: "1rem",
  fontWeight: "bold",
};

const subtitle: React.CSSProperties = {
  fontSize: "1.1rem",
  textAlign: "center",
  color: "#ccc",
  marginBottom: "3rem",
  maxWidth: "600px",
  margin: "0 auto 3rem auto",
};

const categoriesSection: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "1.5rem",
  marginBottom: "3rem",
};

const categoryCard: React.CSSProperties = {
  background: "#1a1a1a",
  padding: "1.5rem",
  borderRadius: "12px",
  border: "1px solid #333",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const categoryHeader: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

const categoryIcon: React.CSSProperties = {
  fontSize: "1.5rem",
};

const categoryTitle: React.CSSProperties = {
  fontSize: "1.3rem",
  fontWeight: "600",
  color: "#fff",
  margin: 0,
};

const categorySkills: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
};

const categorySkillTag: React.CSSProperties = {
  fontSize: "0.8rem",
  padding: "0.4rem 0.8rem",
  background: "rgba(255, 255, 255, 0.1)",
  color: "#fff",
  borderRadius: "6px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
};

const skillsGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "1.5rem",
  marginBottom: "3rem",
};

const skillCard: React.CSSProperties = {
  background: "#1a1a1a",
  padding: "1.5rem",
  borderRadius: "12px",
  border: "1px solid #333",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  transition: "transform 0.3s ease",
};

const skillHeader: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

const skillIcon: React.CSSProperties = {
  fontSize: "2rem",
  width: "50px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#2a2a2a",
  borderRadius: "10px",
  border: "1px solid #444",
};

const skillName: React.CSSProperties = {
  fontSize: "1.3rem",
  fontWeight: "600",
  color: "#fff",
  margin: 0,
};

const skillDescription: React.CSSProperties = {
  color: "#ccc",
  fontSize: "0.9rem",
  lineHeight: "1.5",
  margin: 0,
  flex: 1,
};
