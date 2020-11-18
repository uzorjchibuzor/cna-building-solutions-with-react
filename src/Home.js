import React from "react";

export default () => {
  return (
    <React.Fragment>
      <div className="col-md-10 col-md-offset-1">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <img src={process.env.PUBLIC_URL + "/image-2.jpeg"} alt="past jobs scrolling" />
            </div>

            <div className="item">
              <img src={process.env.PUBLIC_URL + "/image-3.jpeg"} alt="past jobs scrolling" />
            </div>

            <div className="item">
              <img src={process.env.PUBLIC_URL + "/image-4.jpeg"} alt="past jobs scrolling"  />
            </div>

            <div className="item">
              <img src={process.env.PUBLIC_URL + "/image-5.jpeg"} alt="past jobs scrolling" />
            </div>
          </div>

          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <p>
          CNA Building Solutions is a general contracting and construction
          management company in the Industrial, Commercial and Institutional
          sectors of the construction industry in Nigeria, with a track record
          of quality and efficient project delivery. Our clients consist of
          public and private sectors. Quality, time and budget, is our driving
          force in providing excellence to our clients...{" "}
          <a href="/about">Learn more</a>
        </p>
      </div>

      <br className="clear" />

      <section className="container">
        <div className="special">
          <img src={process.env.PUBLIC_URL + "/image-1.jpeg"} alt="headline job scrolling" />
        </div>

        <h2>What Makes Us Special</h2>

        <hr />
        <p>
          CNA Building Solutions is a company built on traditional family
          values, morals and integrity.  We believe in sustainability. We
          believe that working successfully means working together and that
          means fostering team work among our staff, taking a genuinely
          collaborative approach with our clients, building lasting positive
          relationships with partners and sub-contractors and ultimately,
          contributing to the communities within which we build and operate. We
          are solutions oriented and – purpose driven.  We pride ourselves in
          providing contemporary and efficient solutions to our clients.
        </p>

        <p>
          Since our inception, we’ve held tight to a simple business model based
          around finding the best people and giving them room to grow, getting
          involved in projects as early as possible, and building real
          partnerships with our clients, suppliers and project stakeholders.
        </p>
      </section>
    </React.Fragment>
  );
};
