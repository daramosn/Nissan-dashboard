import React from 'react'

import Product from '../Product/Product'
import { dummyProducts } from '../../db/db'
import { IconDownArrow } from '@/assets/IconDownArrow'

import './ProductsList.scss'

const ProductsList = () => {
    return (
        <>
            <ul className="list">
                {dummyProducts.map((product, index) => (
                    <Product
                        key={index}
                        name={product.name}
                        mileston={product.mileston}
                        completion={product.completion}
                        progress={product.progress}
                        percent={product.percent}
                        status={product.status}
                    />
                ))}
            </ul>
            <div className="list__message">
                <p className="list__message-text">Scroll down to see more</p>
                <IconDownArrow className="list__message-icon" />
            </div>
        </>
    )
}

export default ProductsList
