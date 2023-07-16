import React, { useEffect, useReducer, useRef } from "react"; // import useRef
import styles from "./HomePage.module.css";
import BarraInicio from "./BarraInicio/BarraInicio";

const initialState = {
  typingEffect: true,
  title: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_TYPING_EFFECT":
      return { ...state, typingEffect: action.payload };
    case "SET_TITLE":
      return { ...state, title: action.payload };
    default:
      return state;
  }
}

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const titleRef = useRef(state.title); // create a ref

  useEffect(() => {
    titleRef.current = state.title; // update the ref every time state.title changes
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
        dispatch({ type: "SET_TITLE", payload: titleRef.current + text[index] });
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
