import React, { useEffect, useState, useContext } from "react";
import { Chrono } from "react-chrono";
import { Container } from "react-bootstrap";
import Fade from "react-reveal";
import { ThemeContext } from "styled-components";
import Header from "./Header";
import "../css/Education.module.css";

function Education(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [width, setWidth] = useState("50vw");
  const [mode, setMode] = useState("VERTICAL_ALTERNATING");

  useEffect(() => {
    if (window?.innerWidth < 576) {
      setMode("VERTICAL");
    }
    if (window?.innerWidth < 576) {
      setWidth("105vw");
    } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
      setWidth("90vw");
    } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
      setWidth("75vw");
    } else {
      setWidth("40vw");
    }
  }, []);

  const educationData = {
    education: [
      {
        cardTitle: "Full-Stack Web Developer",
        cardSubtitle: "SoyHenry Bootcamp",
        cardDetailedText: "Bootcamp, Jan 2022 - Apr 2022",
      },
      {
        
        cardTitle: "Computer Technician",
        cardSubtitle: "T.S Admiral Brown n°36",
        cardDetailedText: "Technical High School, Jan 2016 - Dec 2021",
      },
      {
        
        cardTitle: "First Certificate in English",
        cardSubtitle: "English Culture of Buenos Aires",
        cardDetailedText: "English academy, Mar 2016 - Apr 2022 ",
      },
    ],
  };

  return (
    <>
      <Header title={header} />
      {
        <Fade>
          <div style={{ width }} className="section-content-container">
            <Container>
              <Chrono
                hideControls
                allowDynamicUpdate
                disableNavOnKey
                disableClickOnCircle
                disableAutoScrollOnClick
                useReadMore={false}
                items={educationData.education}
                activeItemIndex={false}
                cardHeight={200}
                cardWidth={350}
                mode={mode}
                theme={{
                  primary: theme.chronoTheme.primaryColor,
                  secondary: theme.accentColor,
                  cardBgColor: theme.chronoTheme.cardBgColor,
                  cardForeColor: theme.chronoTheme.cardForeColor,
                }}
              ></Chrono>
            </Container>
          </div>
        </Fade>
      }
    </>
  );
}

export default Education;
