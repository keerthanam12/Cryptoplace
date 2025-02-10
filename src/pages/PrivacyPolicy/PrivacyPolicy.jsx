import React from "react";
import "./PrivacyPolicy.css";
import privacyImage from "../../assets/privacypolicy-image.png"; 

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <img src={privacyImage} alt="PrivacyPolicy" className="privacypolicy-image" />

      <div className="privacy-section">
        <h2>Data Security</h2>
        <p>
          At CryptoPlace, we take data security seriously. Our platform implements end-to-end encryption to protect your personal and financial data from unauthorized access. Every transaction and login session is safeguarded using secure encryption protocols.
        </p>
      </div>

      <div className="privacy-section">
        <h2>No Third-Party Sharing</h2>
        <p>
          We do not sell or share your data with advertisers, marketers, or any third parties. Your personal information remains confidential and is used only to enhance your experience on our platform.
        </p>
      </div>

      <div className="privacy-section">
        <h2>Anonymous Tracking</h2>
        <p>
          You can explore cryptocurrency prices and market trends without logging in. Your activity remains private, and we do not collect personal identifiers unless you voluntarily create an account.
        </p>
      </div>

      <div className="privacy-section">
        <h2>Secure Transactions</h2>
        <p>
          When you sign up, your data is encrypted and stored securely. We use advanced firewall protection and multi-layer authentication to ensure your financial transactions remain safe and private.
        </p>
      </div>

      <div className="privacy-section">
        <h2>Cookie Policy</h2>
        <p>
          We use cookies only to improve your experience—never to track or store personal details. Cookies help us enhance navigation, store preferences, and deliver a faster, smoother experience without compromising your privacy.
        </p>
      </div>

      <div className="privacy-section">
        <h2>Compliance with Regulations</h2>
        <p>
          CryptoPlace is committed to complying with global data protection laws, including GDPR and CCPA. We ensure that your rights, privacy, and data security are always protected.
        </p>
      </div>

      <div className="privacy-section">
        <h2>Want to Learn More?</h2>
        <p>
          Read our full Privacy Policy in the Settings section or contact our support team for any privacy-related concerns. Your trust is our top priority. 
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
