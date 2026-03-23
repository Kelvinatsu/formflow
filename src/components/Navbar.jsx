import React from 'react';
import { Github } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-brand" style={{textDecoration: 'none'}}>
          <Logo size={20} fontSize="1.15rem" />
        </Link>

        <nav className="nav-links">
          <Link to="/features" className="nav-link">Features</Link>
          <a href="/#why-formflow" className="nav-link">Why FormFlow</a>
          <a href="/#pricing" className="nav-link">Pricing</a>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/docs" className="nav-link">Docs</Link>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="nav-link icon-link">
            <Github size={20} />
          </a>
        </nav>

        <div className="nav-actions">
          {user ? (
            <>
              <Link to="/dashboard" className="btn-secondary">Dashboard</Link>
              <button onClick={handleLogout} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>Log out</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-secondary">Log in</Link>
              <Link to="/signup" className="btn-primary">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
