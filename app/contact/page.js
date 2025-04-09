import LogoTicker from '@/components/elements/LogoTicker'
import Layout from "@/components/layout/Layout"
import Team2Slider from '@/components/slider/Team2Slider'
import Link from 'next/link'

export default function Contact() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="header-style-2 header-style-4">
                <div>
                    <section className="section-box box-content-contact">
                        <div className="container">
                            <div className="text-center contact-head">
                                <span className="icon-1 shape-1" />
                                <span className="icon-2 shape-2" />
                                <span className="btn btn-brand-4-sm">Contact Us</span>
                                <h2 className="heading-2 mb-20 mt-15">Get in Touch</h2>
                                <div className="text-center">
                                    <nav className="container-breadcrumb">
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="#">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="box-border-rounded">
                                <div className="row align-items-center">
                                    <div className="col-lg-5 mb-40">
                                        <h3 className="text-heading-4 color-gray-900 mb-20">Get in touch</h3>
                                        <p className="text-body-text color-gray-600">The right move at the right time saves your investment. live<br className="d-lg-block d-none" />the dream of expanding your business.</p>
                                        <div className="row mt-50">
                                            <div className="col-lg-12">
                                                <div className="card-feature-2">
                                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/marketing.svg" alt="Marketing icon" /></div>
                                                    <div className="card-info">
                                                        <h3 className="text-22-bold">Address</h3>
                                                        <p className="text-md neutral-700">Leadzsite<br/>Basaweshwaranagar, Bangalore, India - 560079<br/></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="card-feature-2">
                                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/digital.svg" alt="Digital icon" /></div>
                                                    <div className="card-info">
                                                        <h3 className="text-22-bold">Phone</h3>
                                                        <div className="text-md neutral-700">
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <Link href="tel:+918951085496">+91 89510 85496</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="card-feature-2">
                                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/digital.svg" alt="Digital icon" /></div>
                                                    <div className="card-info">
                                                        <h3 className="text-22-bold">Email</h3>
                                                        <div className="text-md neutral-700">
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <Link className="neutral-700" href="mailto:nihal@leadz.site">nihal@leadz.site</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 text-center">
                                        <img src="/assets/imgs/page/contact/img-contact.png" alt="Contact illustration" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box box-get-touch-section box-contact-form">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 mb-30">
                                    <div className="block-map">
                                        <div className="box-map">
                                            <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDxaEHfX0UW4KL91Lq2C84GxN_QRNaFWgI&q=Basaweshwaranagar,Bangalore,Karnataka,India" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                        </div>
                                        <p className="text-md neutral-600 text-center">Hours: 10:00 - 19:00, Mon - Sat</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-30">
                                    <Link className="btn btn-brand-4-sm" href="#">Contact Us</Link>
                                    <h2 className="mb-20 mt-20">Get in Touch</h2>
                                    <p className="text-md neutral-700">Contact us below and we will get back to you shortly.</p>
                                    <div className="block-form-contact mt-45">
                                        <form action="#">
                                            <div className="form-group">
                                                <label htmlFor="fullname">Your Name *</label>
                                                <input className="form-control" type="text" placeholder="Name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="fullname">Your Email *</label>
                                                <input className="form-control" type="text" placeholder="email@website.com" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="fullname">Message *</label>
                                                <textarea className="form-control" rows={7} placeholder="How can we help you?" />
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-black btn-rounded" type="submit">
                                                    Send Message
                                                    <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box wow animate__animated animate__fadeIn box-our-team-2">
                        <div className="box-our-team-2-inner">
                            <div className="container">
                                <div className="text-center">
                                    <Link className="btn btn-brand-4-sm" href="#">Our people</Link>
                                    <h2 className="mb-20 mt-20">Meet Our Team</h2>
                                    <p className="text-md neutral-500">This is our team, a lot of smiling happy people who work hard to<br className="d-none d-lg-block" />empower your teams.</p>
                                </div>
                                <div className="box-swiper mt-60">
                                    <Team2Slider />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box wow animate__animated animate__fadeIn box-logos-4">
                        <div className="container">
                            <div className="carouselTickerLogos2 carouselTicker_vertical" id="slide-logos">
                                <LogoTicker />
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}