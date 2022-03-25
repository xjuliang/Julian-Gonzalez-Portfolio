import React from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import Social from './Social';

const styles = {
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default function Home() {
  return (
    <Fade>
      <div style={styles.mainContainer}>
        <h1 style={styles.nameStyle}>Julian Gonzalez</h1>
        <div style={{ flexDirection: 'row' }}>
          <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: ['a Full-Stack Dev', 'a Computer Tech'],
            }}
          />
        </div>
        <Social />
      </div>
    </Fade>
  );
}
