import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name="description"
            content="Interna is a community social platform that connect students with internship opportunities, as well as a medium to share experiences among themselves"
          />
          <meta 
          name="keywords"
          content="interna, internship, community, get interna, students, cv generator"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          <meta name="theme-color" content="#21295c" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://getinterna.com" />
          <meta name="twitter:site" content="@getinterna" />
          <meta name="twitter:title" content="Interna" />
          <meta name="twitter:description" content="Interna is a community social platform that connect interns and opportunities, as well as a medium to share experiences among themselves"/>
          <meta name="twitter:image" content="https://getinterna.com/assets/banner.png"/>
          <meta name="twitter:creator" content="@getinterna" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Interna" />
          <meta
            property="og:description"
            content="Interna is a community social platform that connect students with internship opportunities, as well as a medium to share experiences among themselves"
          />
          <meta property="og:site_name" content="Interna" />
          <meta property="og:url" content="https://getinterna.com" />
          <meta
            property="og:image"
            content="https://getinterna.com/assets/banner.png"
          />

          <meta name="application-name" content="interna" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="interna" />
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src='https://getinterna.com/client.js'></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
