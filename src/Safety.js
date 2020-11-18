import React from "react";

export default () => {
  return (
    <section class="container main-body">
      <div class="des-image">
        <img
          src={process.env.PUBLIC_URL + "safety.jpeg"}
          alt="Safety Alternative"
        />
      </div>

      <h2>Safety</h2>
      <hr />

      <p>
        Over the past several years, the construction industry has experienced a
        period of rapidly changing technologies and regulations.  CNA Building
        Solutions is committed to providing a healthy and safe workplace for its
        employees and subcontractors.  The safety of our workers and the safe
        conditions and practices on our work sites is of the highest priority. 
        All CNA Building Solutions staff and subcontractors are dedicated to
        continuing to reduce the risk of injury, practice standard health and
        safety procedures and good construction practices.
      </p>
      <p>
        It is the responsibility of every employee, sub-contractor and any other
        site personnel, to work safely and to report all potentially unsafe
        conditions.  All supervisors, employees and subcontractors must protect
        their own and fellow workers' health and safety by working in compliance
        with the Occupational Health and Safety Act and all applicable
        regulation and safe work practices and procedures established by our
        company. We recognize that a safe work environment can be established
        and sustained only through a united effort by all employees and
        subcontractors and that the assistance of each person is required.  We
        all have the responsibility to ensure a safe and healthy workplace.
      </p>
    </section>
  );
};
