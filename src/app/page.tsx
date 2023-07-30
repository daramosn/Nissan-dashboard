import Card from '@/components/UI/Card/Card'
import Header from '@/components/Header/Header'
import Product from '@/components/Product/Product'

import './Home.scss'
import React from 'react'

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
                <Product />
            </Card>
        </>
    )
}
