import React, { FC, ReactNode } from 'react'

import './Button.scss'

type ButtonProps = {
    children: ReactNode
    className?: string
}

const Button: FC<ButtonProps> = ({ children, className }) => {
    return <button className={`button ${className}`}>{children}</button>
}

export default Button
