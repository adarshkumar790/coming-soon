import Script from 'next/script';

export default function Home() {
  return (
    <>
      <h1 className="text-xl font-bold">My Page with Score Widget</h1>

      {/* Load external script */}
      <Script
        src="https://cdorgapi.b-cdn.net/widgets/matchlist.js"
        strategy="afterInteractive" // Load after page is interactive
      />

      {/* The widget may require a specific div or container */}
      <div id="score-widget" />
    </>
  );
}

{/* <script src="https://cdorgapi.b-cdn.net/widgets/matchlist.js"></script> */}

