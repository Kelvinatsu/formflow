import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyFormFlow from './components/WhyFormFlow';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import LatestBlogs from './components/LatestBlogs';
import About from './components/About';
import Footer from './components/Footer';
import Builder from './components/Builder';
import Login from './components/Login';
import Signup from './components/Signup';
import Blog from './components/Blog';
import FeaturesPage from './components/FeaturesPage';
import Docs from './components/Docs';
import Checkout from './components/Checkout';
import Privacy from './components/Privacy';
import IntegrationsPage from './components/IntegrationsPage';
import Dashboard from './components/Dashboard';
import { AuthProvider, useAuth } from './context/AuthContext';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <WhyFormFlow />
      <Integrations />
      <Pricing />
      <LatestBlogs />
      <About />
      <Footer />
    </div>
  );
}

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return null;
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/integrations" 
            element={
              <ProtectedRoute>
                <IntegrationsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/builder" 
            element={
              <ProtectedRoute>
                <Builder />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
