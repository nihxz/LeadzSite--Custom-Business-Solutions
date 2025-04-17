import { Urbanist } from 'next/font/google'
import Script from 'next/script'
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
            <head>
                {/* Google Tag Manager */}
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-WPR9WFMT');
                    `}
                </Script>
                {/* End Google Tag Manager */}
                
                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-RK9Y22RHM0"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-RK9Y22RHM0');
                    `}
                </Script>
                {/* End Google Analytics */}
            </head>
            <body className={urban.variable}>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe 
                        src="https://www.googletagmanager.com/ns.html?id=GTM-WPR9WFMT"
                        height="0" 
                        width="0" 
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                {children}
            </body>
        </html>
    )
}
