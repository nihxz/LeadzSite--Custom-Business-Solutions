import { Urbanist } from 'next/font/google'
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import "/public/assets/css/style.css"
import "/public/assets/css/custom.css"
const urban = Urbanist({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--tg-body-font-family",
    display: 'swap',
})
export const metadata = {
    title: 'LeadzSite Intelligence - AI Digital Marketing',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={urban.variable}>{children}</body>
        </html>
    )
}
