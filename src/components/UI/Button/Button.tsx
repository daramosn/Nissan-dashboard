import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import './Button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    className?: string
}

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
