import Script from 'next/script';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-xl font-bold mb-4">My Page with Score Widget</h1>

      {/* Load external script */}
      <Script
        src="https://cdorgapi.b-cdn.net/widgets/score.js"
        strategy="afterInteractive"
      />

      {/* Widget container */}
      <div
        id="score-widget"
        className="bg-transparent text-white p-4 border border-gray-700 rounded-md"
      />
    </div>
  );
}
