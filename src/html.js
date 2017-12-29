import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <title>Debashis Barman&mdash; Full Stack JavaScript Developer</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="Full Stack JavaScript Developer. Passionate Programmer. Tech Blogger." />
          <meta name="keywords" content="Debashis Barman, Full Stack JavaScript Developer, Passionate Programmer, Tech Blogger." />
          <meta name="theme-color" content="#eee" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#eee" />
          <link rel="shortcut icon" href={"/img/icon.png"} type="image/x-icon" />
          <link rel="apple-touch-icon" href={"/img/icon.png"} />
          <link href={"/css/kathamo.css"} rel="stylesheet" />
          <link rel="manifest" href={"/manifest.json"} />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500|Open+Sans:400,700" rel="stylesheet" />
          <script src={"/js/geek.js"} type="text/javascript"></script>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "http://www.schema.org",
              "@type": "person",
              "name": "Debashis Barman",
              "jobTitle": "Full Stack JavaScript Developer",
              "url": "http://www.debashisbarman.in/",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bengaluru",
                "addressCountry": "India"
              }
            }) }}>
          </script>
          <script
            dangerouslySetInnerHTML={{ __html: `
              !function() {
                var t;
                if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void (window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0,
                t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
                t.factory = function(e) {
                  return function() {
                    var n;
                    return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
                  };
                }, t.methods.forEach(function(e) {
                  t[e] = t.factory(e);
                }), t.load = function(t) {
                  var e, n, o, i;
                  e = 3e5, i = Math.ceil(new Date() / e) * e, o = document.createElement("script"),
                  o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + i + "/" + t + ".js",
                  n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
                });
              }();
              drift.SNIPPET_VERSION = '0.3.1';
              drift.load('nem9mc2s6v6r');
            `}}>
          </script>
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
            dangerouslySetInnerHTML={{ __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-49449513-1', 'auto');
              ga('send', 'pageview');
            `}}>
          </script>
        </body>
      </html>
    )
  }
}
