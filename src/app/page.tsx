import React from 'react'
import Card from '@/components/UI/Card/Card'
import Header from '@/components/Header/Header'
import ProductsList from '@/components/ProductsList/ProductsList'

import './Home.scss'

export default function Home() {
    return (
        <Card className="container">
            <Header />
            <ProductsList />
        </Card>
    )
}
