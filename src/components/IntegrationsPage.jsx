import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { CheckCircle2 } from 'lucide-react';
import './IntegrationsPage.css';

const tools = [
  { id: 'zapier', name: 'Zapier', desc: 'Automate workflows across 5,000+ apps. Connect your forms to virtually any service online.', color: '#ff4a00' },
  { id: 'make', name: 'Make', desc: 'Design, build, and automate anything from tasks to complex enterprise workflows.', color: '#4c2db3' },
  { id: 'slack', name: 'Slack', desc: 'Send form submission alerts and payload data directly to your team channels.', color: '#e51670' },
  { id: 'notion', name: 'Notion', desc: 'Automatically create databases and populated knowledge pages from new submissions.', color: '#000000' },
  { id: 'sheets', name: 'Google Sheets', desc: 'Log all form entries instantly into a living spreadsheet without code.', color: '#0f9d58' },
  { id: 'airtable', name: 'Airtable', desc: 'Organize raw form data directly into powerful, relational bases.', color: '#f82b60' },
  { id: 'webhook', name: 'Custom Webhooks', desc: 'Send raw JSON payloads programmatically to any API endpoint universe.', color: '#3b82f6' },
  { id: 'mailchimp', name: 'Mailchimp', desc: 'Sync new form leads directly into your marketing subscriber lists.', color: '#FFE01B' },
  { id: 'discord', name: 'Discord', desc: 'Push aesthetic webhook alerts to your community or admin servers.', color: '#5865F2' }
];

const IntegrationsPage = () => {
  const [connectedTools, setConnectedTools] = useState([]);

  const handleConnect = (id) => {
    if (connectedTools.includes(id)) {
      setConnectedTools(connectedTools.filter(t => t !== id));
    } else {
      setConnectedTools([...connectedTools, id]);
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="integrations-page-container">
        <div className="ip-header">
          <h1>Apps &amp; Integrations</h1>
          <p>Connect FormFlow directly to your favorite tools. Every form submission securely triggers cross-platform workflows instantly.</p>
        </div>

        <div className="ip-grid">
          {tools.map(tool => {
            const isConnected = connectedTools.includes(tool.id);
            // Ensure contrast on yellow logo
            const textContrast = tool.id === 'mailchimp' ? '#000000' : '#ffffff';

            return (
              <div key={tool.id} className={`ip-card ${isConnected ? 'connected' : ''}`}>
                <div className="ip-card-header">
                  <div className="ip-logo" style={{ backgroundColor: tool.color, color: textContrast }}>
                    {tool.name.charAt(0)}
                  </div>
                  <h3>{tool.name}</h3>
                </div>
                <p>{tool.desc}</p>
                <button 
                  className={`ip-connect-btn ${isConnected ? 'active' : ''}`}
                  onClick={() => handleConnect(tool.id)}
                >
                  {isConnected ? <><CheckCircle2 size={18} /> Connected</> : 'Connect App'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IntegrationsPage;
