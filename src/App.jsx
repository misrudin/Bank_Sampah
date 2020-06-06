import React from "react";
import logo from "./img/icon.jpeg";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <nav>
          <div className="nav-brand">
            <img src={logo} alt="logo" loading="lazy" />
            <h1>Lazy</h1>
          </div>
          <ul>
            <li className="nav-item active">
              <p>Beranda</p>
            </li>
            <li className="nav-item">
              <p>Layanan</p>
            </li>
            <li className="nav-item">
              <p>Hubungi Kami</p>
            </li>
            <li className="button">
              <p>Unduh Aplikasi</p>
            </li>
          </ul>
        </nav>
        <div className="jumbotron">
          <div className="left">
            <h1>Lorem ipsum dolor sit amet Lorem, ipsum dolor.</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              odit quae quibusdam ut vero laboriosam.
            </p>
            <div className="download">
              <button className="btn btn-download">Download IOS</button>
              <button className="btn btn-download">Download Android</button>
            </div>
          </div>
          <div className="right">
            <img src={logo} alt="" />
          </div>
        </div>
      </header>

      <section id="main">
        <div className="main">
          <div className="title">
            <h1 className="title">3 langkah jual sampah anda</h1>
          </div>
          <div className="content">
            <div className="item">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                pariatur dolorum vitae! Deserunt, voluptate eum sapiente illum
                quas eius obcaecati.
              </p>
            </div>
            <div className="item">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                quis animi velit quibusdam modi accusantium.
              </p>
            </div>
            <div className="item">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                obcaecati delectus tenetur autem quisquam hic odio a corporis
                repudiandae sit. Beatae earum autem in similique.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="layanan">
        <div className="main">
          <div className="title">
            <h1 className="title">Layanan kami</h1>
          </div>
          <div className="layanan">
            <div className="layanan-left">
              <img src={logo} alt="" />
            </div>
            <div className="layanan-right">
              <h1>Lorem, ipsum dolor.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, cum at! Asperiores cumque maxime, ab nam laudantium
                officia iste explicabo dicta qui quod labore iure, unde
                molestiae, officiis odit velit?
              </p>
              <button className="btn-outline">Selengkapnya</button>
            </div>
          </div>
          <div className="layanan">
            <div className="layanan-left">
              <h1>Lorem, ipsum dolor.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, cum at! Asperiores cumque maxime, ab nam laudantium
                officia iste explicabo dicta qui quod labore iure, unde
                molestiae, officiis odit velit?
              </p>
              <button className="btn-outline">Selengkapnya</button>
            </div>
            <div className="layanan-right">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="patner">
        <div className="main">
          <div className="title">
            <h1 className="title">Patnership</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              consequuntur quasi asperiores quia. Facilis, excepturi.
            </p>
          </div>
          <div className="content">
            <div className="item-patner">
              <img src={logo} alt="" />
            </div>
            <div className="item-patner">
              <img src={logo} alt="" />
            </div>
            <div className="item-patner">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
        <div className="patner-cta">
          <button className="btn btn-patner">Jadi Patner</button>
        </div>
      </section>

      <section id="main">
        <div className="main">
          <div className="title">
            <h1 className="title">Jadi mitra kami</h1>
          </div>
          <div className="content">
            <div className="item">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                pariatur dolorum vitae! Deserunt, voluptate eum sapiente illum
                quas eius obcaecati.
              </p>
            </div>
            <div className="item">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                quis animi velit quibusdam modi accusantium.
              </p>
            </div>
            <div className="item">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                obcaecati delectus tenetur autem quisquam hic odio a corporis
                repudiandae sit. Beatae earum autem in similique.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tertarik">
        <div className="main">
          <div className="title">
            <h1 className="title">
              tertarik dengan layanan kami? download sekarang juga
            </h1>
          </div>
          <div className="download-fo0ter">
            <button className="btn btn-download">Download IOS</button>
            <button className="btn btn-download">Download Android</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="main-footer">
          <div className="item-footer">
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <div className="item-footer">
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <div className="item-footer">
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <div className="item-footer">
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </footer>
      <div className="footer-copy">
        <p>Copyright &copy; 3030</p>
      </div>
    </>
  );
};

export default App;
