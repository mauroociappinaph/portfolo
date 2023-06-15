import React, { useState } from "react";
import Avatar from "react-avatar";
import styles from "./Header.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <header>
      <div className={styles["header-container"]}>
        <div className={styles.gridContainer}>
          <div className={styles.avatarContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Avatar
              src={require("../../asset/Profile.jpg")}
              name="Mauro Ciappina"
              size={100}
              round={true}
              className={styles.avatar}
            />
            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/in/maurojoseciappina/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FaLinkedin className={styles.socialIcon} />
              </a>
              <a
                href="https://github.com/mauroociappinaph"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FaGithub className={styles.socialIcon} />
              </a>
            </div>
          </div>
          <div className={`${styles.infoContainer} ${showInfo ? styles.showInfo : ""}`}>
            {showInfo && (
              <>
                <h1 className={`${styles.name} extra-bold`}>Mauro Ciappina</h1>
                <p className={`${styles.description} extra-bold`}>FullStack Developer</p>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
