import React, { FC } from 'react'

import './CircleProgressBar.scss'

type CircleProgressBarProps = {
    value: number
}

const CircleProgressBar: FC<CircleProgressBarProps> = ({ value }) => {
    return (
        <div className="bar">
            <span>{value}%</span>
        </div>
    )
}

export default CircleProgressBar
