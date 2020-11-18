import React from "react";

export default () => {
  return (
    <React.Fragment>
      <section class="container main-body">
        <div class="des-image">
          <img src={process.env.PUBLIC_URL + "image-1.jpeg"} alt="about us" />
        </div>

        <h2>About Us</h2>
        <hr />

        <p>
          CNA Building Solutions is a general contracting and construction
          management company in the Industrial, Commercial and Institutional
          sectors of the construction industry in Nigeria, with a track record
          of quality and efficient project delivery. Our clients consist of
          public and private sectors. Quality, time and budget, is our driving
          force in providing excellence to our clients. 
        </p>

        <p>
          CNA Building Solutions brings forward passion and the skill set to
          deliver projects within expectations.  We have built an excellent
          reputation to deliver projects on time and on budget.  We make it our
          goal to create lasting relationships with our clients through our
          knowledge, cooperation, and commitment to excellence.  We have, and
          continue to provide our clients with excellent service, attention to
          detail and a great work ethic. 
        </p>

        <p>
          CNA Building Solutions takes pride in only a sustainable future.  We
          believe in making a difference.  We have and continue to create and
          maintain strong working relationships with vendors and suppliers who
          feel equally as strong in achieving the same end results.  We practice
          smart, sustainable construction methodologies. 
        </p>
      </section>
    </React.Fragment>
  );
};
