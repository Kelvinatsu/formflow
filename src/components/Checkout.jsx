import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShieldCheck, CreditCard, ArrowLeft, CheckCircle, CheckCircle2, Lock } from 'lucide-react';
import Logo from './Logo';
import './Checkout.css';

const VisaIcon = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="input-card-logo">
    <rect width="24" height="16" rx="2" fill="#1434CB"/>
    <path d="M10.82 9.94H9.55l.8-4.96h1.27l-.8 4.96zm6.8-4.83c-.22-.08-.6-.15-1.07-.15-1.16 0-1.98.6-1.98 1.48 0 .65.6 1 .1 1.05.47l.86.41c.25.12.5.34.5.6 0 .42-.51.62-1.12.62-.48 0-.82-.07-1.12-.2l-.15-.08-.16 1.04c.28.14.78.25 1.28.25 1.26 0 2.07-.61 2.08-1.54 0-.52-.3-.92-1.03-1.26-.43-.22-.68-.36-.68-.58 0-.19.23-.39.69-.39.4 0 .68.08.88.16l.11.05.15-1zM19.18 5.1h-1c-.3 0-.53.08-.65.4L15.3 9.94h1.34s.22-.61.27-.75h1.63c.04.18.15.75.15.75h1.12L19.18 5.1zM17.2 8.35c.1-.28.48-1.33.48-1.33l.25-.7.14.67s.24 1.15.29 1.36h-1.16zM8.33 5.1L7 8.52 6.64 5.56c-.05-.28-.24-.46-.53-.46H4.2l-.02.13c.27.06.57.14.81.28.16.1.2.22.24.4l1.24 4.03h1.36l2-4.84H8.33z" fill="#fff"/>
  </svg>
);

const MastercardIcon = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="input-card-logo">
    <rect width="24" height="16" rx="2" fill="#1A1F36"/>
    <circle cx="9.5" cy="8" r="4.5" fill="#EB001B"/>
    <circle cx="14.5" cy="8" r="4.5" fill="#F79E1B"/>
    <path d="M12 11.2a4.48 4.48 0 0 0 2-3.2 4.48 4.48 0 0 0-2-3.2 4.48 4.48 0 0 0-2 3.2 4.48 4.48 0 0 0 2 3.2z" fill="#FF5F00"/>
  </svg>
);

