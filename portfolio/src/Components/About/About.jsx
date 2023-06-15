import React from 'react';
import NavBar from '../NavBar/NavBar';
import Avatar from 'react-avatar';
import styles from './About.module.css';
import Footer from '../Footer/Footer';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.header}>
          <Avatar
            src={require('../../asset/Profile.jpg')}
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
        <div className={styles.content}>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum eros in
            hendrerit ullamcorper. Curabitur et mauris auctor, eleifend tellus a, rhoncus tellus.
            Suspendisse vestibulum metus mauris, sed auctor nunc placerat vitae. Aliquam aliquam
            purus non semper tincidunt. Duis tincidunt, purus id gravida faucibus, lacus mauris
            fermentum sem, sed semper sem nulla in mi. Duis feugiat rhoncus diam, nec semper nibh
            posuere vitae. Curabitur feugiat congue posuere. Sed in tellus non dui rutrum mollis
            a eu magna.
          </p>
          <p>
            Sed non ullamcorper ipsum. Proin consectetur, nisi vitae condimentum facilisis, tortor
            mauris lobortis massa, vel venenatis mi neque id ligula. Donec commodo sollicitudin
            tortor in placerat. Aenean quis felis vitae enim viverra dignissim ut vel nunc. Nam
            eget eleifend lectus. Etiam gravida nulla non felis placerat rhoncus. Integer aliquet
            blandit nunc, vel fringilla nunc pulvinar in. Sed sed tellus tincidunt, tristique nunc
            in, dapibus ipsum. Aenean at ante ut elit tincidunt hendrerit. Fusce rhoncus efficitur
            purus, at tristique velit luctus non. Quisque bibendum ante ac mi dapibus, at molestie
            tellus consequat. Mauris mollis magna a purus lacinia ullamcorper. Etiam id neque ac
            purus dapibus posuere. Nam nec augue sem.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
