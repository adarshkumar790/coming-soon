import Script from 'next/script';

export default function Home() {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">My Page with Score Widget</h1>

      {/* Widget container with class used in global CSS */}
      <div
        id="score-widget"
        className="cdorg-matches"
        data-type="international"
        data-theme="dark"
      />

      <Script
        src="https://cdorgapi.b-cdn.net/widgets/matchlist.js"
        strategy="afterInteractive"
      />
    </>
  );
}
