import React, { createContext, useState } from 'react'
export const CounterContext = createContext()

export default function CounterContextProvider(props) {
  const [stateValue, setStateValue] = useState(0)
  //addHandler
  const incrementHandler = () => {
    setStateValue(stateValue + 1)
  }
  //decrementHandler
  const decrementHandler = () => {
    setStateValue(stateValue - 1)
  }
  return (
    <>
      <CounterContext.Provider value={{ stateValue, incrementHandler, decrementHandler }}>
        {props.children}
      </CounterContext.Provider>
    </>
  )
}
