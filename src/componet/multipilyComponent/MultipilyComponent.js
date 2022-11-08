import React, { useContext } from 'react'
import { CounterContext } from '../../context/CounterContext'

export default function MultipilyComponent() {
    const { stateValue } = useContext(CounterContext)
    return (
        <>
            <h1>MultipilyComponent</h1>
            <h4>5 * {stateValue} ={5 * stateValue}</h4>
        </>
    )
}
