'use client'
import React, { FC, useEffect, useState } from 'react'

import './CircleBar.scss'

type CircleBarProps = {
    value: number
}

const CircleBar: FC<CircleBarProps> = ({ value = 0 }) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter < value) {
                setCounter((prevCounter) => prevCounter + 1)
            }
        }, 10)

        return () => clearInterval(interval)
    }, [value, counter])

    const lengthCircle = 622 - (counter / 100) * 622

    return (
        <div className="circle-bar">
            <svg
                className="circle-bar__svg"
                viewBox="-22.25 -22.25 222.5 222.5"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle className="circle-bar__track" r="99" cx="89" cy="89" />
                <circle
                    className="circle-bar__progress"
                    r="99"
                    cx="89"
                    cy="89"
                    strokeDasharray="622px"
                    stroke-dashoffset={lengthCircle + 'px'}
                />
            </svg>
            <p className="circle-bar__number">
                {counter} <span className="circle-bar__number-symbol">%</span>
            </p>
        </div>
    )
}

export default CircleBar
