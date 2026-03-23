import React from 'react';
import Navbar from './Navbar';
import Features from './Features';

const FeaturesPage = () => {
  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '80px' }}>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <Features />
      </div>
    </div>
  );
};

export default FeaturesPage;
