import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="privacy-container">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
        <div className="privacy-content">
          <p>At FormFlow, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our form building services.</p>
          
          <h2>1. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
          <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, billing address, email address, and telephone number, that you voluntarily give to us when registering.</li>
            <li><strong>Form Data:</strong> Information submitted by your users through forms built using FormFlow. We act as a data processor for this information, treating it with end-to-end security protocols.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the application, such as your IP address, browser type, and operating system.</li>
          </ul>

          <h2>2. Use of Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We use information collected about you to:</p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Process transactions and send related information, including transaction confirmations and invoices.</li>
            <li>Monitor and analyze usage and trends to improve your experience.</li>
            <li>Prevent fraudulent transactions and monitor against theft.</li>
          </ul>

          <h2>3. Disclosure of Your Information</h2>
          <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
          <ul>
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process or to investigate potential violations.</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us, such as payment processing (e.g. Stripe, PayPal) or email delivery.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>

          <h2>5. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact our support team at:</p>
          <p><a href="mailto:kelvinatsu213@gmail.com" className="privacy-contact">kelvinatsu213@gmail.com</a></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
