import React from "react";

export default () => {
  return (
    <section class="container main-body">
      <div class="des-image">
        <img
          src={process.env.PUBLIC_URL + "property-image.jpeg"}
          alt="Property Development Image"
        />
      </div>

      <h2>Property Development</h2>
      <hr />

      <p>
        Over the years we have developed expertise towards quality project
        delivery in a timely and efficient manner. Our high quality developments
        brings benefits and value to the people and businesses who occupy them.
      </p>
    </section>
  );
};
