import React, { useContext } from 'react'
import { CounterContext } from '../../context/CounterContext'

export default function DividedComponent() {
    const { stateValue } = useContext(CounterContext)
    return (
        <>
            <h1>Divided Component</h1>
            <h4>{stateValue} /6 ={stateValue / 6}</h4>
        </>
    )
}
