import Link from 'next/link'
import LogoTicker from '@/components/elements/LogoTicker'

export default function Section4() {
    return (
        <section className="section-box box-all-in-one">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-7 mb-30">
                        <h2 className="display-2 neutral-1000">Design, Development, and Content. All-in-one</h2>
                    </div>
                    <div className="col-lg-5 mb-30">
                        <h5 className="heading-5 neutral-700">Crafting seamless digital solutions with speed, trust, and top-tier quality.</h5>
                    </div>
                </div>
                <div className="row mt-40">
                    <div className="col-lg-5 mb-30">
                        <div className="card-design hover-up">
                            <div className="card-image">
                                <img alt="Website Development" src="/assets/imgs/page/homepage6/ready.png" />
                            </div>
                            <div className="card-info">
                                <h3 className="heading-2 mb-30">Website Development</h3>
                                <p className="heading-5 card-desc">Get a fast, smooth, and beautifully designed website built for Ads and Branding</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 mb-30">
                        <div className="card-design card-design-style2 hover-up">
                            <div className="card-image">
                                <img alt="AI Integration" src="/assets/imgs/page/homepage6/integration.png" />
                            </div>
                            <div className="card-info">
                                <h3 className="heading-2 mb-30">Seamlessly integrate AI into every process</h3>
                                <p className="heading-5 card-desc">Enhance your business with cutting-edge AI solutions</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 mb-30">
                        <div className="card-design card-design-style3 hover-up">
                            <div className="card-image">
                                <img alt="Google Ads" src="/assets/imgs/page/homepage6/fast.png" />
                            </div>
                            <div className="card-info">
                                <h3 className="heading-3 mb-30">Google Ads</h3>
                                <p className="heading-5 card-desc">Skyrocket your Sales with PPC, YouTube, and MyBusiness Ads</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 mb-30">
                        <div className="card-design card-design-style4 hover-up">
                            <div className="card-image">
                                <img alt="Meta Ads" src="/assets/imgs/page/homepage6/design.png" />
                            </div>
                            <div className="card-info">
                                <h3 className="heading-3 mb-30">Meta Ads</h3>
                                <p className="heading-5 card-desc">Drive leads, boost reach, and increase sales with high converting Meta Ads</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 mb-30">
                        <div className="card-design card-design-style5 hover-up">
                            <div className="card-image">
                                <img alt="Creative Services" src="/assets/imgs/page/homepage6/power.png" />
                            </div>
                            <div className="card-info">
                                <h3 className="heading-3 mb-30">Creative Services</h3>
                                <p className="heading-5 card-desc">Graphic Design, Video Production, and CGI magic for standout Ads</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-40">
                    <h4 className="wow animate__animated animate__fadeIn">
                        Let's build something amazing for your brand.<br className="d-none d-lg-block" />
                        <Link className="link-green" href="/contact">Contact us</Link> Now
                    </h4>
                </div>
            </div>
            <div className="box-logos-4 mt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="carouselTickerLogos2 carouselTicker_vertical" id="slide-logos">
                                <LogoTicker />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
