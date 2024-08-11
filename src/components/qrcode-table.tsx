'use client'
import { getTableLink } from '@/lib/utils'
import QRCode from 'qrcode'
import React from 'react'
export default function QRCodeTable({
    token,
    tableNumber,
    width = 250,
}: {
    token: string,
    tableNumber: number,
    width?: number
}) {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    React.useEffect(() => {
        const QRCode = require('qrcode')
        const canvas = canvasRef.current

        QRCode.toCanvas(canvas, getTableLink({
            token,
            tableNumber
        }), function (error: any) {
            if (error) console.error(error)
            console.log('success!');
        })
    })
    return (
        <canvas ref={canvasRef}></canvas>
    )
}