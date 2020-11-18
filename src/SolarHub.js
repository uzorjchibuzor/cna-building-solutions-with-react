import React from "react";

export default () => {
  return (
    <section className="container main-body">
      <div className="des-image">
        <img src={process.env.PUBLIC_URL + "solar-logo.jpg"} alt="solar-logo" />
      </div>

      <h2 className="solar-click">CNA SolarHub</h2>
      <hr />
      <p className="solar-hub-text">
        We are a one-stop marketplace that allows our customers to conveniently
        purchase highly reliable inverters and solar energy systems at
        affordable prices.
        <br />
        <br />
        We are focused on three major things:
        <ul>
          <li className="solar-lists">
            Our passion for providing alternative power solutions to Nigerians.
          </li>
          <li className="solar-lists">
            Commitment to ensuring our customers buy products with commensurate
            value for money.
          </li>
          <li className="solar-lists">
            Enabling the accessibility of affordable alternative power solutions
            to Nigerians with a specific focus on Solar energy.
          </li>
        </ul>
      </p>

      <br />

      <h3 className="cna-services">Our Services</h3>
      <hr />
      <p className="solar-hub-text">
        <ul>
          <li className="solar-lists">
            Sales and supply of photovoltaic batteries and solar panels.
          </li>
          <li className="solar-lists">
            Repair and maintenance of existing solar syatems.
          </li>
          <li className="solar-lists">Residential Installations.</li>
          <li className="solar-lists">Commercial Installations.</li>
        </ul>
      </p>
    </section>
  );
};
