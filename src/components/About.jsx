import React, { useContext } from "react";
import { Container, Col, Image, Button } from "react-bootstrap";
import Fade from "react-reveal";
import Header from "./Header";
// import profileImg from "../images/about/photo.jpeg";
import styles from "../css/About.module.css";
import { ThemeContext } from "styled-components";

function About(props) {
  const { header } = props;
  const theme = useContext(ThemeContext);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container className={styles.mainContainer}>
          <Fade>
            {/* <Col className={styles.introImageContainer}>
                <Image src={profileImg} fluid className={styles.profileImg} />
              </Col> */}
            <Col className={styles.introTextContainer}>
              I consider myself an active person, who is constantly learning and
              always willing to receive feedback. <br></br>
              In 2021 I finished high school with the title of computer
              technician, and that is when I made the decision to continue
              learning about software development. So I decided to sing up for a
              coding bootcamp, where I learned many technologies and worked on
              several projects.
              <br></br>I have experience with the English language, which opens
              many doors for me .<br></br>I believe that the best way to
              approach projects is being ready for the obstacles that will come
              our way, and despite the frustration, that is when we will learn
              the most.
              <Col className={styles.countryContainer}>
                Country:{" "}
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png"
                  className={styles.countryImg}
                />
              </Col>
              <Col>
                <Button
                  target="_blank"
                  href="https://drive.google.com/file/d/1pznst9PHQ435Nlz4x7ehLayV5ei8I3Og/view"
                  className={styles.resumeButton}
                  variant={"outline-" + theme.bsSecondaryVariant}
                  size="lg"
                >
                  Resume
                </Button>
              </Col>
            </Col>
          </Fade>
        </Container>
      </div>
    </>
  );
}

export default About;
