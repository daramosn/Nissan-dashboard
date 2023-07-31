import React from 'react'
import Card from '@/components/UI/Card/Card'
import Header from '@/components/Header/Header'

import './Home.scss'
import ProductsList from '@/components/ProductsList/ProductsList'

export default function Home() {
    return (
        <>
            {/* @ts-ignore */}
            <marquee direction="right" style={{ background: '#ffb74d' }}>
                ✴️ ✴️ ✴️ -- Still in progress! 🛠️ - - - - Still in progress! 🛠️
                - - - - Still in progress! 🛠️ - - - - Still in progress! 🛠️ --
                ✴️ ✴️ ✴️
                {/* @ts-ignore */}
            </marquee>
            <Card className="container">
                <Header />
                <ProductsList />
            </Card>
        </>
    )
}
