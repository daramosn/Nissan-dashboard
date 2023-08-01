'use client'
import { FC, useState } from 'react'

import Button from '../UI/Button/Button'
import ProductDetails from './ProductDetails/ProductDetails'

import './Product.scss'
import Card from '../UI/Card/Card'

type ProductProps = {
    name: string
    mileston: string
    completion: string
    progress: string[]
    percent: number
    status: string
}

const Product: FC<ProductProps> = ({
    name,
    mileston,
    completion,
    progress,
    percent,
    status,
}) => {
    const [showContent, setShowContent] = useState(false)

    const showStateHandler = () => {
        setShowContent((prevShowContent) => !prevShowContent)
    }

    return (
        <Card>
            <div className="product">
                <div className="product__led" />
                <h5 className="product__name">{name}</h5>
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
                            Next Mileston <span>{mileston}</span>
                        </h5>
                        <h5 className="product__state-completion">
                            Est Completion <span>{completion}</span>
                        </h5>

                        {progress.map((state, index) => (
                            <span
                                key={index}
                                className={`product__state-bar product__state-bar--${state}`}
                            />
                        ))}
                    </div>
                )}

                <div
                    className={`product__status ${
                        showContent && 'product__status--margin'
                    }`}
                >
                    <h5 className="product__status-title">Status</h5>
                    <p className="product__status-description">{status}</p>
                </div>

                <button
                    className={`product__button-add ${
                        showContent && 'product__button-add--anim'
                    }`}
                    onClick={showStateHandler}
                />
            </div>

            {showContent && (
                <ProductDetails
                    mileston={mileston}
                    completion={completion}
                    progress={progress}
                    percent={percent}
                />
            )}
        </Card>
    )
}

export default Product
