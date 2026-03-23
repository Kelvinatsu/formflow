import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Integrations.css';

const tools = [
  { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier-1.svg' },
  { name: 'Make', logo: 'https://cdn.worldvectorlogo.com/logos/integromat-1.svg' }, // Integromat/Make logo
  { name: 'Notion', logo: 'https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg' },
  { name: 'Google Sheets', logo: 'https://cdn.worldvectorlogo.com/logos/google-sheets-1.svg' },
  { name: 'Slack', logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' },
  { name: 'Airtable', logo: 'https://cdn.worldvectorlogo.com/logos/airtable.svg' },
];

const Integrations = () => {
  const { user } = useAuth();
  
  return (
    <section id="integrations" className="integrations-section">
      <div className="integrations-container">
        
        <div className="integrations-header">
           <div className="badge" style={{marginBottom: '24px', display: 'inline-flex', padding: '6px 16px', borderRadius: '100px', background: '#f5f3ff', color: '#7c3aed', fontWeight: '600', fontSize: '0.85rem', border: '1px solid #ede9fe'}}><ArrowRight size={14} className="badge-icon" /> Seamless syncing</div>
          <h2 className="section-title" style={{color: '#0f172a'}}>Connect FormFlow to Any Tool</h2>
          <p className="section-subtitle">Every form submission can trigger a webhook to any URL instantly.</p>
        </div>

        <div className="tools-marquee-wrapper">
          <div className="tools-marquee">
             {/* Duplicate array for infinite scroll effect */}
            {[...tools, ...tools, ...tools].map((tool, idx) => (
              <div key={idx} className="tool-card">
                <div className="tool-logo-wrapper">
                   {/* Fallback pattern if SVG fails to load */}
                   <img src={tool.logo} alt={tool.name} className="tool-logo" onError={(e) => e.target.style.display='none'} />
                   <span className="tool-name-fallback">{tool.name.charAt(0)}</span>
                </div>
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="integrations-footer">
          <p>Works with Zapier, Make, Slack, Notion, Google Sheets, Airtable and 5,000+ more.</p>
          <Link to={user ? "/integrations" : "/signup"} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          Connect your tools <ArrowRight size={20} />
        </Link>
      </div>
    </div>
    </section>
  );
};

export default Integrations;
