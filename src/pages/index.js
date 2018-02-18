import React from "react"
import '../styles/master.css'

export default () => (
  <div className="db-site-content">
    <header className="db-site db-site--header">
      <div className="grid">
        <div className="row">
          <div className="col">
            <h1>Debashis Barman</h1>
            <h2>
              I'm a Full Stack JavaScript Developer from India specialize in creating awesome apps using Node.js, React & React Native.
            </h2>
            <p className="lead">Checkout some of my <u>featured</u> projects below or download my <a href="https://drive.google.com/file/d/1g6mk9dY0jCEBH7vEqT8tG6Y-NIIR-TLb/view" target="_blank" rel="nofollow noreferrer">resume</a>.</p>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section className="db-site db-site--project">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="project-meta">
                Web & Mobile App
              </p>
              <h3 className="project-title">Leopetra, pet care made simple</h3>
              <p>
                A one-stop app for all your pet needs. Look up breed information, book vet / veterinarian appointments, dog trainers, day care centres or buy pet supplies.
              </p>
              <p>
                <strong>Technology :</strong> Node.js, React, Express, MongoDB, Android
              </p>
              <p>
                <a className="btn" href="https://angel.co/projects/647654-leopetra-pet-care-made-simple?src=user_profile" target="_blank" rel="nofollow noreferrer">Learn more</a>
              </p>
            </div>
            <div className="col">
              <div className="browser-mockup">
                <div className="img img--bg-leopetra"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="db-site db-site--project">
        <div className="grid">
          <div className="row">
            <div className="col">
              <div className="browser-mockup">
                <div className="img img--bg-nkc"></div>
              </div>
            </div>
            <div className="col">
              <p className="project-meta">
                Website
              </p>
              <h3 className="project-title">North Kamrup College</h3>
              <p>
                A one-stop app for all your pet needs. Look up breed information, book vet / veterinarian appointments, dog trainers, day care centres or buy pet supplies.
              </p>
              <p>
                <strong>Technology :</strong> Node.js, React, Gatsby, Firebase
              </p>
              <p>
                <a className="btn" href="https://angel.co/projects/598210-official-website-for-north-kamrup-college?src=more_projects" target="_blank" rel="nofollow noreferrer">Learn more</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="db-site db-site--project">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="project-meta">
                Desktop App
              </p>
              <h3 className="project-title">Markdown Editor</h3>
              <p>
                A one-stop app for all your pet needs. Look up breed information, book vet / veterinarian appointments, dog trainers, day care centres or buy pet supplies.
              </p>
              <p>
                <strong>Technology :</strong> Node.js, React, Electron
              </p>
              <p>
                <a className="btn" href="https://github.com/debashisbarman/Markdown-Editor" target="_blank" rel="nofollow noreferrer">Learn more</a>
              </p>
            </div>
            <div className="col">
              <div className="browser-mockup">
                <pre className="pre-scrollable">
                function createWindow() &#123;<br />
                &emsp;mainWindow = new BrowserWindow(&#123;<br />
                &emsp;&emsp;width: 960,<br />
                &emsp;&emsp;height: 540,<br />
                &emsp;&emsp;icon: __dirname + '/icon.png'<br />
                &emsp;&#125;);<br />
                &emsp;mainWindow.loadURL('file://'+ __dirname + '/index.html');<br />

                &emsp;mainWindow.on('closed', () => &#123;<br />
                &emsp;&emsp;mainWindow = null<br />
                &emsp;&#125;);<br />
                &#125;
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <aside className="db-site db-site--aside">
      <div className="grid">
        <div className="row">
          <div className="col">
            <div className="project-block">
              <p className="lead">
                Digital Sofia <span>Node.js, Twitter API</span>
              </p>
              <p>
                Twitter bot capable to like / retweet a tweet and more advanced features.
              </p>
              <p>
                <strong><a className="" href="https://medium.com/@DebashisBarman/creating-a-twitter-bot-with-node-js-bea760b80bd5" target="_blank" rel="nofollow noreferrer">Learn More</a></strong>
              </p>
            </div>
          </div>
          <div className="col">
            <div className="project-block">
              <p className="lead">
                Kathamo <span>CSS, SCSS</span>
              </p>
              <p>
                A minimalist CSS framework for rapid and mobile-friendly development.
              </p>
              <p>
                <strong><a className="" href="http://kathamo.github.io/" target="_blank" rel="nofollow noreferrer">Learn More</a></strong>
              </p>
            </div>
          </div>
          <div className="col">
            <div className="project-block">
              <p className="lead">
                Adda <span>Node.js, Socket.io</span>
              </p>
              <p>
                An anonymous online chatting application built in Node.js and Socket.io.
              </p>
              <p>
                <strong><a className="" href="http://adda.herokuapp.com/" target="_blank" rel="nofollow noreferrer">Learn More</a></strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <footer className="db-site db-site--contact">
      <div className="grid">
        <div className="row">
          <div className="col">
            <h3>Get in touch</h3>
            <p className="lead">
             If you like my works and want to talk / work with me, just drop a mail to <strong>hello @ this domain</strong>.
            </p>
            <p>
              or send me a message via <a className="fab-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSe06k1YAypDd64duQ3u2YlWvCeOm0K9Jaw0jRMSLZHB32Pcpw/viewform?usp=pp_url&entry.963273645&entry.1253020167&entry.269901594=I+want+to+hire+you+for+a+project&entry.1445310706=https://www.debashisbarman.in" target="_blank" rel="nofollow noreferrer">Google form</a>.
            </p>
            <p className="icons lead">
              <a href="https://github.com/debashisbarman" target="_blank" rel="nofollow noreferrer"><i className="fa fa-github fa"></i></a>&emsp;
              <a href="https://twitter.com/@DebashisBarman" target="_blank" rel="noreferrer nofollow"><i className="fa fa-twitter fa"></i></a>&emsp;
              <a href="https://medium.com/@DebashisBarman" target="_blank" rel="nofollow noreferrer"><i className="fa fa-medium fa"></i></a>
            </p>
            <p className="colphon">
              Copyright &copy; {new Date().getFullYear()} Debashis Barman. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
)
