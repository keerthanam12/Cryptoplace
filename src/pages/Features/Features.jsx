import React from "react";
import "./Features.css";
import featureImage from "../../assets/feature-image.png"; 

const Features = () => {
  return (
    <div className="features-container">
      <h1 className="features-title">Key Features</h1>
      <img src={featureImage} alt="Features" className="feature-image" />

      <div className="feature-section">
        <h2>Real-Time Price Tracking</h2>
        <p>
          Stay ahead of the market with our real-time cryptocurrency tracking. Our platform provides up-to-the-second updates on Bitcoin, Ethereum, and a wide range of other digital assets, ensuring you always have the latest price data at your fingertips.
        </p>
      </div>

      <div className="feature-section">
        <h2>Multi-Currency Support</h2>
        <p>
          Convert and track cryptocurrency prices in multiple fiat currencies such as USD, INR, EUR, and more. Our seamless multi-currency feature allows users to switch between currencies effortlessly, making it easy to compare values across global markets.
        </p>
      </div>

      <div className="feature-section">
        <h2>Interactive Charts & Market Insights</h2>
        <p>
          Our interactive charts provide an in-depth view of market trends, historical price movements, and volatility. Analyze 24-hour price changes, identify trading patterns, and make informed investment decisions with our comprehensive analytical tools.
        </p>
      </div>

      <div className="feature-section">
        <h2>Personalized Crypto Watchlist</h2>
        <p>
          Create a custom watchlist to track your favorite cryptocurrencies. Whether you're monitoring Bitcoin, Ethereum, or altcoins, get instant updates on price changes and market trends, ensuring you never miss an opportunity.
        </p>
      </div>

      <div className="feature-section">
        <h2>Secure & Lightning-Fast Performance</h2>
        <p>
          Our platform is built with high-performance APIs, ensuring fast and secure data updates. We prioritize user security, offering encrypted data protection and secure authentication to keep your crypto activities safe.
        </p>
      </div>

      <div className="feature-section">
        <h2>Latest Crypto News & Market Trends</h2>
        <p>
          Stay informed with real-time crypto news and insights. Our platform aggregates breaking news, expert analysis, and financial trends, providing users with all the information they need to make strategic investment decisions.
        </p>
      </div>
    </div>
  );
};

export default Features;
