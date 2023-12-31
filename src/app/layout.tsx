import './globals.css'
import type { Metadata } from 'next'
import { Assistant } from 'next/font/google'
import React from 'react'

const assistant = Assistant({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Test - Nissan dashboard',
    description: 'App created by @daramosn',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={assistant.className}>{children}</body>
        </html>
    )
}
