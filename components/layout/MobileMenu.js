'use client'
import Link from 'next/link'
import { useState } from "react"
import { usePathname } from 'next/navigation'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    const getActiveStyle = (path) => {
        return {
            color: pathname === path ? '#9EFF00' : '#1A0B2E',
            textDecoration: 'none',
            fontSize: '18px'
        };
    }

    return (
        <>
            <div 
                className={`mobile-header-active mobile-header-wrapper-style ${isMobileMenu ? "sidebar-visible" : ""}`} 
                style={{ 
                    backgroundColor: '#ffffff',
                    zIndex: 9999,
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '300px',
                    height: '100vh',
                    padding: '20px',
                    boxShadow: '-2px 0 4px rgba(0,0,0,0.1)',
                    transform: isMobileMenu ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.3s ease-in-out'
                }}
            >
                <div className="mobile-header-wrapper-inner">
                    <div 
                        style={{ 
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            cursor: 'pointer',
                            fontSize: '24px'
                        }} 
                        onClick={handleMobileMenu}
                    >
                        ×
                    </div>
                    <div className="mobile-header-content-area" style={{ marginTop: '60px' }}>
                        <nav>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li style={{ margin: '15px 0' }}><Link href="/" onClick={handleMobileMenu} style={getActiveStyle('/')}>Performance Marketing</Link></li>
                                <li style={{ margin: '15px 0' }}><Link href="/about" onClick={handleMobileMenu} style={getActiveStyle('/about')}>About</Link></li>
                                <li style={{ margin: '15px 0' }}><Link href="/contact" onClick={handleMobileMenu} style={getActiveStyle('/contact')}>Contact</Link></li>
                                <li style={{ margin: '15px 0' }}><Link href="/service/web-agency" onClick={handleMobileMenu} style={getActiveStyle('/service/web-agency')}>Get Started</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {isMobileMenu && (
                <div 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 9998
                    }}
                    onClick={handleMobileMenu}
                />
            )}
        </>
    )
}
