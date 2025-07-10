'use client';

import Script from 'next/script';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Live Match List
      </h1>

      {/* Matchlist Widget Script */}
      <Script
        src="https://cdorgapi.b-cdn.net/widgets/matchlist.js"
        strategy="afterInteractive"
      />

      {/* Widget Container with proper ID and data attributes */}
      <div
        id="matchlist-widget"
        data-theme="dark"
        data-lang="en"
        className="bg-black text-white border border-gray-700 rounded-lg p-4"
      />

      {/* Fallback styling override in case widget has hardcoded styles */}
      <style jsx global>{`
        #matchlist-widget * {
          color: white !important;
          background-color: transparent !important;
        }
      `}</style>
    </div>
  );
}
