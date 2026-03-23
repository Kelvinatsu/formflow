import React from 'react';
import { BookOpen, Code, Webhook, ShieldAlert, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import './Docs.css';

const Docs = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="docs-layout">
        {/* Sidebar */}
        <aside className="docs-sidebar">
          <div className="docs-search">
            <input type="text" placeholder="Search documentation..." />
          </div>
          <nav className="docs-nav">
            <div className="docs-nav-group">
              <h4>Getting Started</h4>
              <a href="#" className="active">Introduction</a>
              <a href="#">Quick Start</a>
              <a href="#">Authentication</a>
            </div>
            <div className="docs-nav-group">
              <h4>Core Concepts</h4>
              <a href="#">Form Endpoints</a>
              <a href="#">Spam Filtering</a>
              <a href="#">File Uploads</a>
            </div>
            <div className="docs-nav-group">
              <h4>API Reference</h4>
              <a href="#">REST API</a>
              <a href="#">Webhooks</a>
              <a href="#">Client Libraries</a>
            </div>
          </nav>
        </aside>

        {/* Content */}
        <main className="docs-content">
          <div className="docs-breadcrumb">Docs / Getting Started / Introduction</div>
          <h1>Introduction to FormFlow</h1>
          <p className="docs-lead">
            FormFlow is the ultimate developer-first form backend and visual builder. Whether you are creating simple contact forms or complex multi-step application flows, FormFlow provides the infrastructure so you can focus on building your product.
          </p>

          <div className="docs-cards">
             <div className="docs-card">
                <Code size={24} className="docs-card-icon" />
                <h3>HTML Form Endpoint</h3>
                <p>Connect your existing statically-generated forms to our secure backend in seconds.</p>
                <a href="#">Read Guide <ArrowRight size={14} /></a>
             </div>
             <div className="docs-card">
                <BookOpen size={24} className="docs-card-icon" />
                <h3>Visual Builder</h3>
                <p>Use our drag-and-drop builder to create, host, and embed beautiful forms.</p>
                <a href="#">Read Guide <ArrowRight size={14} /></a>
             </div>
             <div className="docs-card">
                <ShieldAlert size={24} className="docs-card-icon" />
                <h3>Spam Protection</h3>
                <p>Learn how our AI engine completely eradicates bot submissions automatically.</p>
                <a href="#">Read Guide <ArrowRight size={14} /></a>
             </div>
             <div className="docs-card">
                <Webhook size={24} className="docs-card-icon" />
                <h3>Webhooks</h3>
                <p>Trigger logic in your own applications every time a highly-scored form is submitted.</p>
                <a href="#">Read Guide <ArrowRight size={14} /></a>
             </div>
          </div>

          <h2>Quick Start</h2>
          <p>Point your standard HTML form's `action` attribute to your FormFlow endpoint URL provided in the dashboard:</p>
          
          <div className="code-block">
            <div className="code-header">
              <span>HTML</span>
              <button>Copy</button>
            </div>
            <pre><code>{`<form action="https://api.formflow.dev/v1/submit/your_form_id" method="POST">
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Submit</button>
</form>`}</code></pre>
          </div>
          
          <p>That's it! Your form will instantly begin accepting submissions, with built-in spam validation and notifications.</p>
        </main>
      </div>
    </div>
  );
};

export default Docs;
