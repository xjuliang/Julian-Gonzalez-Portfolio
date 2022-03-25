import React from "react";
import ReactMarkdown from "react-markdown";
import Fade from "react-reveal";
import { Container } from "react-bootstrap";
import Header from "./Header";

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 0,
  },
  introTextContainer: {
    whiteSpace: "pre-wrap",
  },
  skillsContainer: {
    marginBottom: "4em"
  }
};

export default function Skills() {
  

  const skillsInfo = {
    intro:
      "These are some of the major languages, technologies, tools and platforms I have worked with:",
    skills: [
      {
        title: "Front-End",
        items: [
          {
            icon: "images/skills/js.png",
            title: "JavaScript",
          },
          {
            icon: "images/skills/typescript.png",
            title: "TypeScript",
          },
          {
            icon: "images/skills/react.png",
            title: "React",
          },
          {
            icon: "images/skills/redux.png",
            title: "Redux",
          },
          {
            icon: "images/skills/html.png",
            title: "HTML",
          },
          {
            icon: "images/skills/css.png",
            title: "CSS",
          },
          {
            icon: "images/skills/bootstrap.png",
            title: "Bootstrap",
          },
        ],
      },
      {
        title: "Back-End",
        items: [
          {
            icon: "images/skills/nodejs.png",
            title: "Nodejs",
          },
          {
            icon: "images/skills/express.png",
            title: "Express",
          },
          {
            icon: "images/skills/mysql.png",
            title: "MySQL",
          },
          {
            icon: "images/skills/sequelize.png",
            title: "Sequelize",
          },
          {
            icon: "images/skills/postgresql.png",
            title: "PostgreSQL",
          },
          {
            icon: "images/skills/mongo-db.png",
            title: "MongoDB",
          },
        ],
      },
      {
        title: "Others",
        items: [
          {
            icon: "images/skills/vscode.png",
            title: "VS Code",
          },
          {
            icon: "images/skills/git.png",
            title: "Git",
          },
          {
            icon: "images/skills/figma.png",
            title: "Figma",
          },
        ],
      },
    ],
  };

  const renderSkillsIntro = (intro) => (
    <h5 style={styles.introTextContainer}>
      <ReactMarkdown children={intro} />
    </h5>
  );
  return (
    <>
      <Header title="Skills" />
      {
        <Fade>
          <div className="section-content-container">
            <Container style={styles.skillsContainer}>
              {renderSkillsIntro(skillsInfo.intro)}
              {skillsInfo.skills.map((rows) => (
                <div key={rows.title}>
                  <br />
                  <h3>{rows.title}</h3>
                  {rows.items.map((item) => (
                    <div key={item.title} style={{ display: "inline-block" }}>
                      <img
                        style={styles.iconStyle}
                        src={item.icon}
                        alt={item.title}
                      />
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              ))}
            </Container>
          </div>
        </Fade>
      }
    </>
  );
}

