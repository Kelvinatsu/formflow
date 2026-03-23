import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Settings, 
  Trash2, 
  Plus, 
  Monitor, 
  Smartphone, 
  Code, 
  Eye,
  GripVertical,
  Folder,
  FileText,
  CreditCard,
  LogOut
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Builder.css';
import './Dashboard.css';

const Builder = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [fields, setFields] = useState([
    { id: 1, type: 'text', label: 'Full Name', required: true },
    { id: 2, type: 'email', label: 'Email Address', required: true }
  ]);
  const [activeField, setActiveField] = useState(null);
  const [previewMode, setPreviewMode] = useState('desktop');

  const handleAddField = (type) => {
    const newId = Date.now();
    let label = '';
    if (type === 'text') label = 'Short Answer';
    if (type === 'email') label = 'Email Address';
    if (type === 'textarea') label = 'Long Paragraph';
    if (type === 'checkbox') label = 'Multiple Choice';

    setFields([...fields, { id: newId, type, label, required: false }]);
    setActiveField(newId);
  };

  const handleUpdateField = (id, key, value) => {
    setFields(fields.map(f => f.id === id ? { ...f, [key]: value } : f));
  };

  const handleDeleteField = (id) => {
    setFields(fields.filter(f => f.id !== id));
    if (activeField === id) setActiveField(null);
  };

  const activeFieldData = fields.find(f => f.id === activeField);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      {/* Top Navbar */}
      <header className="dashboard-topbar">
        <div className="topbar-logo" onClick={() => navigate('/dashboard')}>
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
            <button className="nav-item" onClick={() => navigate('/dashboard')}>
              <Folder size={18} /> Dashboard
            </button>
            <button className="nav-item active" onClick={() => navigate('/dashboard')}>
              <FileText size={18} /> Forms
            </button>
            <button className="nav-item" onClick={() => navigate('/dashboard')}>
              <CreditCard size={18} /> Billing
            </button>
          </nav>

          <div className="sidebar-footer">
            <button className="signout-btn" onClick={handleLogout}>
              <LogOut size={18} /> Sign Out
            </button>
          </div>
        </aside>

        {/* Builder Main Block */}
        <main className="form builder-main-wrapper">
          <div className="builder-header-inner">
            <div className="bhi-left">
              <h1>Form Builder</h1>
              <p>Build and customize your form fields</p>
            </div>
            <div className="bhi-right">
              <button className="btn-bhi-outline"><Code size={16}/> Embed</button>
              <button className="btn-bhi-outline"><Eye size={16}/> Preview</button>
              <button className="btn-bhi-dark">Save Changes</button>
            </div>
          </div>

          <div className="builder-settings-bar">
             <span className="bsb-label">Customize</span>
             <span className="bsb-text">Primary color</span>
             <div className="bsb-color-preview"></div>
             <input type="text" value="#111827" readOnly className="bsb-color-input"/>
             <span className="bsb-text">Submit button and focus rings</span>
             <div className="bsb-divider"></div>
             <span className="bsb-label">Share link</span>
             <a href="#" className="bsb-link">formflow.dev/forms/vj2qc85suj</a>
             <button className="bsb-copy">Copy</button>
             <div className="bsb-divider"></div>
             <span className="bsb-label">Endpoint URL</span>
             <a href="#" className="bsb-link gray">formflow.dev/api/f/2qc85suj</a>
             <button className="bsb-copy">Copy</button>
          </div>

          <div className="builder-columns">
            {/* Left Column: Elements */}
            <div className="b-col-left">
              <h4>Add Fields</h4>
              <button className="btn-bhi-dark full" onClick={() => handleAddField('text')}><Plus size={16}/> Add Field Type</button>
              
              <div className="b-info-card">
                 <h5>Form Info</h5>
                 <div className="bic-row"><span>Total Fields:</span> <span className="badge">{fields.length}</span></div>
                 <div className="bic-row"><span>Required Fields:</span> <span className="badge">{fields.filter(f=>f.required).length}</span></div>
              </div>

              <div className="builder-element-list" style={{marginTop: '24px'}}>
                <button className="element-btn" onClick={() => handleAddField('text')}>
                  <span className="element-icon">T</span> Short Text
                </button>
                <button className="element-btn" onClick={() => handleAddField('email')}>
                  <span className="element-icon">@</span> Email
                </button>
                <button className="element-btn" onClick={() => handleAddField('textarea')}>
                  <span className="element-icon">≡</span> Long Text
                </button>
                <button className="element-btn" onClick={() => handleAddField('checkbox')}>
                  <span className="element-icon">☑</span> Checkbox
                </button>
              </div>
            </div>

            {/* Center Column: Canvas */}
            <div className="b-col-center">
              <div className="device-toggle-container">
                <div className="device-toggle">
                   <button 
                     className={`dt-btn ${previewMode === 'desktop' ? 'active' : ''}`}
                     onClick={() => setPreviewMode('desktop')}
                   ><Monitor size={14}/> Desktop</button>
                   <button 
                     className={`dt-btn ${previewMode === 'mobile' ? 'active' : ''}`}
                     onClick={() => setPreviewMode('mobile')}
                   ><Smartphone size={14}/> Mobile</button>
                </div>
                <span className="dt-label">
                  {previewMode === 'desktop' ? 'Desktop View (Full Width)' : 'Mobile View (Compact Width)'}
                </span>
              </div>

              <div className={`canvas-wrapper-box ${previewMode === 'mobile' ? 'mobile-preview' : ''}`}>
                 <div className="canvas-header">
                    <h4>Form Canvas</h4>
                    <p>Drag and drop fields to reorder them. Click on a field to edit its properties.</p>
                 </div>
                 
                 <div className="canvas-body">
                    {fields.length === 0 ? (
                      <div className="canvas-empty-state">
                        <Plus size={24} color="#9ca3af" />
                        <p>Click element to add more</p>
                      </div>
                    ) : (
                      fields.map((field) => (
                        <div 
                          key={field.id} 
                          className={`canvas-field-mock ${activeField === field.id ? 'active' : ''}`}
                          onClick={() => setActiveField(field.id)}
                        >
                           <div className="cfm-top">
                             <div className="cfm-top-left">
                               <GripVertical size={14} color="#d1d5db"/>
                               <span className="cfm-type">{field.type.toUpperCase()}</span>
                             </div>
                             <button className="cfm-trash" onClick={(e) => { e.stopPropagation(); handleDeleteField(field.id); }}>
                               <Trash2 size={14}/>
                             </button>
                           </div>
                           <label>{field.label} {field.required && <span className="req-star">*</span>}</label>
                           {field.type === 'textarea' ? (
                             <textarea disabled placeholder={`Enter ${field.label.toLowerCase()}`}></textarea>
                           ) : (
                             <input type="text" disabled placeholder={field.type === 'email' ? 'Enter email address' : `Enter ${field.label.toLowerCase()}`} />
                           )}
                        </div>
                      ))
                    )}
                 </div>
              </div>
            </div>

            {/* Right Column: Properties */}
            <div className="b-col-right">
               {activeField ? (
                 <div className="properties-panel">
                   <div className="properties-header">
                      <Settings size={18} /> <h3>Properties</h3>
                   </div>
                   <div className="property-group">
                     <label>Field Label</label>
                     <input 
                       type="text" 
                       value={activeFieldData?.label || ''} 
                       onChange={(e) => handleUpdateField(activeField, 'label', e.target.value)}
                       className="property-input setting-input"
                     />
                   </div>
                   <div className="property-group checkbox-group">
                     <input 
                       type="checkbox" 
                       id="req-check"
                       checked={activeFieldData?.required || false}
                       onChange={(e) => handleUpdateField(activeField, 'required', e.target.checked)}
                     />
                     <label htmlFor="req-check">Required Field</label>
                   </div>
                   <button className="btn-delete-field delete-field-btn" onClick={() => handleDeleteField(activeField)}>
                     <Trash2 size={16} /> Delete Field
                   </button>
                 </div>
               ) : (
                 <div className="properties-empty">
                    <Settings size={48} color="#9ca3af"/>
                    <p>Select a field to edit its properties</p>
                 </div>
               )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Builder;
