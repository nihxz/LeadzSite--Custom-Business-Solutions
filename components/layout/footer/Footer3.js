import Link from 'next/link'

export default function Footer3() {
    return (
        <footer className="footer footer-style-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <Link href="/">
                            <img alt="LeadzSite" src="/assets/imgs/template/logo.svg" />
                        </Link>
                        <div className="mt-20 mb-20">
                            <p className="text-md neutral-600 mb-10">108/26 6th Cross Baseshwaranagar, Bangalore, India - 560079</p>
                            <p className="text-md neutral-600">Hours: 8:00 - 17:00, Mon - Sat</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5 col-xs-6">
                        <div className="row mt-80">
                            <div className="col-lg-4">
                                <h6 className="mb-20 text-heading-6">Services</h6>
                                <ul className="menu-footer">
                                    <li><Link href="/services">Performance Marketing</Link></li>
                                    <li><Link href="/services">Website Development</Link></li>
                                    <li><Link href="/services">Digital Marketing</Link></li>
                                    <li><Link href="/services">Product Photography</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h6 className="mb-20 text-heading-6">Company</h6>
                                <ul className="menu-footer">
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h6 className="mb-20 text-heading-6">Support</h6>
                                <ul className="menu-footer">
                                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link href="/terms">Terms of Service</Link></li>
                                    <li><Link href="/faq">FAQ</Link></li>
                                    <li><Link href="/contact">Get Support</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="text-start mt-70">
                            <h6 className="text-heading-6 mb-20">Connect With Us</h6>
                            <div className="box-socials-footer">
                                <a className="icon-socials icon-facebook" href="https://www.facebook.com/profile.php?id=61574748780602" target="_blank" rel="noopener noreferrer">
                                    <img alt="Facebook" src="/assets/imgs/template/icons/fb.svg" />
                                </a>
                                <a className="icon-socials icon-instagram" href="https://www.instagram.com/leadz.site/" target="_blank" rel="noopener noreferrer">
                                    <img alt="Instagram" src="/assets/imgs/template/icons/in.svg" />
                                </a>
                                <a className="icon-socials icon-whatsapp" href="https://wa.me/918951085496" target="_blank" rel="noopener noreferrer">
                                    <img alt="WhatsApp" src="/assets/imgs/template/icons/whatsapp.svg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom mt-50">
                    <div className="row">
                        <div className="col-md-6 text-md-start text-center">
                            <p className="text-sm neutral-600">© 2025 LeadzSite. All rights reserved.</p>
                        </div>
                        <div className="col-md-6 text-md-end text-center">
                            <ul className="menu-bottom-footer">
                                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link href="/terms">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
