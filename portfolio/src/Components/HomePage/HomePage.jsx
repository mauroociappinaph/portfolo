import React, { useEffect, useReducer, useRef } from "react";
import styles from "../HomePage/HomePage.module.css";
import BarraInicio from "./BarraInicio/BarraInicio";
import { initialState, reducer } from "../../reducer/reducer";
import { setTypingEffect, setTitle } from "../../actions/actions";

const HomePage = () => {
  // Inicializa el estado y la función dispatch usando el reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Crea una referencia para mantener el título actual
  const titleRef = useRef(state.title);

  // Actualiza la referencia cada vez que el título cambia
  useEffect(() => {
    titleRef.current = state.title;
  }, [state.title]);

  // Inicia el efecto de escritura cuando typingEffect es verdadero
  useEffect(() => {
    if (state.typingEffect) {
      startTypingEffect();
    }
  }, [state.typingEffect]);

  const startTypingEffect = () => {
    const text = "Bienvenidos";
    let index = 0;

    // Crea un intervalo que se ejecuta cada 100ms
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        // Añade el siguiente carácter al título
        dispatch(setTitle(titleRef.current + text[index]));
        index++;
      } else {
        // Limpia el intervalo cuando se han mostrado todos los caracteres
        clearInterval(typingInterval);
      }
    }, 150);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{state.title}</h1>
      <BarraInicio />
    </div>
  );
};

export default HomePage;
