import React, { useContext } from "react";
import { SocialIcon } from "react-social-icons";
import { ThemeContext } from "styled-components";


const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

function Social() {
  const theme = useContext(ThemeContext);

  const socialMedia = [
    {
      network: "linkedin",
      href: "https://www.linkedin.com/in/juli%C3%A1n-marcos-gonz%C3%A1lez-354403201/",
    },
    {
      network: "github",
      href: "https://github.com/xjuliang",
    },
    {
      network: "twitter",
      href: "https://twitter.com/xjuliangonzalez",
    },
  ];

  return (
    <div className="social">
      {socialMedia.map((social) => (
        <SocialIcon
          key={social.network}
          style={styles.iconStyle}
          url={social.href}
          network={social.network}
          bgColor={theme.socialIconBgColor}
          target="_blank"
          rel="noopener"
        />
      ))}
    </div>
  );
}

export default Social;
