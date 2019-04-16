import React, { createContext, useReducer } from 'react';

export let initialState = {
  lenguage: {
    aboutUs: 'Sobre nosotros',
    ourServices: 'Nuestros servicios',
    coverText: 'Potencializa y crece exponencialmente tu negocio con nuestro servicios digitales.', 
    contact: 'Contactanos'
  }, 
  prevCode: 'es', 
  error: null
}

let ContextOne = createContext(initialState);

export let reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'changeLenguage':
      return {
        ...state,
        lenguage: action.lenguage, 
        prevCode: action.prevCode
      }
    default:
      return state;
  }
}

const ContextOneProvider = (props) => {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };
  
  return (
    <ContextOne.Provider value={value} > {props.children} </ContextOne.Provider>
  )
}
let ContextOneConsumer = ContextOne.Consumer;


export { ContextOne, ContextOneProvider };