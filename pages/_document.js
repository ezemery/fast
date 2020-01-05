// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="en">
          {/* <link rel="icon" type="" href="static/img/icons/favicon-128.png"/> */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="Content-Type" content="charSet=utf-8" />
          <meta name="author" content="Fast.co" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Fast.co - FAST, the easiest way to sign up, login and pay"/>
          <meta name="keywords" content="fast.co - domm holland, start up design, software, code, tech, computer stuff, store, couture, html, css, javascript, websites, website development, web development, design, ui, ux , adenekan wonderful , code_wonders" />
          <meta property="article:publisher" content="fast.co" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="fast.co" />
          <meta name="twitter:site" content="@fast.co" />
          <meta name="twitter:domain" content="fast.co" />
          <meta name="description" content="Fast.co - FAST, the easiest way to sign up, login and pay" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Fast.co - FAST" />
          <meta property="og:description" content="Fast.co - FAST, the easiest way to sign up, login and pay" />
          <meta property="og:url" content="/" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="809" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
           {/* <link rel="stylesheet" href="../static/fonts/style.css"/>
           <link rel="stylesheet" href="../static/style.css"/> */}
        </Head>
        <body>
          <Main />
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"crossOrigin="anonymous"></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
