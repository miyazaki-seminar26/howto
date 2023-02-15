import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <title>Recaim -Webサイト制作診断-</title>
        <Head>
          <meta property="og:title" content="Recaim -Webサイト制作診断-" />
          <meta property="og:image" content="/favicons/favicon-16x16.png" />
          <meta
            property="og:description"
            content="Webサイト制作という響きだけでWebサイトを作ろうとしているそこの君へ。Webサイト制作があなたにとってどうあるべきか。本当にWebサイトを作るべきなのか。それらを簡単に診断できるサイトRecaimです。あなたの目的にあった最適な行動を取りましょう。"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
