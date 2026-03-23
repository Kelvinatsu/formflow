import React from 'react';
import { Github, Server, Lock, Smile, Layers, Mail } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Open Source / Terminal Header */}
        <div className="about-header">
          <h2 className="section-title">FormFlow is Open Source</h2>
          <p className="section-subtitle">Self-host for unlimited free usage or use our managed high-availability cloud.</p>
          
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots"><i></i><i></i><i></i></div>
              <div className="terminal-title">bash</div>
            </div>
            <div className="terminal-body">
              <div className="term-line">
                <span className="term-prompt">$</span> git clone https://github.com/formflow/formflow.git
              </div>
              <div className="term-line">
                <span className="term-prompt">$</span> cd formflow && docker-compose up -d
              </div>
              <div className="term-line output">
                <span style={{color: '#a78bfa'}}>[+]</span> Starting formflow-db ... done<br/>
                <span style={{color: '#a78bfa'}}>[+]</span> Starting formflow-api ... done<br/>
                🚀 Dashboard running at http://localhost:3000
              </div>
            </div>
          </div>
        </div>

        {/* Why Self-Host Grid */}
        <div className="why-grid">
           <h3 className="why-title">Why Self-Host?</h3>
           <div className="why-cards">
             <div className="why-card">
                <Lock className="why-icon" />
                <h4>Complete Control</h4>
                <p>Full ownership of your data, infrastructure, and privacy.</p>
             </div>
             <div className="why-card">
                <Smile className="why-icon" />
                <h4>No Vendor Lock-in</h4>
                <p>Open source means you can customize and extend forever.</p>
             </div>
             <div className="why-card">
                <Layers className="why-icon" />
                <h4>Enterprise Ready</h4>
                <p>Deploy on your own infrastructure with your stringent security policies.</p>
             </div>
             <div className="why-card">
                <Server className="why-icon" />
                <h4>Docker Ready</h4>
                <p>One-click deployment with Docker Compose makes standing it up a breeze.</p>
             </div>
           </div>
        </div>

        {/* Community */}
        <div className="community-section">
          <div className="community-header">
            <h2>Join the Community</h2>
            <p>We're building in public. Connect with developers who value simplicity, freedom, and transparency.</p>
          </div>
          
          <div className="community-cards">
            {/* GitHub Card */}
            <div className="community-card">
              <div className="cc-icon-wrapper">
                <Github size={32} />
              </div>
              <h3>Star us on GitHub</h3>
              <p>Help us grow by starring the repository and contributing to the open source project.</p>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="cc-btn">
                View Repository
              </a>
              <span className="cc-email-text" style={{ visibility: 'hidden' }}>spacer</span>
            </div>

            {/* Contact Card */}
            <div className="community-card">
              <div className="cc-icon-wrapper">
                <Mail size={32} />
              </div>
              <h3>Get in Touch</h3>
              <p>Have questions or need help? Reach out to us directly.</p>
              <a href="mailto:kelvinatsu213@gmail.com" className="cc-btn">
                Contact Us
              </a>
              <span className="cc-email-text">kelvinatsu213@gmail.com</span>
            </div>
          </div>
          
          <div className="developers-value-banner">
             <h3>FormFlow is for developers who value:</h3>
             <div className="values-list">
               <div className="value-item">Simplicity</div>
               <div className="value-item">Freedom</div>
               <div className="value-item">Transparency</div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
