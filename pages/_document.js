import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html dir="rtl">
      <Head>
        {/* favicon here */}
        <link rel="icon" href="/images/logo/favi.png" />

        {/* font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
