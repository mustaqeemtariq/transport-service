import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/assets/fonts/CircularStd-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/CircularStd-Book.woff2"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="font-circular">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
