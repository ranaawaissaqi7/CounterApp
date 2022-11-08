import React, { useContext } from 'react'
import { CounterContext } from '../../context/CounterContext'

export default function SubtractComponent() {
    const { stateValue } = useContext(CounterContext)
    return (
        <>
            <h1>Subtract Component</h1>
            <h4>4 - {stateValue} ={4 - stateValue}</h4>
        </>
    )
}
