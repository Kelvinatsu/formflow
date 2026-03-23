import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, X, Sparkles, Zap } from 'lucide-react';
import './Pricing.css';

const pricingPlans = [
  {
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for personal projects and exploring the builder.',
    features: [
      { name: 'Up to 3 active forms', included: true },
      { name: '100 submissions / month', included: true },
      { name: 'Standard templates', included: true },
      { name: 'FormFlow watermark on forms', included: true },
      { name: 'Custom domains', included: false },
      { name: 'Team collaboration', included: false },
    ],
    buttonText: 'Get Started for Free',
    isPopular: false,
    theme: 'base'
  },
  {
    name: 'Premium',
    monthlyPriceValue: 7,
    yearlyPrice: 5.95,
    description: 'For professionals and small teams aiming for hyper-growth.',
    features: [
      { name: 'Unlimited active forms', included: true },
      { name: '5,000 submissions / month', included: true },
      { name: 'Premium templates & UI kits', included: true },
      { name: 'No watermark', included: true },
      { name: 'Remove branding / Custom domains', included: false },
      { name: 'Team collaboration', included: false },
    ],
    buttonText: 'Start 14-Day Free Trial',
    isPopular: true,
    theme: 'popular'
  },
  {
    name: 'Business',
    monthlyPriceValue: 25,
    yearlyPrice: 21.25,
    description: 'Advanced features, compliance, and limitless scalability.',
    features: [
      { name: 'Unlimited active forms', included: true },
      { name: 'Unlimited submissions', included: true },
      { name: 'Custom styling API & Webhooks', included: true },
      { name: 'No watermark', included: true },
      { name: 'Custom domains (White label)', included: true },
      { name: 'Team collaboration (up to 10)', included: true },
    ],
    buttonText: 'Contact Sales',
    isPopular: false,
    theme: 'premium'
  }
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();

  const handlePlanClick = (plan, price) => {
    navigate('/checkout', { state: { plan: plan.name, price, isYearly } });
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-background">
        <div className="pg-glow pg-glow-1"></div>
        <div className="pg-glow pg-glow-2"></div>
      </div>
      
      <div className="pricing-container">
        <div className="pricing-header">
           <div className="badge" style={{marginBottom: '24px', display: 'inline-flex', padding: '6px 12px', borderRadius: '100px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)'}}><Sparkles size={14} className="badge-icon-blue" style={{marginRight: '6px'}} /> Transparent, scalable</div>
          <h2 className="section-title">Pricing that scales with you</h2>
          <p className="section-subtitle">No hidden fees, no surprise limits. Start for free and upgrade when you're ready to dominate.</p>
          
          <div className="billing-toggle">
            <span className={!isYearly ? 'active' : ''}>Monthly</span>
            <button 
              className={`toggle-switch ${isYearly ? 'yearly' : ''}`}
              onClick={() => setIsYearly(!isYearly)}
            >
              <span className="toggle-slider"></span>
            </button>
            <span className={isYearly ? 'active' : ''}>
              Yearly <span className="save-badge">Save 15%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid-pro">
          {pricingPlans.map((plan, idx) => {
             const price = isYearly ? plan.yearlyPrice : (plan.monthlyPriceValue || plan.yearlyPrice);
             
             return (
              <div key={idx} className={`pricing-card-pro theme-${plan.theme} ${plan.isPopular ? 'popular' : ''}`}>
                {plan.isPopular && <div className="popular-ribbon"><Zap size={14} /> Most Popular</div>}
                <div className="pc-header">
                  <h3 className="pc-name">{plan.name}</h3>
                  <p className="pc-desc">{plan.description}</p>
                </div>
                
                <div className="pc-price-wrap">
                  <span className="pc-currency">$</span>
                  <span className="pc-price">{price}</span>
                  <span className="pc-period">/ month</span>
                </div>
                {isYearly && price > 0 && <div className="pc-billed">Billed ${price * 12} annually</div>}
                {!isYearly && price > 0 && <div className="pc-billed">&nbsp;</div>}
                {price === 0 && <div className="pc-billed">Free forever</div>}
                
                <button 
                  className={`pc-btn ${plan.theme === 'popular' ? 'btn-glow' : ''}`}
                  onClick={() => handlePlanClick(plan, price)}
                >
                  {plan.buttonText}
                </button>
                
                <div className="pc-features-wrap">
                  <p className="pc-features-title">What's included:</p>
                  <ul className="pc-features">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className={`pc-feature ${!feature.included ? 'excluded' : ''}`}>
                        {feature.included ? (
                          <div className="feature-icon-wrapper included">
                             <Check size={14} strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="feature-icon-wrapper excluded">
                             <X size={14} strokeWidth={3} />
                          </div>
                        )}
                        <span>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
