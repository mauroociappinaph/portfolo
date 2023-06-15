import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import BarraInicio from "./BarraInicio/BarraInicio";

const HomePage = () => {
  const [typingEffect, setTypingEffect] = useState(true);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (typingEffect) {
      startTypingEffect();
    }
  }, [typingEffect]);
  

  const startTypingEffect = () => {
    const text = "Bienvenidos";
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setTitle((prevTitle) => prevTitle + text[index]);
        index++;
      } else {
        clearInterval(typingInterval);
        setTypingEffect(false);
      }
    }, 100);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <BarraInicio />
    </div>
  );
};

export default HomePage;
