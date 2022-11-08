import React, { useContext, useState } from 'react'
import { CounterContext } from '../../context/CounterContext'

export default function AddComponent() {
    const { stateValue } = useContext(CounterContext)
    return (
        <>

            <h1>add Component</h1>
            <h4>3 +{stateValue} ={3 + stateValue}</h4>

        </>
    )
}
