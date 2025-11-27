'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div style={section} ref={ref}>
      <div style={container}>
        <div style={content}>
          <div style={textSection} className={isVisible ? 'scroll-fade-in-left visible' : 'scroll-fade-in-left'}>
            <h2 style={title}>
              <span className="glow-text">About Me</span>
            </h2>
            
            <div style={description}>
              <p style={paragraph}>
                I'm a passionate <span style={highlight}>full-stack developer</span> and 
                4th year Computer Science student. I love creating efficient 
                web solutions and continuously expanding my technical expertise.
              </p>
              
              <p style={paragraph}>
                Currently focused on <span style={highlight}>web development technologies</span>, 
                building projects to enhance practical skills, and aspiring to 
                become a professional website developer.
              </p>
            </div>
            
            <div style={features}>
              <div style={feature}>
                <span style={featureIcon}>💻</span>
                <span>Focusing on web development technologies</span>
              </div>
              <div style={feature}>
                <span style={featureIcon}>🚀</span>
                <span>Building projects to enhance practical skills</span>
              </div>
              <div style={feature}>
                <span style={featureIcon}>🔥</span>
                <span>Aspiring to become a professional website developer</span>
              </div>
            </div>
          </div>
          
          <div style={visualSection} className={isVisible ? 'scroll-fade-in-right visible' : 'scroll-fade-in-right'}>
            <div style={codeWindow}>
              <div style={windowHeader}>
                <div style={windowControls}>
                  <div style={control}></div>
                  <div style={control}></div>
                  <div style={control}></div>
                </div>
              </div>
              <div style={codeContent}>
                <pre style={code}>
{`function Developer() {
  return {
    name: "woookle",
    skills: ["JS", "TS", "React", "Node"],
    passion: "Creating web apps",
    status: "Always learning 💫"
  };
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const section: React.CSSProperties = {
  padding: '5rem 0',
  background: '#000'
}

const container: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem'
}

const content: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  alignItems: 'center'
}

const textSection: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
}

const title: React.CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem'
}

const description: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}

const paragraph: React.CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
  color: '#ccc'
}

const highlight: React.CSSProperties = {
  color: '#fff',
  fontWeight: '600',
  textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
}

const features: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}

const feature: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  fontSize: '1rem',
  color: '#fff',
  padding: '1rem',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '8px',
  border: '1px solid rgba(255, 255, 255, 0.1)'
}

const featureIcon: React.CSSProperties = {
  fontSize: '1.2rem'
}

const visualSection: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center'
}

const codeWindow: React.CSSProperties = {
  background: '#1a1a1a',
  border: '1px solid #333',
  borderRadius: '12px',
  overflow: 'hidden',
  maxWidth: '400px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
}

const windowHeader: React.CSSProperties = {
  background: '#2a2a2a',
  padding: '1rem',
  borderBottom: '1px solid #333',
  display: 'flex',
  alignItems: 'center'
}

const windowControls: React.CSSProperties = {
  display: 'flex',
  gap: '0.5rem'
}

const control: React.CSSProperties = {
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  background: '#444'
}

const codeContent: React.CSSProperties = {
  padding: '1.5rem'
}

const code: React.CSSProperties = {
  color: '#00ff88',
  fontSize: '0.9rem',
  lineHeight: '1.4',
  margin: 0,
  fontFamily: 'monospace'
}