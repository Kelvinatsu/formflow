import React from 'react';
import { ArrowRight, Code, ShieldCheck, Database, X } from 'lucide-react';
import './WhyFormFlow.css';

const WhyFormFlow = () => {
  return (
    <section id="why-formflow" className="why-section">
      <div className="why-container">
        
        <div className="why-header">
          <h2>Why FormFlow?</h2>
          <p>Everything you need to build, process, and manage forms without touching backend code.</p>
        </div>

        <div className="why-features-grid">
          
          {/* Card 1 */}
          <div className="why-grid-card">
            <div className="wgc-visual">
              <div className="code-window small">
                <div className="code-header">
                  <div className="dots"><i></i><i></i><i></i></div>
                  <span className="file-name">index.html</span>
                </div>
                <div className="code-body">
<pre><code><span className="tag">&lt;form</span> <span className="attr">action=</span><span className="string">"https://api.formflow.dev/f/id"</span> <span className="attr">method=</span><span className="string">"POST"</span><span className="tag">&gt;</span>
  <span className="tag">&lt;label&gt;</span>Email:<span className="tag">&lt;/label&gt;</span>
  <span className="tag">&lt;input</span> <span className="attr">type=</span><span className="string">"email"</span> <span className="attr">name=</span><span className="string">"email"</span> <span className="tag">/&gt;</span>
  <span className="tag">&lt;button</span> <span className="attr">type=</span><span className="string">"submit"</span><span className="tag">&gt;</span>Subscribe<span className="tag">&lt;/button&gt;</span>
<span className="tag">&lt;/form&gt;</span></code></pre>
                </div>
              </div>
            </div>
            <div className="wgc-text">
              <div className="why-icon-badge"><Code size={24} strokeWidth={2.5} /></div>
              <h3>Plug &amp; Play HTML Forms</h3>
              <p>Forget setting up Node.js servers, configuring CORS, or wrestling with PHP scripts. Just point your standard HTML form's <code>action</code> attribute to our endpoint instantly.</p>
              <a href="/docs" className="why-link">Read the docs <ArrowRight size={16} /></a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="why-grid-card">
            <div className="wgc-visual">
               <div className="spam-mockup small">
                 <div className="spam-header">
                    <h4>Inbox Filter Log</h4>
                 </div>
                 <div className="spam-list">
                    <div className="spam-item protected">
                       <ShieldCheck size={20} fill="#10b981" color="#ffffff" className="spam-icon-fill" />
                       <div className="spam-item-text">
                         <strong>alex@modern.xyz</strong>
                         <span>Validated • 1m ago</span>
                       </div>
                    </div>
                    <div className="spam-item blocked">
                       <X size={20} color="#ef4444" />
                       <div className="spam-item-text">
                         <strong>xr992@spam.xyz</strong>
                         <span>Blocked • 5m ago</span>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
            <div className="wgc-text">
              <div className="why-icon-badge"><ShieldCheck size={24} strokeWidth={2.5} /></div>
              <h3>Invisible Spam Protection</h3>
              <p>Stop relying on exhausting visual CAPTCHAs. FormFlow utilizes adaptive machine learning and hidden honeypots to silently destroy 99% of junk submissions.</p>
              <a href="/features" className="why-link">Security protocols <ArrowRight size={16} /></a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="why-grid-card">
             <div className="wgc-visual">
               <div className="data-mockup small">
                  <div className="export-ui">
                     <h4>Export Submissions</h4>
                     <p>Download <strong>1,248</strong> recent entries.</p>
                     <div className="export-btns">
                        <button className="export-btn csv">.CSV Archive</button>
                        <button className="export-btn json">.JSON Object</button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="wgc-text">
              <div className="why-icon-badge"><Database size={24} strokeWidth={2.5} /></div>
              <h3>Total Data Ownership</h3>
              <p>Your business's most critical asset is its data. FormFlow makes it incredibly frictionless to securely export, migrate, or bulk download your form submissions.</p>
              <a href="/docs" className="why-link">Review data engine <ArrowRight size={16} /></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyFormFlow;
