import React from 'react';
import { Link } from 'react-router-dom';

const HomePg = () => {
  return (
    <div className="home-page">
      <h1>Welcome to ToothFixers Ltd.</h1>
      <p>Manage your patients' clinical records with ease.</p>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Dental Check-ups</li>
          <li>Teeth Whitening</li>
          <li>Fillings and Restorations</li>
          <li>Root Canal Treatment</li>
          <li>Extractions</li>
        </ul>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          ToothFixers Ltd. is a leading dental company dedicated to providing exceptional dental care to patients.
          With a team of experienced dentists and state-of-the-art facilities, we strive to ensure the best oral health
          for our patients.
        </p>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>
          Phone: 123-456-7890<br />
          Email: info@toothfixer.com<br />
          Address: 123 Main Street, City, State, ZIP
        </p>
      </section>
      <div>
  <Link to="/patient-record" className="link">
    Get Started
  </Link>
</div>
    </div>
  );
  };

export default HomePg;