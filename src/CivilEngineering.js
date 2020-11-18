import React from "react";

export default () => {
  return (
    <section class="container main-body">
      <div class="des-image">
        <img
          src={process.env.PUBLIC_URL + "civil-engine.jpg"}
          alt="civil-engineering"
        />
      </div>

      <h2>Civil Engineering</h2>
      <hr />

      <p>
        Our engineers understand the nuances and delicate intricacies of
        architecture, engineering and construction. All these are mobilized and
        geared towards achieving your end visions and goals. Our advantage is we
        have a team of professionals who are highly versatile and experienced
        thereby providing you with expert solutions.
      </p>
    </section>
  );
};
