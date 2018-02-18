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
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Full Stack JavaScript Developer from India specialize in creating awesome apps using NodeJs, React & React Native" />
          <meta name="keywords" content="Debashis Barman, Full stack javascript developer, Node, React, React Native" />
          <meta name="theme-color" content="#00b0a1" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#00b0a1" />
          <link rel="shortcut icon" href={"/img/icon.png"} type="image/x-icon" />
          <link rel="apple-touch-icon" href={"/img/icon.png"} />
          <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" />
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
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
