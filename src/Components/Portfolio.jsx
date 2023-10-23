/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "Image in portfolio screen";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "A Glimpse into Machine Learning",
    description:
      "ahead and behind the scenes...",
    url: "https://blog.sreeteja.dev/a-glimpse-into-machine-learning",
  },
  {
    title: "Linear Regression: Housing Prices Prediction",
    description:
      "no matter how bad things get or how good, things always come back to middl",
    url: "https://blog.sreeteja.dev/linear-regression-housing-prices-prediction",
  },
  {
    title: "Introduction to Neural Networks",
    description:
      "the way machines think... · Your brain doesn't manufacture thoughts",
    url: "https://blog.sreeteja.dev/introduction-to-neural-networks",
  },
  {
    title: "Image Classification",
    description:
      "Cats vs. Dogs · Science is the systematic classification of experience ~George Henry Lewes",
    url: "https://blog.sreeteja.dev/image-classification",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
