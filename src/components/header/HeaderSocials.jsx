import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https:www.linkedin.com/in/talha-malik-7ba928258" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/MalikTalha5524" target="blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
