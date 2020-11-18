import React from "react";
export default () => {
  return (
    <section class="container main-body">
      <div class="des-image">
        <img
          src={process.env.PUBLIC_URL + "property-consult.jpg"}
          alt="property-consultancy"
        />
      </div>

      <h2>Development consultancy</h2>
      <hr />

      <p>
        Our development consulting expertise has been built over the years by
        being actively involved in developments of various scope and scale. This
        has further increased our capabilities to further add value and
        resources to our clients.
      </p>
    </section>
  );
};
