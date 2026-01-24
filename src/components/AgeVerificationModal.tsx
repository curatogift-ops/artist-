'use client';

import { useState, useEffect } from 'react';

export default function AgeVerificationModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check localStorage on mount
    const verified = localStorage.getItem('age-verified');
    if (verified === 'true') {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setIsChecking(false);
  }, []);

  const handleYes = () => {
    localStorage.setItem('age-verified', 'true');
    setIsVisible(false);
  };

  const handleNo = () => {
    setAccessDenied(true);
  };

  // While checking, render nothing (or a loading state if needed, but nothing is usually cleaner)
  if (isChecking) return null;

  // If user is verified, render nothing
  if (!isVisible && !accessDenied) return null;

  // If access is denied (user clicked No)
  if (accessDenied) {
    return (
      <div className="fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl font-bold mb-6 text-red-500">Access Denied</h1>
        <p className="text-xl text-zinc-300 max-w-lg leading-relaxed">
          You must be 18 years or older to enter this website. <br />
          We are committed to protecting minors.
        </p>
        <button 
          onClick={() => window.location.href = 'https://www.google.com'}
          className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
        >
          Leave Website
        </button>
      </div>
    );
  }

  // Show the modal
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 rounded-2xl max-w-lg w-full shadow-2xl text-center relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></div>
        
        <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">Age Verification</h2>
        
        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
          Welcome to <span className="font-semibold text-purple-600">ANTIQUE WORLD HOUSE</span>. <br/>
          You must be 18 years or older to view this content.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleNo}
            className="px-8 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-200"
          >
            I am under 18
          </button>
          
          <button 
            onClick={handleYes}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 transition-all duration-200"
          >
            I am 18+ (Enter)
          </button>
        </div>
        
        <p className="mt-8 text-xs text-zinc-400 dark:text-zinc-600">
          By entering, you confirm that you are at least 18 years of age.
        </p>
      </div>
    </div>
  );
}
