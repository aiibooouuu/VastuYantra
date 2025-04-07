import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h1>Welcome to the Vaastu Calculator</h1>
        <p>
        A platform designed to help you assess the Vaastu alignment of your home. As part of our Indian Knowledge System (IKS) project, we aim to blend ancient wisdom with modern technology, making Vaastu principles accessible and easy to understand. Our tool allows you to input your house’s room directions to calculate a Vaastu score, helping you create a balanced and harmonious living space. Explore our FAQs, scientific insights, and simple remedies to enhance the positive energy in your home.

        </p>
      </section>

      <section className="about-section">
        <h2>What is Vaastu Shastra?</h2>
        <p>
        Vastu Shastra is an ancient Hindu Vedic Science, which takes a holistic approach to design and create a layout of a factory, office and home which is in harmony with nature, the cosmic forces and the universe.

        Don’t just look at your office, factory and home as just a structure of bricks, cement and ply-board. Your environment is throbbing with life. There is the solar energy, the movement of the planets, the magnetic fields of the earth, gravity, the influence of the five essential elements of nature (i.e water (‘jal’), fire (‘agni’), earth (‘prithvi’), sky (‘akash’), wind (‘vayu), geopathic stress, the global fields, the cosmic energy, the colours and pictures on the wall etc. all of which are all affecting your mind, body, life and business.
        Our Vaastu Calculator helps you assess your space’s alignment with Vaastu principles, offering insights and recommendations for a more balanced and prosperous living environment.

        </p>
      </section>

      <section className="about-section">
        <h2>A Logical and Scientific Approach</h2>
        <blockquote>
          “This science is complete in itself. Happiness to the whole world it can bring, All the four benefits it bestows on you, Rightful living, money, fulfillment of desires and bliss, Are all available in this world itself.”
          <br />
          <span>– Viswakarma in Vastu Shastra</span>
        </blockquote>
      </section>

      <section className="about-section">
        <h2>Science Behind Vaastu</h2>
        <p>
          <strong>Magnetic Poles in the Human Body:</strong> Human body itself acts as a magnet with the head, the heaviest and important part of the body, as the North Pole. If the head is directed towards the North while sleeping, the North Pole of the Earth and that of the Human Body repel each other affecting the blood circulation, causing disturbed sleep, tension and other connected problems.
        </p>
        <p>
          <strong>Magnetic Property of Earth:</strong> Our Mother Earth was created from the minerals and dust from the lava of Sun 4.54 million years ago. Due to the large content of iron particles present in the form of solid and molten state in our Earth, it has a magnificent magnetic property. The North Pole emits the positive magnetic energy and the South Pole performs the Negative part receiving this energy. Hence, our Earth is surrounded by a magnetic field all over its mass. Vastu Shastra applies certain principles to gain from this magnetic force.
        </p>
      </section>
    </div>
  );
};

export default About;
