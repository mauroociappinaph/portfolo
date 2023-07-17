import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './SocialMediaIcon.css';

const SocialMediaLinks = () => {
  return (
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
  );
};

export default SocialMediaLinks;
