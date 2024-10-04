// ShimmerLoader.js
import React from 'react';

const ShimmerLoader = () => {
  return (
    <div className="shimmer-wrapper">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-image"></div>
          <div className="shimmer-card-content">
            <div className="shimmer-header"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line short"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerLoader;