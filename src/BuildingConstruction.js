import React from "react";

export default () => {
  return (
    <section class="container main-body">
      <div class="des-image">
        <img
          src={process.env.PUBLIC_URL + "building-image.jpeg"}
          alt="building-contruction"
        />
      </div>

      <h2>Building Construction</h2>
      <hr />
      <p>
        CNA Building Solutions has extensive experience in construction
        services, including design-build, site preparation, landscaping and
        hardscape, restoration and maintenance. As your construction manager in
        Nigeria , we serve as your advisor through every stage of the building
        process . We manage scheduling, estimating, budgeting or budget control,
        engineering, subcontractor bid solicitation, on-site supervision,
        quality control, cost control ,and total project management with an
        unwavering commitment to bringing expert approach and exceptional value
      </p>
    </section>
  );
};
