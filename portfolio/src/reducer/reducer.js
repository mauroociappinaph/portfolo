export const initialState = {
    typingEffect: true,
    title: ""
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case "SET_TYPING_EFFECT":
        return { ...state, typingEffect: action.payload };
      case "SET_TITLE":
        return { ...state, title: action.payload };
      default:
        return state;
    }
  }
  