import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>

        <p className="about-intro">
          I’m a React Native Engineer currently building production-scale EV
          rider applications at Baaz Bikes, serving 1L+ downloads with a 4.5★
          Play Store rating.
        </p>

        <p className="about-details">
          I focus on building reliable and scalable mobile systems — from
          migrating apps to the New React Native Architecture (Fabric &
          TurboModules) to designing CI/CD pipelines and integrating BLE-based
          vehicle connectivity. I enjoy working close to the product and solving
          real engineering challenges that impact thousands of users daily.
        </p>

        <p className="about-personal">
          Beyond code, my background in NCC and national-level trekking has
          shaped my discipline and resilience. I value ownership, consistency,
          and continuous improvement — both in engineering and in life.
        </p>
      </div>
    </section>
  );
}

export default About;
