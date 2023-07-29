import React from 'react'

import Card from '../UI/Card/Card'
import { Nissan } from '@/assets/Nissan'
import './Header.scss'

const Header = () => {
    return (
        <Card className="header">
            <Nissan className="header__logo" />

            <section className="header__title">
                <h3 className="header__title-brand">
                    Nissan{' '}
                    <span className="header__title-project">
                        Project Dashboard
                    </span>
                </h3>
                <h5 className="header__title-description">
                    Various elearning modules
                </h5>
            </section>

            <section className="header__modules">
                <h6 className="header__modules-title">Number of modules</h6>
                <div className="header__modules-details">
                    <div>
                        <h6 className="header__modules-item-feature">
                            Product
                        </h6>
                        <h5 className="header__modules-item-value">13</h5>
                    </div>
                    <div className="header__modules-item">
                        <h6 className="header__modules-item-feature">
                            Technical
                        </h6>
                        <h5 className="header__modules-item-value">10</h5>
                    </div>
                    <div className="header__modules-item">
                        <h6 className="header__modules-item-feature">
                            Various
                        </h6>
                        <h5 className="header__modules-item-value">7</h5>
                    </div>
                </div>
            </section>

            <div className="header__state">
                <div>
                    <h5 className="header__state-title">
                        Current completition
                    </h5>
                    <h4 className="header__state-date">19th November 2022</h4>
                </div>
                <div className="header__state-bar">
                    <p>82%</p>
                </div>
            </div>

            <div className="header__menu">
                <h5 className="header__menu-text">Menu</h5>
                <button className="header__menu-burger">
                    <span className="header__menu-burger-row" />
                    <span className="header__menu-burger-row" />
                    <span className="header__menu-burger-row" />
                </button>
            </div>
        </Card>
    )
}

export default Header
