import Script from 'next/script';

export default function Home() {
  return (
    <>
      <h1 className="text-xl font-bold">My Page with Score Widget</h1>

      {/* Customized Widget Container */}
      <div
        id="score-widget"
        className="cdorg-matches text-white bg-black text-sm p-4 rounded-md"
        data-type="international"
        data-theme="light"
      ></div>

      {/* Load the widget script */}
      <Script
        src="https://cdorgapi.b-cdn.net/widgets/matchlist.js"
        strategy="afterInteractive"
      />
    </>
  );
}
