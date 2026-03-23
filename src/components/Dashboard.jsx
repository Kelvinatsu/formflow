import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Folder, 
  FileText, 
  CreditCard, 
  LogOut, 
  File, 
  ClipboardList, 
  Link as LinkIcon, 
  Plus, 
  Check,
  X,
  TrendingUp,
  MoreVertical,
  Receipt,
  ChevronLeft,
  Settings,
  Circle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout, userForms, addForm } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newFormName, setNewFormName] = useState('');
  const [selectedForm, setSelectedForm] = useState(null);
  const [formTab, setFormTab] = useState('overview');
  const [quickStartTab, setQuickStartTab] = useState('preview');
  const [openSnippet, setOpenSnippet] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    // Could add a toast notification here later
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    const name = newFormName.trim() || 'New Form';
    const date = new Date().toLocaleDateString('en-GB');
    addForm({ name, date, submissions: 0, status: 'Active' });
    setNewFormName('');
    setShowCreateModal(false);
    navigate('/builder');
  };

  return (
    <div className="dashboard-container">
      {/* Top Navbar */}
      <header className="dashboard-topbar">
        <div className="topbar-logo" onClick={() => navigate('/')}>
          <div className="topbar-logo-icon">
            <div className="lines"></div>
          </div>
          <span className="topbar-brand">FormFlow</span>
        </div>
        <div className="topbar-right">
          <div className="topbar-avatar">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kelvin" alt="Avatar" />
          </div>
        </div>
      </header>

      <div className="dashboard-body">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-profile">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kelvin" alt="Profile" className="sidebar-avatar" />
            <div className="sidebar-user-info">
              <span className="sidebar-name">KELVIN DJAYOURI</span>
              <span className="sidebar-email">kelvinatsu213@gmail.com</span>
            </div>
          </div>

          <nav className="sidebar-nav">
            <button className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
              <Folder size={18} /> Dashboard
            </button>
            <button className={`nav-item ${activeTab === 'forms' ? 'active' : ''}`} onClick={() => setActiveTab('forms')}>
              <FileText size={18} /> Forms
            </button>
            <button className={`nav-item ${activeTab === 'billing' ? 'active' : ''}`} onClick={() => setActiveTab('billing')}>
              <CreditCard size={18} /> Billing
            </button>
          </nav>

          <div className="sidebar-footer">
            <button className="signout-btn" onClick={handleLogout}>
              <LogOut size={18} /> Sign Out
            </button>
          </div>
        </aside>

        <main className="dashboard-main">
          <div className="dashboard-content-wrapper">
            
            {selectedForm ? (
               <div className="form-details-view">
                 <div className="fdc-header">
                   <button className="btn-back-link" onClick={() => { setSelectedForm(null); setFormTab('overview'); }}>
                     <ChevronLeft size={16}/> Back to Forms
                   </button>
                   <h1>{selectedForm.name || 'kaddev'}</h1>
                    <div className="fdc-tabs">
                      <button className={`fdc-tab ${formTab === 'overview' ? 'active' : ''}`} onClick={() => setFormTab('overview')}><Folder size={14}/> Overview</button>
                      <button className={`fdc-tab ${formTab === 'submissions' ? 'active' : ''}`} onClick={() => setFormTab('submissions')}><FileText size={14}/> Submissions</button>
                      <button className={`fdc-tab ${formTab === 'integrations' ? 'active' : ''}`} onClick={() => setFormTab('integrations')}><LinkIcon size={14}/> Integrations</button>
                      <button className={`fdc-tab ${formTab === 'settings' ? 'active' : ''}`} onClick={() => setFormTab('settings')}><Settings size={14}/> Settings</button>
                   </div>
                 </div>
                 
                 <div className="fdc-content">
                    {formTab === 'overview' && (
                      <>
                        <div className="fdc-card">
                           <h3>Form Builder</h3>
                           <p>Build your form with drag-and-drop. Share a link instantly; no coding needed.</p>
                           <button className="btn-dark-create" onClick={() => navigate('/builder')} style={{marginTop: '16px'}}>
                             Open Builder &rarr;
                           </button>
                        </div>

                        <div className="fdc-card">
                           <h3>Quick Start Checklist</h3>
                           <p>Get your form live and collecting submissions in minutes.</p>
                           <ul className="checklist">
                             <li className="checklist-item done"><Check size={18} /> <span>Form Created</span></li>
                             <li className="checklist-item"><Circle size={18} /> <span>Copy a Template or HTML Snippet</span></li>
                             <li className="checklist-item"><Circle size={18} /> <span>Add Form to Live Website</span></li>
                             <li className="checklist-item"><Circle size={18} /> <span>Receive First Submission</span></li>
                           </ul>
                        </div>

                        <div className="fdc-card stats-card">
                           <h3>Form Statistics</h3>
                           <div className="fdc-stats-grid">
                              <div className="fdc-stat"><h2>{selectedForm.submissions || 0}</h2><span>Total Submissions</span></div>
                              <div className="fdc-stat"><h2>0</h2><span>This Week</span></div>
                              <div className="fdc-stat"><h2>0.0%</h2><span>Spam Rate</span></div>
                              <div className="fdc-stat"><h2>{selectedForm.date ? 'N/A' : 'N/A'}</h2><span>Created</span></div>
                           </div>
                        </div>

                        {/* Additional Cards per UX design */}
                        
                        <div className="fdc-card" style={{padding: '0', overflow: 'hidden'}}>
                           <div style={{padding: '24px', borderBottom: '1px solid #e5e7eb'}}>
                             <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '6px', padding: '12px 16px', marginBottom: '24px', fontSize: '0.9rem', color: '#92400e'}}>
                               Most customers using this template hit 50+ submissions during internship campaigns.
                             </div>
                             <h3 style={{fontSize: '1.2rem', margin: '0 0 8px'}}>Quick Start Template</h3>
                             <p style={{fontWeight: '600', color: '#111827', margin: '0 0 4px'}}>Popular: Internship / Job Application Form</p>
                             <p style={{color: '#6b7280', fontSize: '0.9rem', margin: '0 0 24px'}}>Running a hiring or internship campaign? Use this ready-made application template with resume upload and spam protection.</p>
                             <div style={{display: 'flex', gap: '12px'}}>
                               <button className="btn-bhi-dark">Copy HTML Code</button>
                               <button className="btn-bhi-outline">Download .html File</button>
                             </div>
                           </div>
                           
                           <div style={{background: '#f9fafb', padding: '0 24px 24px'}}>
                             <div style={{display: 'flex', gap: '24px', borderBottom: '1px solid #e5e7eb', paddingTop: '16px'}}>
                               <span 
                                 onClick={() => setQuickStartTab('preview')}
                                 style={{paddingBottom: '12px', borderBottom: `2px solid ${quickStartTab === 'preview' ? '#111827' : 'transparent'}`, fontWeight: quickStartTab === 'preview' ? '600' : '400', color: quickStartTab === 'preview' ? '#111827' : '#6b7280', fontSize: '0.9rem', cursor: 'pointer'}}
                               >Preview</span>
                               <span 
                                 onClick={() => setQuickStartTab('code')}
                                 style={{paddingBottom: '12px', borderBottom: `2px solid ${quickStartTab === 'code' ? '#111827' : 'transparent'}`, fontWeight: quickStartTab === 'code' ? '600' : '400', color: quickStartTab === 'code' ? '#111827' : '#6b7280', fontSize: '0.9rem', cursor: 'pointer'}}
                               >Code</span>
                             </div>
                             
                             <div style={{background: '#ffffff', borderRadius: '8px', border: '1px solid #e5e7eb', margin: '24px 0 0', padding: '32px'}}>
                               {quickStartTab === 'preview' ? (
                                 <>
                                   <h2 style={{fontSize: '1.5rem', margin: '0 0 8px', fontWeight: '700', color: '#111827'}}>Senior Product Designer</h2>
                                   <p style={{color: '#6b7280', fontSize: '0.9rem', margin: '0 0 32px'}}>Design &middot; San Francisco, CA &middot; Full-time</p>
                                   
                                   <div style={{display: 'flex', gap: '24px', borderBottom: '1px solid #e5e7eb', marginBottom: '24px'}}>
                                     <span style={{paddingBottom: '12px', borderBottom: '2px solid #3b82f6', color: '#3b82f6', fontWeight: '500', fontSize: '0.9rem'}}>Job Description</span>
                                     <span style={{paddingBottom: '12px', color: '#6b7280', fontSize: '0.9rem'}}>Apply</span>
                                   </div>
                                   
                                   <div>
                                     <h4 style={{fontSize: '1.05rem', margin: '0 0 12px', fontWeight: '700', color: '#111827'}}>About the role</h4>
                                     <p style={{color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px'}}>We're looking for a Senior Product Designer to help shape the future of our product. You'll work closely with engineering and product to deliver intuitive, beautiful experiences that our customers love.</p>
                                     <h4 style={{fontSize: '1.05rem', margin: '0 0 12px', fontWeight: '700', color: '#111827'}}>What you'll do</h4>
                                     <ul style={{color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '20px', margin: '0'}}>
                                       <li style={{marginBottom: '8px'}}>Lead design for core product areas from discovery to launch</li>
                                       <li>Create wireframes, prototypes, and high-fidelity designs</li>
                                     </ul>
                                   </div>
                                 </>
                               ) : (
                                 <pre style={{background: '#f8fafc', padding: '16px', borderRadius: '6px', fontSize: '0.85rem', color: '#334155', overflowX: 'auto', margin: 0}}>
{`<!-- FormFlow Application Code -->
<form action="https://formflow.dev/api/f/${selectedForm?.id || '2qc65suj'}" method="POST">
  <div>
    <label>Name</label>
    <input type="text" name="name" required />
  </div>
  <div>
    <label>Email</label>
    <input type="email" name="email" required />
  </div>
  <button type="submit">Submit Application</button>
</form>`}
                                 </pre>
                               )}
                             </div>
                           </div>
                        </div>

                        <div className="fdc-card">
                           <h3 style={{fontSize: '1.1rem', margin: '0 0 8px'}}>Endpoint Information</h3>
                           <p style={{color: '#6b7280', fontSize: '0.9rem', margin: '0 0 24px'}}>Use this endpoint in any HTML form.</p>
                           
                           <div className="form-group" style={{marginBottom: '20px'}}>
                             <label style={{display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '8px'}}>Endpoint URL</label>
                             <div style={{display: 'flex', gap: '12px'}}>
                               <input type="text" value={`https://formflow.dev/api/f/${selectedForm?.id || '2qc65suj'}`} readOnly style={{flex: 1, padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.95rem', color: '#4b5563', background: '#fdfdfd'}} />
                               <button className="btn-bhi-dark" onClick={() => handleCopy(`https://formflow.dev/api/f/${selectedForm?.id || '2qc65suj'}`)}>Copy</button>
                             </div>
                           </div>
                           
                           <div className="form-group">
                             <label style={{display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '8px'}}>Form ID</label>
                             <div style={{display: 'flex', gap: '12px'}}>
                               <input type="text" value={selectedForm?.id || '89c11e88-e4a2-44e1-a74e-83ac6f3751c1'} readOnly style={{flex: 1, padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.95rem', color: '#4b5563', background: '#fdfdfd'}} />
                               <button className="btn-bhi-dark" onClick={() => handleCopy(selectedForm?.id || '89c11e88-e4a2-44e1-a74e-83ac6f3751c1')}>Copy</button>
                             </div>
                           </div>
                        </div>

                        <div className="fdc-card">
                           <h3 style={{fontSize: '1.1rem', margin: '0 0 8px'}}>Code Snippets</h3>
                           <p style={{color: '#6b7280', fontSize: '0.9rem', margin: '0 0 16px'}}>Expand the option you need. Copy and paste into your site.</p>
                           
                           <div style={{display: 'flex', flexDirection: 'column'}}>
                             {/* Embed widget */}
                             <div style={{padding: '16px 0', borderBottom: '1px solid #e5e7eb'}}>
                               <div onClick={() => setOpenSnippet(openSnippet === 'embed' ? null : 'embed')} style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '600', color: '#111827', fontSize: '0.95rem'}}>
                                 <span style={{fontSize: '0.6rem', transform: openSnippet === 'embed' ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s'}}>▶</span> Embed widget
                               </div>
                               {openSnippet === 'embed' && <div style={{marginTop: '16px', background: '#f1f5f9', padding: '16px', borderRadius: '6px', fontSize: '0.85rem', color: '#475569'}}>&lt;script src="https://formflow.dev/embed.js"&gt;&lt;/script&gt;</div>}
                             </div>
                             
                             {/* Basic HTML */}
                             <div style={{padding: '16px 0', borderBottom: '1px solid #e5e7eb'}}>
                               <div onClick={() => setOpenSnippet(openSnippet === 'basic' ? null : 'basic')} style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '600', color: '#111827', fontSize: '0.95rem'}}>
                                 <span style={{fontSize: '0.6rem', transform: openSnippet === 'basic' ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s'}}>▶</span> Basic HTML Snippet
                               </div>
                               {openSnippet === 'basic' && <div style={{marginTop: '16px', background: '#f1f5f9', padding: '16px', borderRadius: '6px', fontSize: '0.85rem', color: '#475569'}}>&lt;form action="https://formflow.dev/api/f/xyz" method="POST"&gt;...&lt;/form&gt;</div>}
                             </div>
                             
                             {/* Async JS */}
                             <div style={{padding: '16px 0', borderBottom: '1px solid #e5e7eb'}}>
                               <div onClick={() => setOpenSnippet(openSnippet === 'async' ? null : 'async')} style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '600', color: '#111827', fontSize: '0.95rem'}}>
                                 <span style={{fontSize: '0.6rem', transform: openSnippet === 'async' ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s'}}>▶</span> Async JavaScript Version
                               </div>
                               {openSnippet === 'async' && <div style={{marginTop: '16px', background: '#f1f5f9', padding: '16px', borderRadius: '6px', fontSize: '0.85rem', color: '#475569'}}>fetch('https://formflow.dev/api/f/...', &#123; method: 'POST' &#125;)</div>}
                             </div>
                             
                             {/* File Upload Example */}
                             <div style={{padding: '16px 0 0'}}>
                               <div onClick={() => setOpenSnippet(openSnippet === 'file' ? null : 'file')} style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '600', color: '#111827', fontSize: '0.95rem'}}>
                                 <span style={{fontSize: '0.6rem', transform: openSnippet === 'file' ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s'}}>▶</span> File Upload Example
                               </div>
                               {openSnippet === 'file' && <div style={{marginTop: '16px', background: '#f1f5f9', padding: '16px', borderRadius: '6px', fontSize: '0.85rem', color: '#475569'}}>&lt;input type="file" name="resume" /&gt;</div>}
                             </div>
                           </div>
                        </div>
                      </>
                    )}

                    {formTab === 'submissions' && (
                      <div className="fdc-card">
                        <h3>Submissions</h3>
                        <div className="empty-state-small" style={{marginTop: '20px', padding: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                          <ClipboardList size={32} color="#9ca3af" style={{marginBottom: '12px'}} />
                          <h5 style={{fontSize: '1.1rem', marginBottom: '8px', color: '#111827'}}>No submissions yet</h5>
                          <p style={{color: '#6b7280'}}>When users submit your form, their data will appear here.</p>
                        </div>
                      </div>
                    )}

                    {formTab === 'integrations' && (
                      <div className="fdc-card">
                        <h3>Integrations</h3>
                        <p style={{marginTop: '8px', color: '#6b7280'}}>Connect your form to your favorite tools.</p>
                        <div className="integration-list" style={{ marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                          <button className="btn-bhi-outline"><LinkIcon size={16} /> Google Sheets</button>
                          <button className="btn-bhi-outline"><LinkIcon size={16} /> Slack</button>
                          <button className="btn-bhi-outline"><LinkIcon size={16} /> Webhooks</button>
                        </div>
                      </div>
                    )}

                    {formTab === 'settings' && (
                      <div className="fdc-card">
                        <h3>Form Settings</h3>
                        <div className="form-group" style={{marginTop: '24px'}}>
                          <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Form Name</label>
                          <input type="text" value={selectedForm.name || ''} readOnly className="setting-input" style={{maxWidth: '400px'}} />
                        </div>
                        <div className="form-group" style={{marginTop: '20px'}}>
                          <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Form Status</label>
                          <select className="setting-input" style={{maxWidth: '200px'}}>
                            <option>Active</option>
                            <option>Draft</option>
                            <option>Archived</option>
                          </select>
                        </div>
                        <button className="btn-delete-field" style={{maxWidth: '200px', marginTop: '32px'}}>
                           Archive Form
                        </button>
                      </div>
                    )}
                 </div>
               </div>
            ) : (
              <>
                {activeTab === 'dashboard' && (
              <>
                <div className="dashboard-header">
                  <h1>Dashboard Overview</h1>
                  <p>Welcome back! Here's what's happening with your forms.</p>
                  <div className="plan-badge">
                    <Check size={14} color="#111827" /> Free Plan
                  </div>
                </div>

                <div className="stats-grid">
                  {/* Stat Card 1 */}
                  <div className="stat-card">
                    <div className="stat-info">
                      <span className="stat-label">Total Forms Created</span>
                      <span className="stat-value">{userForms.length}</span>
                      {userForms.length > 0 && (
                        <span className="stat-trend"><TrendingUp size={14}/> All time</span>
                      )}
                    </div>
                    <div className="stat-icon-wrapper">
                      <File size={20} />
                    </div>
                  </div>

                  {/* Stat Card 2 */}
                  <div className="stat-card">
                    <div className="stat-info">
                      <span className="stat-label">Submissions Received Today</span>
                      <span className="stat-value">0</span>
                    </div>
                    <div className="stat-icon-wrapper">
                      <ClipboardList size={20} />
                    </div>
                  </div>

                  {/* Stat Card 3 */}
                  <div className="stat-card">
                    <div className="stat-info">
                      <span className="stat-label">Active Endpoints</span>
                      <span className="stat-value">{userForms.length}</span>
                      {userForms.length > 0 && (
                        <span className="stat-trend"><TrendingUp size={14}/> Live</span>
                      )}
                    </div>
                    <div className="stat-icon-wrapper">
                      <LinkIcon size={20} />
                    </div>
                  </div>
                </div>

                <div className="recent-forms-section">
                  <div className="recent-forms-header">
                    <h2>Recent Forms</h2>
                    <a href="#all" className="view-all-link" onClick={(e) => { e.preventDefault(); setActiveTab('forms'); }}>View all forms &rarr;</a>
                  </div>

                  <div className="recent-forms-box">
                    <div className="recent-forms-header-inner">
                      <h3>Recent Forms</h3>
                      <p>Your latest form configurations</p>
                    </div>
                    
                    {userForms.length === 0 ? (
                      <div className="empty-state">
                        <div className="empty-icon-wrapper">
                          <FileText size={24} />
                        </div>
                        <h4>No forms created yet</h4>
                        <p>Create your first form to get started</p>
                        <button className="btn-dark-create" onClick={() => setShowCreateModal(true)}>
                          <Plus size={16} /> Create New Form
                        </button>
                      </div>
                    ) : (
                      <div className="populated-state">
                        {userForms.map((form) => (
                          <div key={form.id} className="recent-form-item" onClick={() => setSelectedForm(form)}>
                            <div className="rfi-left">
                               <div className="rfi-icon"><FileText size={16}/></div>
                               <div className="rfi-details">
                                 <h4>{form.name}</h4>
                                 <span>Created {form.date}</span>
                               </div>
                            </div>
                            <div className="rfi-right">
                               <div className="rfi-stats">
                                 <span className="rfi-count">{form.submissions}</span>
                                 <span className="rfi-label">submissions</span>
                               </div>
                               <span className="rfi-status">Active</span>
                               <button className="rfi-menu"><MoreVertical size={16}/></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {userForms.length > 0 && (
                     <div className="dashboard-bottom-action">
                       <button className="btn-dark-create" onClick={() => setShowCreateModal(true)}>
                         <Plus size={16} /> Create New Form
                       </button>
                     </div>
                  )}
                </div>
              </>
            )}

            {activeTab === 'forms' && (
              <>
                <div className="dashboard-header">
                  <h1>My Forms</h1>
                  <p>Manage and organize your forms.</p>
                </div>
                <div className="forms-list-container">
                   <button className="btn-dark-create" onClick={() => setShowCreateModal(true)} style={{marginBottom: '24px'}}>
                      <Plus size={16} /> Create New Form
                   </button>
                   <div className="forms-list">
                      {[
                        { name: 'Contact Form', responses: 12, date: '2 days ago', status: 'Active' },
                        { name: 'Newsletter Signup', responses: 84, date: '1 week ago', status: 'Active' }
                      ].map((f, i) => (
                         <div key={i} className="form-list-item" onClick={() => setSelectedForm({id: i, ...f})}>
                            <div className="fli-left">
                               <FileText size={20} color="#9ca3af" />
                               <div className="fli-info">
                                 <h4>{f.name}</h4>
                                 <span>Updated {f.date}</span>
                               </div>
                            </div>
                            <div className="fli-right">
                               <span className="fli-resp">{f.responses} Responses</span>
                               <span className="fli-status">{f.status}</span>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
              </>
            )}

              </>
            )}

            {activeTab === 'billing' && (
              <>
                <div className="dashboard-header">
                  <h1>Billing Overview</h1>
                  <p>Manage your billing, subscription plan, and payment methods.</p>
                </div>

                <div className="billing-grid">
                  <div className="billing-left">
                     <div className="settings-card">
                       <div className="settings-card-header">
                         <h3>Current Plan</h3>
                         <span className="plan-badge-green">Active</span>
                       </div>
                       <div className="plan-details-box">
                         <div className="plan-details-top">
                           <div>
                             <h4>Free Plan</h4>
                             <p>Basic form features and standard limits.</p>
                           </div>
                           <div className="plan-price">
                             <span className="price-amount">$0</span>
                             <span className="price-interval">/mo</span>
                           </div>
                         </div>
                         <div className="plan-usage">
                           <div className="usage-header">
                             <span>Form Submissions</span>
                             <span>0 / 100</span>
                           </div>
                           <div className="usage-progress-bar">
                             <div className="usage-fill" style={{width: '2%'}}></div>
                           </div>
                           <p className="usage-reset">Resets on May 1st</p>
                         </div>
                       </div>
                       <div className="settings-card-footer">
                         <button className="btn-dark-create" onClick={() => navigate('/')}>Upgrade to Premium</button>
                       </div>
                     </div>

                     <div className="settings-card">
                       <div className="settings-card-header">
                         <h3>Billing History</h3>
                       </div>
                       <div className="empty-state-small">
                          <Receipt size={24} color="#9ca3af" />
                          <h5>No billing history</h5>
                          <p>You haven't made any payments yet. Upgrade to see your invoices here.</p>
                       </div>
                     </div>
                  </div>

                  <div className="billing-right">
                     <div className="settings-card">
                       <div className="settings-card-header">
                         <h3>Payment Method</h3>
                       </div>
                       <div className="empty-state-small">
                          <CreditCard size={24} color="#9ca3af" />
                          <h5>No payment method</h5>
                          <p>Add a payment method to easily upgrade your plan.</p>
                       </div>
                     </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>

      {/* Create Form Modal */}
      {showCreateModal && (
        <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Create New Form</h3>
              <button className="close-modal-btn" onClick={() => setShowCreateModal(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Form Name <span>*</span></label>
                <input 
                  type="text" 
                  placeholder="e.g., Contact Form, Newsletter Signup" 
                  value={newFormName}
                  onChange={(e) => setNewFormName(e.target.value)}
                  autoFocus 
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea placeholder="Optional description for your form" rows="3"></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={() => setShowCreateModal(false)}>Cancel</button>
              <button className="btn-create" onClick={handleCreateSubmit}>Create Form</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
