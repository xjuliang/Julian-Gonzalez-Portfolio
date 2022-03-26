import React, { useContext } from "react";
import { Container, Col, Image, Button } from "react-bootstrap";
import Fade from "react-reveal";
import Header from "./Header";
// import profileImg from "../images/about/photo.jpeg";
import styles from "../css/About.module.css";
import { ThemeContext } from 'styled-components';

function About(props) {
  const { header } = props;
  const theme = useContext(ThemeContext);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          <Fade>
            {/* <Col className={styles.introImageContainer}>
                <Image src={profileImg} fluid className={styles.profileImg} />
              </Col> */}
            <Col className={styles.introTextContainer}>
              I consider myself a pro active and a self taught person. In 2021 I
              finished high school with the title of computer technician, and
              that is when I made the decision to continue learning about
              software development. So after that I signed up for a coding
              bootcamp, where I worked on several projects. I have some
              experience with the English language, which opens many doors for
              me.  am currently looking for a job in the IT industry.
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
                  variant={'outline-' + theme.bsSecondaryVariant}
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
