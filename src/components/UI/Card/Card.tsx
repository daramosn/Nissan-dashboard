import React, { FC, ReactNode } from 'react'

import './Card.scss'

type CardProps = {
    className?: string
    children: ReactNode
}

const Card: FC<CardProps> = ({ children, className }) => {
    return <div className={`card ${className}`}> {children} </div>
}

export default Card