const AmexIcon = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="input-card-logo">
    <rect width="24" height="16" rx="2" fill="#006FCF"/>
    <path d="M8.7 10.53h1.16l-1.37-3.14-1.3 3.14H8.35L7.22 8.16H5.4l2.12 2.37H7.2V8.16l1.5 2.37zm5.55 0v-2.34h-.83V10.5h-.77V8.19h-.84v2.34h-.73v-3.1h3.17v3.1zm3.62 0L16.48 8.8h1.13v-1.63H15.1v3.1h2.52v-1.4h-.9v.76h.12v.9zm1.09-1.5l1.08 1.5h.92l-1.28-1.56 1.25-1.54h-.91L18.78 8.9h-1v-1.46h-.73v3.1h.73V9.03z" fill="#fff"/>
  </svg>
);

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'paypal'
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Card Handlers
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handleCardNumberChange = (e) => {
    let val = e.target.value.replace(/\D/g, '');
    let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
    setCardNumber(formatted.substring(0, 19));
  };

  const handleExpiryChange = (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length >= 2) {
      val = val.substring(0, 2) + '/' + val.substring(2, 4);
    }
    setExpiry(val.substring(0, 5));
  };

  const getCardType = (number) => {
    const cleanNum = number.replace(/\D/g, '');
    if (cleanNum.startsWith('4')) return 'visa';
    if (/^5[1-5]/.test(cleanNum) || /^2[2-7]/.test(cleanNum)) return 'mastercard';
    if (/^3[47]/.test(cleanNum)) return 'amex';
    return 'unknown';
  };

  const cardType = getCardType(cardNumber);

  // Parse state routing parameters
  const planDetails = location.state || { plan: 'Premium', price: 5, isYearly: true };
  
  const total = planDetails.isYearly ? planDetails.price * 12 : planDetails.price;

  // If free plan, bypass or just show $0
  const isFree = total === 0;

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => navigate('/builder'), 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="checkout-page success-page">
        <div className="success-card">
          <CheckCircle2 size={64} className="success-icon" />
          <h2>Payment Successful!</h2>
          <p>Welcome to FormFlow {planDetails.plan}. Redirecting you to your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header-bar">
        <button onClick={() => navigate(-1)} className="back-btn"><ArrowLeft size={18} /> Back</button>
        <div style={{ transform: 'translateX(-20px)' }}><Logo size={24} fontSize="1.25rem" /></div>
        <div style={{width: '70px'}}></div> {/* spacer */}
      </div>

      <div className="checkout-container">
        
        {/* Left Col: Payment Form */}
        <div className="checkout-form-side">
          <div className="checkout-title-wrap">
            <h1>Complete your purchase</h1>
            <p>Secure checkout powered by Stripe</p>
          </div>

          {!isFree && (
            <div className="payment-methods">
              <button 
                type="button" 
                className={`pm-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <CreditCard size={20} /> Credit Card
              </button>
              <button 
                type="button" 
                className={`pm-btn ${paymentMethod === 'paypal' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('paypal')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 6.007 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.89l-1.128 7.116a.641.641 0 0 1-.633.54z" fill="#003087"/><path d="M10.854 21.337h-3.78a.641.641 0 0 1-.633-.74l1.128-7.116c.082-.508.526-.89 1.05-.89h2.19c4.298 0 7.664-1.748 8.647-6.798.03-.15.054-.294.077-.437a3.987 3.987 0 0 1 .466 1.91c-.982 5.05-4.348 6.797-8.646 6.797h-2.191c-.524 0-.968.382-1.05.89l-.534 3.376a.641.641 0 0 1-.633.54z" fill="#0079C1"/></svg> PayPal
              </button>
            </div>
          )}

          <form onSubmit={handleCheckout}>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@company.com" required />
            </div>

            {paymentMethod === 'card' && !isFree && (
                  <div className="checkout-form">
                    <div className="form-group">
                      <label>Card number</label>
                      <div className="input-with-icon">
                        {cardType === 'visa' && <VisaIcon />}
                        {cardType === 'mastercard' && <MastercardIcon />}
                        {cardType === 'amex' && <AmexIcon />}
                        {cardType === 'unknown' && <CreditCard className="input-icon" size={18} />}
                        <input 
                           type="text" 
                           placeholder="0000 0000 0000 0000" 
                           value={cardNumber}
                           onChange={handleCardNumberChange} 
                           required 
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Expiration date</label>
                        <input 
                           type="text" 
                           placeholder="MM/YY" 
                           value={expiry}
                           onChange={handleExpiryChange} 
                           required 
                        />
                      </div>
                      <div className="form-group">
                        <label>CVC</label>
                        <input 
                           type="text" 
                           placeholder="123" 
                           maxLength="4"
                           value={cvc}
                           onChange={(e) => setCvc(e.target.value.replace(/\D/g, ''))}
                           required 
                        />
                      </div>
                    </div>
                  </div>
            )}

            {paymentMethod === 'paypal' && !isFree && (
              <div className="paypal-notice">
                <p>You will be redirected to PayPal to complete your purchase securely.</p>
              </div>
            )}

            <button type="submit" className="checkout-submit-btn" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : (paymentMethod === 'paypal' && !isFree ? 'Pay with PayPal' : (isFree ? 'Start Free Plan' : `Pay $${total.toFixed(2)}${planDetails.isYearly ? '/year' : '/month'}`))}
            </button>
            
            <div className="secure-badge">
              <Lock size={14} /> Guaranteed safe & secure checkout
            </div>
          </form>
        </div>

        {/* Right Col: Order Summary */}
        <div className="checkout-summary-side">
          <div className="summary-card">
            <h3>Order Summary</h3>
            <div className="summary-item plan-detail">
              <div className="plan-name-wrap">
                <h4>FormFlow {planDetails.plan}</h4>
                <span>{planDetails.isYearly ? 'Annual' : 'Monthly'} billing</span>
              </div>
              <div className="plan-price-wrap">${total.toFixed(2)}</div>
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="summary-item subtotal">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-item taxes">
              <span>Taxes</span>
              <span>Calculated at next step</span>
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="summary-item total">
              <span>Total due today</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <ul className="summary-benefits">
              <li><ShieldCheck size={16} className="benefit-icon" /> Contains all {planDetails.plan} features</li>
              <li><CheckCircle size={16} className="benefit-icon" /> Cancel anytime</li>
              <li><CheckCircle size={16} className="benefit-icon" /> 14-day money-back guarantee</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
