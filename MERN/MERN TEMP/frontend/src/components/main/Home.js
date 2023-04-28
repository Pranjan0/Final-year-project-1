// import React from 'react'


// const Home = () => {
//   return (
    
//     // <div className='home-page'>
//     //   <h1 className="text-center display-1 fw-bold p-5">
//     //     Home Page
//     //   </h1>
//     // </div>
    
//   )
// }

// export default Home;
import React from "react";

const HomePage = () => {
  return (
    <div
    style={{
      backgroundImage: `url('https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg?w=2000')`}}
  >
    <div className="container">
      <div className="d-flex justify-content-center text-center mx-3">
        <div
          className="p-4 py-5 rounded-6 shadow-3-strong w-100"
          style={{
            marginTop: 180,
            backgroundColor: "hsla(0, 0%, 100%, 0.8) !important",
            backdropFilter: "saturate(200%) blur(25px)"
          }}
        >
          <h1 className="mt-4 mb-5 display-3 fw-bold ls-tight">
            <span>Trending Web Development</span>
            <br />
            <span className="text-primary">stacks Analyzer</span>
          </h1>
          <a
            className="btn btn-primary btn-lg py-3 px-5 mb-2 mb-md-4 me-md-2"
            href="#"
            role="button"
            aria-controls="#picker-editor"
            draggable="false"
            style={{ minWidth: "auto" }}
          >
            Get Started
          </a>
          <a
            className="btn  btn-link btn-lg py-3 px-5 mb-md-4 ripple-surface-primary"
            data-ripple-color="primary"
            href="#"
            role="button"
            aria-controls="#picker-editor"
            draggable="false"
            style={{ minWidth: "auto" }}
          >
            Dashboard
          </a>
        </div>
      </div>
    </div>
    <div data-draggable="true" style={{ position: "relative" }} draggable="false" className="">
      <section draggable="false" className="container pt-5" data-v-271253ee="">
        <section className="mb-10 text-center text-lg-start">
      <h2 className="fw-bold mb-5 text-center">Web Development Stacks</h2>
      <div className="row gx-lg-5">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple ripple-surface-light"
              data-ripple-color="light"
              style={{}}
            >
              <img
                src="https://www.rlogical.com/wp-content/uploads/2020/12/MERN-Stack-considered-the-Best-for-Developing-Web-Apps.png"
                className="img-fluid"
                alt=""
                aria-controls="#picker-editor"
                draggable="false"
              />
              <svg
                className="position-absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                style={{ left: 0, bottom: 0 }}
              >
                <path
                  fill="#fff"
                  d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="card-body">
              <h5 className="card-title">MERN Stack</h5>
              <p className="card-text">
                <span
                  style={{
                    color: "rgb(55, 65, 81)",
                    fontFamily:
                      'Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    whiteSpace: "pre-wrap",
                    backgroundColor: "rgb(247, 247, 248)"
                  }}
                >
                  MERN is a popular web development stack that consists of
                  MongoDB, Express.js, React.js, and Node.js. MongoDB is a NoSQL
                  database that stores data in JSON-like format, while
                  Express.js is a back-end framework used for building API.
                  React.js is a front-end library used for building user
                  interfaces and Node.js is a JavaScript runtime environment
                  that allows developers to run server-side code. MERN enables
                  full-stack web development using a single language,
                  JavaScript, making it easier for developers to maintain and
                  scale their applications. With its growing popularity, MERN
                  provides a rich set of tools and resources for building fast,
                  reliable and scalable applications.
                </span>
              </p>
              <a
                href="#!"
                className="btn btn-primary"
                aria-controls="#picker-editor"
                draggable="false"
                style={{ minWidth: "auto" }}
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4 mb-lg-0">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple ripple-surface-light"
              data-ripple-color="light"
              style={{}}
            >
              <img
                src="http://www.goodworklabs.com/wp-content/uploads/2017/08/Mean.jpg"
                className="img-fluid"
                alt=""
                aria-controls="#picker-editor"
                draggable="false"
              />
              <svg
                className="position-absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                style={{ left: 0, bottom: 0 }}
              >
                <path
                  fill="#fff"
                  d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                >

                </path>
              </svg>
            </div>
            <div className="card-body">
              <h5 className="card-title">MEAN Stack</h5>
              <p className="card-text">
                <span
                  style={{
                    color: "rgb(55, 65, 81)",
                    fontFamily:
                      'Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    whiteSpace: "pre-wrap",
                    backgroundColor: "rgb(247, 247, 248)"
                  }}
                >
                  MEAN is a full-stack JavaScript web development framework
                  consisting of MongoDB, Express.js, Angular.js, and Node.js.
                  MongoDB is a NoSQL database, Express.js is a back-end
                  framework for building APIs, Angular.js is a front-end
                  framework for building dynamic and complex user interfaces,
                  and Node.js is a JavaScript runtime environment for executing
                  server-side code. MEAN allows developers to build complete web
                  applications using a single language, JavaScript, and provides
                  a robust set of tools and resources for quickly developing
                  scalable and high-performance applications.
                </span>
              </p>
              <div>
                <font
                  color="#374151"
                  face="Söhne, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
                >
                  <span style={{ whiteSpace: "pre-wrap" }}>
                    <br />
                  </span>
                </font>
                <div>
                  <font
                    color="#374151"
                    face="Söhne, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
                  >
                    <span style={{ whiteSpace: "pre-wrap" }}>
                      <br />
                    </span>
                  </font>
                  <div>
                    <font
                      color="#374151"
                      face="Söhne, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
                    >
                      <span style={{ whiteSpace: "pre-wrap" }}>
                        <br />
                      </span>
                    </font>
                    <div>
                      <span
                        style={{
                          color: "rgb(55, 65, 81)",
                          fontFamily:
                            'Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                          whiteSpace: "pre-wrap",
                          backgroundColor: "rgb(247, 247, 248)"
                        }}
                      >
                        <br />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <a
                href="#!"
                className="btn btn-primary"
                aria-controls="#picker-editor"
                draggable="false"
                style={{ minWidth: "auto" }}
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4 mb-lg-0">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple ripple-surface-light"
              data-ripple-color="light"
              style={{}}
            >
              <img
                src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200402205611/What-is-PERN-Stack.png"
                className="img-fluid"
                alt=""
                aria-controls="#picker-editor"
                draggable="false"
              />
              <svg
                className="position-absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                style={{ left: 0, bottom: 0 }}
              >
                <path
                  fill="#fff"
                  d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="card-body">
              <h5 className="card-title">PERN Stack</h5>
              <p className="card-text">
                <span
                  style={{
                    color: "rgb(55, 65, 81)",
                    fontFamily:
                      'Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    whiteSpace: "pre-wrap",
                    backgroundColor: "rgb(247, 247, 248)"
                  }}
                >
                  PERN is a full-stack web development stack that consists of
                  PostgreSQL, Express.js, React.js, and Node.js. PostgreSQL is a
                  powerful and reliable relational database, while Express.js is
                  a back-end framework used for building APIs. React.js is a
                  front-end library used for building user interfaces and
                  Node.js is a JavaScript runtime environment that allows
                  developers to run server-side code. PERN enables full-stack
                  web development using a single language, JavaScript, making it
                  easier for developers to maintain and scale their
                  applications. With its strong focus on security and data
                  integrity, PERN is a great choice for building large-scale and
                  mission-critical applications.
                </span>
              </p>
              <div>
                <font
                  color="#374151"
                  face="Söhne, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
                >
                  <span style={{ whiteSpace: "pre-wrap" }}>
                    <br />
                  </span>
                </font>
                <div>
                  <span
                    style={{
                      color: "rgb(55, 65, 81)",
                      fontFamily:
                        'Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      whiteSpace: "pre-wrap",
                      backgroundColor: "rgb(247, 247, 248)"
                    }}
                  >
                    <br />
                  </span>
                </div>
              </div>
              <p />
              <a
                href="#!"
                className="btn btn-primary"
                aria-controls="#picker-editor"
                draggable="false"
                style={{ minWidth: "auto" }}
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4 mb-lg-0">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple ripple-surface-light"
              data-ripple-color="light"
              style={{}}
            >
              <img
                src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200402205611/What-is-PERN-Stack.png"
                className="img-fluid"
                alt=""
                aria-controls="#picker-editor"
                draggable="false"
              />
              <svg
                className="position-absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                style={{ left: 0, bottom: 0 }}
              >
                <path
                  fill="#fff"
                  d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="card-body">
              <h5 className="card-title">PERN Stack</h5>
              <p className="card-text">
                <span
                  style={{
                    color: "rgb(55, 65, 81)",
                    fontFamily:
                      'Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    whiteSpace: "pre-wrap",
                    backgroundColor: "rgb(247, 247, 248)"
                  }}
                >
                  PERN is a full-stack web development stack that consists of
                  PostgreSQL, Express.js, React.js, and Node.js. PostgreSQL is a
                  powerful and reliable relational database, while Express.js is
                  a back-end framework used for building APIs. React.js is a
                  front-end library used for building user interfaces and
                  Node.js is a JavaScript runtime environment that allows
                  developers to run server-side code. PERN enables full-stack
                  web development using a single language, JavaScript, making it
                  easier for developers to maintain and scale their
                  applications. With its strong focus on security and data
                  integrity, PERN is a great choice for building large-scale and
                  mission-critical applications.
                </span>
              </p>
              <div>
                <font
                  color="#374151"
                  face="Söhne, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
                >
                  <span style={{ whiteSpace: "pre-wrap" }}>
                    <br />
                  </span>
                </font>
                <div>
                  <span
                    style={{
                      color: "rgb(55, 65, 81)",
                      fontFamily:
                        'Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      whiteSpace: "pre-wrap",
                      backgroundColor: "rgb(247, 247, 248)"
                    }}
                  >
                    <br />
                  </span>
                </div>
              </div>
              <p />
              <a
                href="#!"
                className="btn btn-primary"
                aria-controls="#picker-editor"
                draggable="false"
                style={{ minWidth: "auto" }}
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
        </section>
      </section>
    </div>
    <div data-draggable="true" style={{ position: "relative" }} draggable="false" className="">
      <section draggable="false" className="container pt-5" data-v-271253ee="">
        <section className="mb-10">
      <style
        dangerouslySetInnerHTML={{
          __html:
            " @media (min-width: 992px) { .cascading-right { margin-right: -50px; } .rotate-lg-6 { transform: rotate(6deg); } } \n        "
        }}
      />
      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div
              className="card cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
                zIndex: 1
              }}
            >
              <div className="card-body p-lg-5 shadow-5">
                <h2 className="fw-bold">
                  <span className="text-primary">Performance Analyzer</span>
                </h2>
                <p className="fw-bold">WEB DEV STACKS</p>
                <p className="text-muted mb-4">
                  <span
                    style={{
                      color: "rgb(55, 65, 81)",
                      fontFamily:
                        'Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      whiteSpace: "pre-wrap",
                      backgroundColor: "rgb(247, 247, 248)"
                    }}
                  >
                    Performance analysis tools can help developers understand
                    the strengths and weaknesses of different web development
                    stacks, and make informed decisions about which stack is
                    best suited for their specific needs. However, the
                    performance of a web development stack is also heavily
                    dependent on factors such as the hardware, network, and
                    architecture of the application, as well as the specific
                    configuration and optimization of the individual components.
                  </span>
                </p>
                <p className="text-muted"></p>
                <ul className="list-unstyled d-flex justify-content-center justify-content-md-start mb-0">
                  <li>
                    <i className="fas fa-star fa-sm text-primary"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-primary"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-primary"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-primary"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-primary"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5NjI0M3wwfDF8c2VhcmNofDR8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fHx8MTY3NjA0NTIwMw&ixlib=rb-4.0.3&q=80&w=1080"
              className="w-100 rounded-4 shadow-4 rotate-lg-6"
              alt=""
              aria-controls="#picker-editor"
              draggable="false"
            />
          </div>
        </div>
      </div>
        </section>
      </section>
    </div>
</div>
  
  );
};

export default HomePage;



