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
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                ga('create', '${process.env.googleAnalyticsKey}', 'auto');
                ga('send', 'pageview');`
            }}
          />
        </Head>
        <body style={{ backgroundColor: 'rgb(245 247 250)' }}>
          <Main />
          <NextScript />
          <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3219722052726085'
            crossOrigin='anonymous'
          ></script>
        </body>
      </Html>
    );
  }
}
