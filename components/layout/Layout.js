'use client'
import { useEffect, useState } from "react"
import AddClassBody from '../elements/AddClassBody'
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from './footer/Footer3'
import Footer4 from './footer/Footer4'
import Header1 from "./header/Header1"
import '@/public/assets/css/mobile-menu.css'

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, topBar, headerCls, logoWhite }) {
    const [scroll, setScroll] = useState(0)
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        if (!isMobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })

        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    return (
        <>
            <AddClassBody />
            <div className={`body-overlay-1 ${isMobileMenu ? 'active' : ''}`} onClick={handleMobileMenu} />

            {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} topBar={topBar} headerCls={headerCls} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} topBar={topBar} headerCls={headerCls} logoWhite={logoWhite} /> : null}

            <main className="main">
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                {children}
            </main>

            {!footerStyle && <Footer1 />}
            {footerStyle == 1 ? <Footer1 /> : null}
            {footerStyle == 2 ? <Footer2 /> : null}
            {footerStyle == 3 ? <Footer3 /> : null}
            {footerStyle == 4 ? <Footer4 /> : null}

            <BackToTop />
        </>
    )
}
