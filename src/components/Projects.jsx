import React, { useState, useContext } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import Fade from "react-reveal/Fade";
import Header from "./Header";
import ProjectCard from "./projects/ProjectCard";

const styles = {
  containerStyle: {
    marginBottom: 25,
    marginTop: 25,
  },
};

const Projects = (props) => {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const projectsData = [
    {
      image: "images/projects/ecommerce.png",
      title: "PcShop",
      bodyText:
        "- Ecommerce with login, admin panel, cart, checkout, orders history, reviews, questions & more.\n - First project I have done with a team of 7 people.\n- I took part of the Frontend team, and also helped with the Backend when it was required.",
      links: [
        {
          text: "Code",
          href: "https://github.com/nmacenco/Ecommerce-Project",
        },
        {
          text: "Page",
          href: "https://pcshop-ecommerce-project.vercel.app/products",
        },
      ],
      tags: [
        "React",
        "TypeScript",
        "Redux",
        "NodeJs",
        "Express",
        "Sequelize",
        "CSS",
        "GIT"
      ],
    },
    {
      image: "images/projects/recipes-project.png",
      title: "Recipes.com",
      bodyText:
        "- Individual project for SoyHenry bootcamp.\n - Food page project which uses data from the SpoonacularApi.\n - Form for create a recipe, update, delete, filters and search bar.",
      links: [
        {
          text: "Code",
          href: "https://github.com/xjuliang/PI-Food-Main",
        },
        {
          text: "Page",
          href: "https://recipes-page-p07scdq0p-xjuliang.vercel.app/",
        },
      ],
      tags: ["React", "Redux", "NodeJs", "Express", "Sequelize", "Heroku"],
    },
    {
      image: "images/projects/weather-page.png",
      title: "Weather Page",
      bodyText:
        "- Info about the weather of the cities you search.\n -  Consumes information from the WeatherAPI.",
      links: [
        {
          text: "Code",
          href: "https://github.com/xjuliang/Weather-Page",
        },
        {
          text: "Page",
          href: "https://weather-page-4f8ys22g8-xjuliang.vercel.app/",
        },
      ],
      tags: ["React", "CSS"],
    },
    {
      image: "images/projects/cinema-catalogue.png",
      title: "Cinema Catalogue",
      bodyText:
        "- Info about your favourite movies.\n -  Consumes information from the CinemaAPI.",
      links: [
        {
          text: "Code",
          href: "https://github.com/xjuliang/Cinema-Catalogue",
        },
        {
          text: "Page",
          href: "https://xjuliang.github.io/Cinema-Catalogue/",
        },
      ],
      tags: ["React", "CSS"],
    },
    {
      image: "images/projects/portfolio.png",
      title: "Portfolio",
      bodyText:
        "- Personal Portfolio Website made in React\n -  Info about me and my projects.\n - Dark Mode Support & Responsive",
      links: [
        {
          text: "Code",
          href: "",
        },
        {
          text: "Page",
          href: "",
        },
      ],
      tags: ["React", "CSS", "JavaScript"],
    },
    {
      image: "images/projects/expenses-app.png",
      title: "Expenses App",
      bodyText: "- Create new expenses.\n - Track them with the state bars.",
      links: [
        {
          text: "Code",
          href: "https://github.com/xjuliang/Expenses-App",
        },
        {
          text: "Page",
          href: "https://expenses-app-8m4hb731k-xjuliang.vercel.app/",
        },
      ],
      tags: ["React", "CSS"],
    },
    {
      image: "images/projects/pokedex.png",
      title: "Pokedex",
      bodyText:
        "- Simple pokedex using JS.\n - My first project using data from an API.",
      links: [
        {
          text: "Code",
          href: "https://github.com/xjuliang/Pokedex-Project",
        },
        {
          text: "Page",
          href: "https://xjuliang.github.io/Pokedex-Project/",
        },
      ],
      tags: ["JavaScript", "HTML", "CSS"],
    },
    {
      image: "images/projects/calculator.png",
      title: "Calculator",
      bodyText:
        "- Math calculator using JS.\n - The purpose of this project was to apply what I knew so far.",
      links: [
        {
          text: "Code",
          href: "https://github.com/xjuliang/SimpleCalculator-Project",
        },
        {
          text: "Page",
          href: "https://xjuliang.github.io/SimpleCalculator-Project/",
        },
      ],
      tags: ["JavaScript", "HTML", "CSS"],
    },
    {
      image: "images/projects/sodastereo-quiz.png",
      title: "Soda Stereo Quiz",
      bodyText:
        "- Soda Stereo Band Quiz game\n - This is the first project I developed with a friend when I was learnig the basics of Web Programming.",
      links: [
        {
          text: "Code",
          href: "https://github.com/xjuliang/SodaStereo-Quiz",
        },
        {
          text: "Page",
          href: "https://soda-stereo-quiz.vercel.app/",
        },
      ],
      tags: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    },
    // {
    //   image: "images/projects/portfolio-poster.png",
    //   title: "HealthPage (prototype)",
    //   bodyText:
    //     "- Page desing of a medical services company.\n - Created with Figma.",
    //   links: [
    //     {
    //       text: "Images",
    //       href: "",
    //     },
    //   ],
    //   tags: ["Figma"],
    // },
    // {
    //   image: "images/projects/portfolio-poster.png",
    //   title: "Desertic (prototype)",
    //   bodyText:
    //     "- Design of a page for students who need support in difficult circumstances.\n - Created with Figma.",
    //   links: [
    //     {
    //       text: "Images",
    //       href: "",
    //     },
    //   ],
    //   tags: ["Figma"],
    // },
  ];

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container style={styles.containerStyle}>
          <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {projectsData.map((project) => (
              <Fade key={project.title}>
                <ProjectCard project={project} />
              </Fade>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Projects;
