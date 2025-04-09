import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import SearchForm from './SearchForm'
import MobileMenu from '../MobileMenu'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, topBar, headerCls, logoWhite }) {
    const pathname = usePathname();
    
    useEffect(() => {
        if (isMobileMenu) {
            document.body.classList.add('mobile-menu-active');
        } else {
            document.body.classList.remove('mobile-menu-active');
        }
    }, [isMobileMenu]);
    
    const isActive = (path) => {
        return pathname === path ? { color: '#9EFF00' } : { color: 'black' };
    };

    return (
        <>
            <header className={`header ${headerCls ? headerCls : ""} sticky-bar ${scroll ? "stick" : ""}`} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                <div className="container">
                    <div className="main-header d-flex align-items-center justify-content-between">
                        <div className="header-left d-flex align-items-center">
                            <div className="header-logo me-4">
                                <Link className="d-flex" href="/">
                                    <img className='headerLogo' alt="LEADZSITE" src={`/assets/imgs/template/${logoWhite ? "logo" : "logo-black"}.svg`} style={{ maxWidth: '150px', height: 'auto' }} />
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu d-flex align-items-center m-0">
                                        <li><Link href="/" style={isActive('/')}>Performance Marketing</Link></li>
                                        <li><Link href="/about" style={isActive('/about')}>About</Link></li>
                                        <li><Link href="/contact" style={isActive('/contact')}>Contact</Link></li>
                                        <li><Link href="/service/web-agency" style={isActive('/service/web-agency')}>Get Started</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header-right d-flex align-items-center">
                            <Link className="btn btn-brand-4-medium hover-up" href="#" style={{ 
                                backgroundColor: '#9EFF00',
                                color: '#1A0B2E',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                fontWeight: '500',
                                marginLeft: '20px'
                            }}>
                                Business Consultation →
                            </Link>
                            <div className="burger-icon burger-icon-white ms-4" onClick={handleMobileMenu}>
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
        </>
    )
}
