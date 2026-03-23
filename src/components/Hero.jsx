import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Hero.css';

const Hero = () => {
  const { user } = useAuth();
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="badge">
          <Sparkles size={16} className="badge-icon" />
          <span>FormFlow 2.0 is here</span>
        </div>
        
        <h1 className="hero-title">
          Build beautiful forms <br />
          <span className="text-gradient">without the hassle</span>.
        </h1>
        
        <p className="hero-subtitle">
          Design stunning, high-converting forms in minutes with our intuitive builder. Collect data seamlessly, automate your workflows, and engage your audience—no coding required.
        </p>
        
        <div className="hero-actions">
          <Link to={user ? "/builder" : "/signup"} className="btn-primary hero-btn" style={{ textDecoration: 'none' }}>
            Get Started 
            <ArrowRight size={18} />
          </Link>
          <Link to="/features" className="btn-outline hero-btn" style={{ textDecoration: 'none' }}>
            Explore Features
          </Link>
        </div>
        
        <div className="hero-features">
          <span>Easy Integration</span>
          <span className="dot">•</span>
          <span>Spam Protection</span>
          <span className="dot">•</span>
          <span>Email Notifications</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
