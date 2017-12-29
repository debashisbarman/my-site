import React from "react"
import '../styles/master.scss'

class Index extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <main>
        <nav className="navbar">
          <ul className="li-unstyled" data-role="navbar">
            <li className="nav-brand"><a href="">Debashis Barman</a></li>
            <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="https://debashisbarman.drift.com/talk" rel="noopener noreferrer" target="_blank">Let's Talk</a></li>
          </ul>
        </nav>
        <header className="header">
          <div className="header-background">
            <div className="header-background__top-triangle" />
            <div className="header-background__bottom-triangle" />
          </div>
          <main className="header-content">
            <h1 className="headline">Full Stack Javascript Developer</h1>
            <h2 className="subhead">Producing high quality web applications with Node, React & Express</h2>
            <p className="lead">Hire me. Or get to know me first.</p>
            <p><a className="btn btn--light" href="#about">Learn More</a></p>
          </main>
        </header>
        <a id="portfolio"></a>
        <main className="main">
          <section className="portfolio">
            <ul className="li-unstyled" data-role="portfolio">
              <li
                className="portfolio__item"
                data-title="North Kamrup College / PHP & MySQL"
                style={{ backgroundImage: 'url(/img/project__1.jpg)' }}
              />
              <li
                className="portfolio__item"
                data-title="Kathamo / CSS & SASS"
                style={{ backgroundImage: 'url(/img/project__2.jpg)' }}
              />
              <li
                className="portfolio__item"
                data-title="Digital Sofia / Node & Twitter API"
                style={{ backgroundImage: 'url(/img/project__3.jpg)' }}
              />
              <li
                className="portfolio__item"
                data-title="Prajyukttam / Web & Android"
                style={{ backgroundImage: 'url(/img/project__4.jpg)' }}
              />
              <li
                className="portfolio__item"
                data-title="Unshift / React, Node & Express"
                style={{ backgroundImage: 'url(/img/project__5.jpg)' }}
              />
              <li
                className="portfolio__item"
                data-title="Tathya India / React Native"
                style={{ backgroundImage: 'url(/img/project__6.png)' }}
              />
            </ul>
          </section>
          <a id="about"></a>
          <section className="main-content">
            <div className="grid">
              <div className="cell cell--phone-12 cell--offset-tablet-2 cell--tablet-8 cell--offset-desktop-2 cell--desktop-8">
                <h2 className="title">Hello, world!</h2>
                <p className="">My name is Debashis Barman and I'm a Computer Engineer. Currently I'm working as a Full Stack JavaScript Developer in a
                  development studio in Bengaluru. I generally build modern web applications using Node, React & Express. Apart from that
                  I also build mobile apps with React Native and offer freelancing services.</p>
                <p><a className="btn btn--dark" href="">Download My CV</a></p>
              </div>
            </div>
          </section>
        </main>
        <a id="contact"></a>
        <footer className="footer">
          <div className="grid">
            <div className="cell cell--offset-phone-1 cell--phone-10 cell--offset-tablet-2 cell--tablet-8 cell--offset-desktop-1 cell--desktop-10">
              <ul className="li-unstyled" data-role="icons">
                <li className="icon"><a href="">Github</a></li>
                <li className="icon"><a href="">Twitter</a></li>
                <li className="icon"><a href="">Medium</a></li>
                <li className="icon"><a href="">Behance</a></li>
                <li className="icon"><a href="">Linkedin</a></li>
              </ul>
              <p>Copyright &copy; {(new Date()).getFullYear()} Debashis Barman. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    )
  }
}

export default Index
