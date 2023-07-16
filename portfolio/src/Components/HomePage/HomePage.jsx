import React, { useEffect, useReducer, useRef } from "react";
import styles from "../HomePage/HomePage.module.css";
import BarraInicio from "./BarraInicio/BarraInicio";
import { initialState, reducer } from "../../reducer/reducer";
import { setTypingEffect, setTitle } from "../../actions/actions";

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const titleRef = useRef(state.title);

  useEffect(() => {
    titleRef.current = state.title;
  }, [state.title]);

  useEffect(() => {
    if (state.typingEffect) {
      startTypingEffect();
    }
  }, [state.typingEffect]);

  const startTypingEffect = () => {
    const text = "Bienvenidos";
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        dispatch(setTitle(titleRef.current + text[index]));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{state.title}</h1>
      <BarraInicio />
    </div>
  );
};

export default HomePage;
