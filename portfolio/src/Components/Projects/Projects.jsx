import React from "react";
import { useTrail, animated } from "react-spring";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "This is the description of Project 1."
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is the description of Project 2."
    }
    // Agrega más proyectos aquí
  ];

  const trail = useTrail(projects.length, {
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 200
  });

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.projectList}>
          {trail.map((style, index) => (
            <animated.div
              key={projects[index].id}
              className={styles.projectItem}
              style={style}
            >
              <h2 className={styles.projectTitle}>{projects[index].title}</h2>
              <p className={styles.projectDescription}>
                {projects[index].description}
              </p>
            </animated.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
