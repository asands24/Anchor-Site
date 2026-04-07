import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-anchor-blue-900 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-anchor-slate mb-4">404</h1>
      <p className="text-xl text-anchor-slate/70 mb-8">Page Not Found</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-anchor-blue-500 hover:bg-anchor-blue-400 text-white font-medium rounded-lg transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};
