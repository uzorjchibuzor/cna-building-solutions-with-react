import React from "react";

export default () => {
  return (
    <section class="container main-body">
      <div class="des-image">
        <img
          src={process.env.PUBLIC_URL + " gen-contracting.jpg"}
          alt="general contracting"
        />
      </div>

      <h2>General Contracting</h2>
      <hr />

      <p>
        CNA Building Solutions provides day-to-day oversight of the construction
        sites, management of vendors and suppliers, and keeping communication
        between the involved parties open and clear throughout the course of the
        project.  We provide all material, labor, equipment, and services
        necessary for the construction of the project.  Depending of the size of
        the project, responsibilities may include:  Filing for building permits,
        Securing the property, Providing temporary utilities on site, Managing
        personnel on site, Providing site surveying and engineering,
        Disposing/Recycling of construction waste, Monitoring schedules and cash
        flows, Maintaining accurate records as construction progresses.
      </p>
    </section>
  );
};
