import React from "react";
import PMP from "../../assets/PMP.png";
import AEDMS from "../../assets/AEDMS.png";
import NTU from "../../assets/NTU.png";
import Twok from "../../assets/2k.png";
import Genihunt from "../../assets/Genihunt.png";
import Agon from "../../assets/Agon.png";
import DRUM from "../../assets/DRUM.png";
import Shopping from "../../assets/Shopping.png";
import Ecowas from "../../assets/Ecowas.png";

import "./portfolio.css";

const data = [
  {
    id: 1,
    image: PMP,
    title: "PMPU-(Ukraine)",
    github: "https://github.com/MalikTalha5524-1/confidentional",
    demo: "https://pmp-backend.cloud-squarex.com/login",
  },
  {
    id: 2,
    image: AEDMS,
    title: "AEDMS",
    github: "https://github.com/MalikTalha5524-1/confidentional",
    demo: "http://54.195.9.195:3000/",
  },
  {
    id: 3,
    image: NTU,
    title: "NTU-International",
    github: "https://github.com/MalikTalha5524-1/confidentional",
    demo: "https://pmp.ntu.eu/login",
  },
  {
    id: 4,
    image: Ecowas,
    title: "Ecowas",
    github: "https://github.com/MalikTalha5524-1/confidentional",
    demo: "https://sankey.ecowas.int/public",
  },
  {
    id: 5,
    image: Genihunt,
    title: "Genihunt",
    github: "https://github.com/MalikTalha5524-1/confidentional",
    demo: "http://genihunt-build.s3-website-eu-west-1.amazonaws.com/",
  },

  {
    id: 6,
    image: Twok,
    title: "2k-Unity-App",
    github: "https://github.com/MalikTalha5524-1/confidentional",
    demo: "https://2k-unity-app.netlify.app/",
  },
  {
    id: 7,
    image: Shopping,
    title: "Shopping App",
    github: "https://github.com/MalikTalha5524-1/confidentional",
    demo: "https://shopping-apps.netlify.app/",
  },
  {
    id: 8,
    image: DRUM,
    title: "Javascript Drum",
    github: "https://github.com/MalikTalha5524-1/confidentional",
    demo: "https://javascript-drumm.netlify.app/",
  },
  {
    id: 9,
    image: Agon,
    title: "Agon Advanced",
    github: "https://github.com/MalikTalha5524/",
    demo: "https://maliktalha5524.github.io/Agon/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, github, demo, title }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
