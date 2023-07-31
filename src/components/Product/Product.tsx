'use client'
import { useState } from 'react'

import Button from '../UI/Button/Button'
// import { IconLink } from '@/assets/IconLink'
// import { IconBox } from '@/assets/IconBox'
// import { IconHelp } from '@/assets/IconHelp'
import Card from '../UI/Card/Card'
import ProductDetails from './ProductDetails/ProductDetails'

import './Product.scss'

const Product = () => {
    const [showContent, setShowContent] = useState(false)

    const showStateHandler = () => {
        setShowContent((prevShowContent) => !prevShowContent)
    }

    return (
        <Card>
            <div className="product">
                <div className="product__led" />
                <h5 className="product__name">Nissan Juke</h5>
                <div>
                    <Button>Product</Button>
                    <Button className="product__button--pink">Storyline</Button>
                </div>

                {!showContent && (
                    <div className="product__state">
                        <h5 className="product__state-stage">
                            Stage <span>GOLD</span>
                        </h5>
                        <h5 className="product__state-mileston">
                            Next Mileston <span>01.09.22</span>
                        </h5>
                        <h5 className="product__state-completion">
                            Est Completion <span>19.11.22</span>
                        </h5>

                        <span className="product__state-bar" />
                        <span className="product__state-bar" />
                        <span className="product__state-bar" />
                        <span className="product__state-bar" />
                        <span className="product__state-bar" />
                        <span className="product__state-bar" />
                        <span className="product__state-bar" />
                        <span className="product__state-bar" />
                        <span className="product__state-bar" />
                        <span className="product__state-bar" />
                    </div>
                )}

                <div
                    className={`product__status ${
                        showContent && 'product__status--margin'
                    }`}
                >
                    <h5 className="product__status-title">Status</h5>
                    <p className="product__status-description">
                        With client to review
                    </p>
                </div>

                <button
                    className={`product__button-add ${
                        showContent && 'product__button-add--anim'
                    }`}
                    onClick={showStateHandler}
                />
            </div>

            {showContent && <ProductDetails />}
        </Card>
    )
}

export default Product
