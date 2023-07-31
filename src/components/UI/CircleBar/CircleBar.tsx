import React, { FC } from 'react'

import './CircleBar.scss'

type CircleBarProps = {
    value: number
}

const CircleBar: FC<CircleBarProps> = ({ value = 0 }) => {
    const lenghtCircle = 622 - (value / 100) * 622

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
                    stroke-dasharray="622px"
                    stroke-dashoffset={lenghtCircle + 'px'}
                />
            </svg>
            <p className="circle-bar__number">
                {value} <span className="circle-bar__number-symbol">%</span>
            </p>
        </div>
    )
}

export default CircleBar
