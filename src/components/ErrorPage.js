import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
 

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div className="error-page-container">
      <div className="error-content">
       <h1 className="error-title">{err.status}</h1>
       <h2 className="error-subtitle">{err.statusText}</h2>
        <p className="error-description">
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/" className="error-button">Are yar Home par jao</Link>
      </div>
    </div>
  );
};

export default ErrorPage;