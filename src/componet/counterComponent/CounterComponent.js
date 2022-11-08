import React, { useContext } from 'react'
import { CounterContext } from '../../context/CounterContext'
export default function CounterComponent() {
    const { stateValue, incrementHandler, decrementHandler } = useContext(CounterContext)
    console.log("statevalue ", stateValue)
    return (
        <>
            <button onClick={incrementHandler} >+</button>{stateValue} <button onClick={decrementHandler}>-</button>
        </>
    )
}
