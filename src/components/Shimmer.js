import React from 'react';

const Loader = () => {
    return (
      <div className="loader">
        <div className="spinner"></div>
        <div className="loader-text"></div>
      </div>
    );
  };

const Shimmer = () => {
    return (
        
        <div className='loader-cont'>
        <Loader />
        <div className="shimmer-container">
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
        </div>
        </div>
    )

}

export default Shimmer;