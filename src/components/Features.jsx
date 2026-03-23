import React from 'react';
import { Check, X, AlertTriangle, FileText, Zap, Globe, Lock, Mail, Paperclip, Download, ShieldCheck, Server } from 'lucide-react';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        
        <div className="features-header">
          <h2>Features</h2>
          <p>See how we compare to other form handling solutions</p>
        </div>

        {/* Comparison Table */}
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>FormFlow</th>
                <th>Formspree</th>
                <th>Getform</th>
                <th>Kwesforms</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Form builder</td>
                <td><div className="check-badge"><Check strokeWidth={3} size={14} /></div></td>
                <td><div className="cross-badge"><X strokeWidth={3} size={14} /></div></td>
                <td><div className="cross-badge"><X strokeWidth={3} size={14} /></div></td>
                <td><div className="cross-badge"><X strokeWidth={3} size={14} /></div></td>
              </tr>
              <tr>
                <td>Form backend</td>
                <td><div className="check-badge"><Check strokeWidth={3} size={14} /></div></td>
                <td><div className="check-badge"><Check strokeWidth={3} size={14} /></div></td>
                <td><div className="check-badge"><Check strokeWidth={3} size={14} /></div></td>
                <td><div className="check-badge"><Check strokeWidth={3} size={14} /></div></td>
              </tr>
              <tr>
                <td>Open source</td>
                <td><div className="check-badge"><Check strokeWidth={3} size={14} /></div></td>
                <td><div className="cross-badge"><X strokeWidth={3} size={14} /></div></td>
                <td><div className="cross-badge"><X strokeWidth={3} size={14} /></div></td>
                <td><div className="cross-badge"><X strokeWidth={3} size={14} /></div></td>
              </tr>
              <tr>
                <td>Self-host option</td>
                <td><div className="check-badge"><Check strokeWidth={3} size={14} /></div></td>
                <td><div className="cross-badge"><X strokeWidth={3} size={14} /></div></td>
                <td><div className="cross-badge"><X strokeWidth={3} size={14} /></div></td>
                <td><div className="cross-badge"><X strokeWidth={3} size={14} /></div></td>
              </tr>
              <tr>
                <td>Built-in CAPTCHA</td>
                <td><div className="check-badge"><Check strokeWidth={3} size={14} /></div></td>
                <td><div className="warn-badge"><AlertTriangle strokeWidth={3} size={12} /> Paid</div></td>
                <td><div className="warn-badge"><AlertTriangle strokeWidth={3} size={12} /> Paid</div></td>
                <td><div className="check-badge"><Check strokeWidth={3} size={14} /></div></td>
              </tr>
              <tr>
                <td>HTML / static site support</td>
                <td><div className="check-badge"><Check strokeWidth={3} size={14} /></div></td>
                <td><div className="check-badge"><Check strokeWidth={3} size={14} /></div></td>
                <td><div className="check-badge"><Check strokeWidth={3} size={14} /></div></td>
                <td><div className="check-badge"><Check strokeWidth={3} size={14} /></div></td>
              </tr>
              <tr className="pricing-row">
                <td>Pricing</td>
                <td><span className="price-badge formflow-price">$5/mo</span></td>
                <td><span className="price-badge">$12/mo</span></td>
                <td><span className="price-badge">$10/mo</span></td>
                <td><span className="price-badge">$15/mo</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 9 Features Grid */}
        <div className="features-grid-simple">
          
          <div className="fs-card">
            <div className="fs-icon"><FileText size={28} strokeWidth={2} /></div>
            <h3>Form Builder</h3>
            <p>Drag-and-drop. No coding needed. Shareable link instantly.</p>
          </div>

          <div className="fs-card">
            <div className="fs-icon"><Zap size={28} strokeWidth={2.5} /></div>
            <h3>Form Endpoint</h3>
            <p>One endpoint URL for any form on any platform.</p>
          </div>

          <div className="fs-card">
            <div className="fs-icon"><Globe size={28} strokeWidth={2} /></div>
            <h3>Works with HTML forms</h3>
            <p>Point your HTML form action to FormFlow. Done.</p>
          </div>

          <div className="fs-card">
            <div className="fs-icon"><Lock size={28} strokeWidth={2.5} /></div>
            <h3>Spam Protection</h3>
            <p>Honeypot fields and rate limiting built in.</p>
          </div>

          <div className="fs-card">
            <div className="fs-icon"><Mail size={28} strokeWidth={2} /></div>
            <h3>Email Notifications</h3>
            <p>Instant alerts for every submission.</p>
          </div>

          <div className="fs-card">
            <div className="fs-icon"><Paperclip size={28} strokeWidth={2.5} /></div>
            <h3>File Uploads</h3>
            <p>Accept resumes, images, and documents.</p>
          </div>

          <div className="fs-card">
            <div className="fs-icon"><Download size={28} strokeWidth={2} /></div>
            <h3>CSV Export</h3>
            <p>Download all submissions anytime.</p>
          </div>

          <div className="fs-card">
            <div className="fs-icon"><ShieldCheck size={28} strokeWidth={2.5} /></div>
            <h3>GDPR Friendly</h3>
            <p>No tracking, no data selling.</p>
          </div>

          <div className="fs-card">
            <div className="fs-icon"><Server size={28} strokeWidth={2.5} /></div>
            <h3>Self-Hostable</h3>
            <p>Run on your own infrastructure with Docker.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;
