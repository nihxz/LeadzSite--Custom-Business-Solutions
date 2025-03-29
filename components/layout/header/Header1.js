import Link from 'next/link'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, topBar, headerCls, logoWhite }) {
    return (
        <>
            <header className={`header ${headerCls ? headerCls : ""} sticky-bar ${scroll ? "stick" : ""}`}>
                {topBar &&
                    <div className="top-bar">
                        <div className="container">
                            <div className="top-bar-inner">
                                <div className="box-top-bar-left"><span className="address-icon text-md">Bangalore, India</span>
                                </div>
                                <div className="box-top-bar-right">
                                    <a className="phone-icon text-md" href="tel:8951085496">8951085496</a>
                                    <a className="email-icon text-md" href="mailto:nihal@leadzsite">nihal@leadzsite</a>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link className="d-flex" href="/">
                                    <img className='headerLogo' alt="LEADZSITE" src={`/assets/imgs/template/${logoWhite ? "logo" : "logo-black"}.svg`} style={{ maxWidth: '30%' }} />
                                </Link>
                            </div>
                            <div className="header-nav">
                            </div>
                        </div>
                        <div className="header-right">
                            <Link className="btn btn-brand-4-medium hover-up" href="#">Get Started
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="true">
                                    </path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
