import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '80px 24px 40px', background: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '64px' }}>
        
        <div style={{ flex: '1 1 300px' }}>
           <Logo />
           <p style={{ color: 'var(--secondary-color)', marginTop: '20px', lineHeight: '1.6', fontSize: '0.95rem', maxWidth: '300px' }}>
             The ultimate developer-first form backend and visual builder. Collect data effortlessly.
           </p>
           <div style={{ display: 'flex', gap: '16px', marginTop: '28px' }}>
             <a href="mailto:kelvinatsu213@gmail.com" style={{ color: 'var(--secondary-color)', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = '#3b82f6'} onMouseOut={(e) => e.target.style.color = 'var(--secondary-color)'}><Mail size={20} /></a>
             <a href="https://github.com" style={{ color: 'var(--secondary-color)', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = '#3b82f6'} onMouseOut={(e) => e.target.style.color = 'var(--secondary-color)'}><Github size={20} /></a>
             <a href="#" style={{ color: 'var(--secondary-color)', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = '#3b82f6'} onMouseOut={(e) => e.target.style.color = 'var(--secondary-color)'}><Twitter size={20} /></a>
           </div>
        </div>
        
        <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
           <div>
             <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px', color: 'var(--text-color)' }}>Product</h4>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href="/features" style={{ color: 'var(--secondary-color)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Features</a>
                <a href="/#pricing" style={{ color: 'var(--secondary-color)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Pricing</a>
                <a href="/docs" style={{ color: 'var(--secondary-color)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Documentation</a>
             </div>
           </div>
           <div>
             <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px', color: 'var(--text-color)' }}>Company</h4>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href="/blog" style={{ color: 'var(--secondary-color)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Blog</a>
                <a href="mailto:kelvinatsu213@gmail.com" style={{ color: 'var(--secondary-color)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Contact</a>
                <Link to="/privacy" style={{ color: 'var(--secondary-color)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Privacy Policy</Link>
             </div>
           </div>
        </div>
        
      </div>
      
      <div style={{ maxWidth: '1200px', margin: '80px auto 0', borderTop: '1px solid var(--border-color)', paddingTop: '32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
        <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} FormFlow. Built with precision.
        </div>
        <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
          Questions? Contact us at <a href="mailto:kelvinatsu213@gmail.com" style={{color: '#3b82f6', textDecoration: 'none'}}>kelvinatsu213@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
