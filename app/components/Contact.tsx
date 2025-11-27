"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  const contacts = [
    {
      platform: "GitHub",
      username: "@woookle",
      icon: "💻",
      url: "https://github.com/woookle",
      description: "Check out my projects and code",
    },
    {
      platform: "Telegram",
      username: "@buryonthelawn",
      icon: "✈️",
      url: "https://t.me/buryonthelawn",
      description: "Send me a message",
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
          <span className="glow-text">Let's Connect</span>
        </h2>

        <p style={subtitle}>
          Ready to collaborate on amazing projects? Get in touch!
        </p>

        <div style={contactsGrid}>
          {contacts.map((contact, index) => (
            <div key={contact.platform} style={contactCard} className={isVisible ? index%2!=0 ? "scroll-fade-in-right visible" : "scroll-fade-in-left visible" : index%2!=0 ? "scroll-fade-in-right" : "scroll-fade-in-left"}>
              <div style={contactHeader}>
                <div style={contactIcon}>{contact.icon}</div>
                <div style={contactInfo}>
                  <h3 style={contactPlatform}>{contact.platform}</h3>
                  <p style={contactUsername}>{contact.username}</p>
                </div>
              </div>

              <p style={contactDescription}>{contact.description}</p>

              {contact.url && (
                <a
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={contactButton}
                >
                  Visit {contact.platform} →
                </a>
              )}
            </div>
          ))}
        </div>

        <div style={footer}>
          <div style={finalMessage}>
            <a href="https://github.com/woookle" style={footerContent}>
              <img src="/avatar.jpg" alt="avatar" style={footerAvatar} />{" "}
              @woookle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const section: React.CSSProperties = {
  padding: "5rem 0",
  background: "#000",
  position: "relative",
};

const container: React.CSSProperties = {
  maxWidth: "1000px",
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
};

const contactsGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2rem",
  marginBottom: "4rem",
};

const contactCard: React.CSSProperties = {
  background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
  padding: "2rem",
  borderRadius: "16px",
  border: "1px solid #333",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};

const contactHeader: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

const contactIcon: React.CSSProperties = {
  fontSize: "2.5rem",
  width: "60px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
};

const contactInfo: React.CSSProperties = {
  flex: 1,
};

const contactPlatform: React.CSSProperties = {
  fontSize: "1.3rem",
  fontWeight: "600",
  color: "#fff",
  margin: "0 0 0.3rem 0",
};

const contactUsername: React.CSSProperties = {
  fontSize: "1rem",
  color: "#ccc",
  margin: 0,
  opacity: 0.9,
};

const contactDescription: React.CSSProperties = {
  color: "#999",
  fontSize: "0.9rem",
  lineHeight: "1.5",
  margin: 0,
  flex: 1,
};

const contactButton: React.CSSProperties = {
  display: "inline-block",
  padding: "0.8rem 1.5rem",
  background: "rgba(255, 255, 255, 0.1)",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "8px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  fontWeight: "500",
  textAlign: "center",
};

const footer: React.CSSProperties = {
  textAlign: "center",
  paddingTop: "3rem",
  borderTop: "1px solid #333",
};

const finalMessage: React.CSSProperties = {
  marginTop: "2rem",
};

const footerContent: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  textDecoration: "none",
  color: "#fff",
  textShadow: "0 0 10px #fff",
};

const footerAvatar: React.CSSProperties = {
  width: "50px",
  borderRadius: "50%",
};
