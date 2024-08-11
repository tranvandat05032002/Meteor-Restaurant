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
    // Hiện tại: Thư viện QRCode nó sẽ vẽ lên cái thẻ canvas
    // Bây giờ: Sẽ tạo ra một acis thẻ acnvas ảo để thư viện QRCode nó vẽ QR lên trên đó.
    // Và sau đó sẽ edit trên thẻ canvas thật
    // Cuối cùng thì sẽ đưa ra cái thẻ canvas ảo chứa QR Code ở trên vào thẻ Canvas thật
    React.useEffect(() => {
        const canvas = canvasRef.current!
        canvas.width = width
        canvas.height = width + 70

        const canvasContext = canvas.getContext('2d')!
        // Tạo khung QR
        canvasContext.fillStyle = "#fff"
        canvasContext.fillRect(0, 0, canvas.width, canvas.height)
        // style
        canvasContext.font = 'bold 20px Arial';
        canvasContext.textAlign = 'center';
        canvasContext.fillStyle = '#000';
        canvasContext.fillText('Meteor'.toUpperCase(), canvas.width / 2, 30);
        canvasContext.font = '20px Arial'
        canvasContext.fillText(`Bàn số ${tableNumber}`, canvas.width / 2, canvas.width + 20)
        canvasContext.fillText(`Quét mã QR để gọi món`, canvas.width / 2, canvas.width + 45)

        const QRCode = require('qrcode')

        const virtualCanvas = document.createElement('canvas')
        QRCode.toCanvas(virtualCanvas, getTableLink({
            token,
            tableNumber
        }), {
            width,
            margin: 2,
            color: {
                dark: '#87cbfb',  // Mã QR màu xanh
                light: '#FFFFFF'  // Nền trắng (hoặc bạn có thể đặt màu nền khác)
            }
        }, function (error: any) {
            if (error) console.error(error)
            console.log('success!');
            const canvasWidth = Number(width) - 35 as number
            const qrCodeX = (width - canvasWidth) / 2
            canvasContext.drawImage(virtualCanvas, qrCodeX, 35, canvasWidth, canvasWidth)
        })
    }, [token, tableNumber, width])

    return (
        <canvas ref={canvasRef}></canvas>
    )
}