import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en' className='[--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]'>
        <Head>
          <meta name='theme-color' content='#000000' />
          <meta name='application-name' content={process.env.siteName} />
        </Head>
        <body className='antialiased text-gray-400 bg-black'>
          <Main />
          <NextScript />
          <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3219722052726085'
            crossorigin='anonymous'
          ></script>
        </body>
      </Html>
    );
  }
}
