import CounterUp from '@/components/elements/CounterUp'
import ResizeContainer from '@/components/elements/ResizeContainer'
import VideoPopup from '@/components/elements/VideoPopup'
import Layout from "@/components/layout/Layout"
import NewsSlider from '@/components/slider/NewsSlider'
import OfficeSlider from '@/components/slider/OfficeSlider'
import Team2Slider from '@/components/slider/Team2Slider'
import Link from 'next/link'
export default function About() {

    return (
        <>
            <ResizeContainer />
            <Layout headerStyle={1} footerStyle={3} headerCls="header-style-2 header-style-4" >
                <div>
                    <section className="section-box box-about-section-1">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="padding-left-auto"><Link className="btn btn-tag-black" href="#">About Us</Link>
                                        <h2 className="display-2 mt-15 mb-25">Growing Brands with Ads Since 2018</h2>
                                        <p className="text-xl mb-45">A close-knit team of 8 in Bangalore helping brands grow in Delhi, Chennai, Hyderabad, Kolkata, Raipur, Trivandrum, Manali, and Chandigarh.</p>
                                        <div className="box-buttons-feature-4"><Link className="btn btn-brand-4-medium mr-20" href="#">Contact
                                            <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                                            </svg></Link><Link className="btn btn-learmore-2" href="#"><span>
                                                <svg width={39} height={38} viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" width={38} height={38} rx={19} fill="#191919" />
                                                    <g clipPath="url(#clip0_1_376)">
                                                        <path d="M24.1537 16.8139L15.218 25.7497L13.75 24.2817L22.6847 15.3459H14.81V13.2695H26.2301V24.6897H24.1537V16.8139Z" fill="#C5FF55" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1_376">
                                                            <rect width={13} height={13} fill="white" transform="translate(13.5 13)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></span>Pricing</Link></div>
                                        <div className="box-border-left-author">
                                            <p className="text-22-bold">Google, Meta or beyond, our campaigns drive revenue, not just reach.</p>
                                            <div className="box-joined">
                                                <div className="box-authors"><span className="item-author"><img src="/assets/imgs/page/homepage1/author.png" alt="Nivia" /></span><span className="item-author"><img src="/assets/imgs/page/homepage1/author2.png" alt="Nivia" /></span><span className="item-author"><img src="/assets/imgs/page/homepage1/author3.png" alt="Nivia" /></span><span className="item-author"><span className="text-num-author text-md-bold color-brand-2">+8</span></span>
                                                </div><span className="text-lg d-inline-block">The true power of Leadz.site lies in the team behind every campaign. <br className="d-none d-md-block" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box-image-rect"><img src="/assets/imgs/page/about/img-about.png" alt="Nivia" />
                                        {/* <VideoPopup /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="box-image-rect box-image-rect-both"><img src="/assets/imgs/page/about/img-about2.png" alt="Nivia" /></div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="padding-right-auto">
                                        <div className="box-padding-left-50 box-padding-right-50">
                                            <h2 className="heading-2 mb-20">Our Expertise</h2>
                                            <p className="text-lg neutral-700">We use Google Ads, Meta Ads, Google Analytics, and CRM tools to run performance campaigns that drive leads, track results, and grow businesses.</p>
                                            <div className="row mt-50">
                                                <div className="col-xl-6 col-lg-12 col-sm-6">
                                                    <div className="card-feature-2">
                                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/discover.svg" />
                                                        </div>
                                                        <div className="card-info"><Link href="#">
                                                            <h3 className="text-22-bold">24/7 Support, Nationwide</h3>
                                                        </Link></div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-12 col-sm-6">
                                                    <div className="card-feature-2">
                                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/keep.svg" />
                                                        </div>
                                                        <div className="card-info"><Link href="#">
                                                            <h3 className="text-22-bold">Safe Transactions. Documented</h3>
                                                        </Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Removed Our Team section as requested */}
                    <section className="section-box box-why-trusted box-why-trusted-black">
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-4 mb-30">
                                    <h2 className="text-32-bold">Why Brands Across India <br className="d-none d-lg-block" /> Trust Us with AD Account
                                    </h2>
                                </div>
                                <div className="col-lg-8 mb-30">
                                    <div className="box-numbers">
                                        <div className="item-number">
                                            <h3 className="heading-2"><CounterUp count={2} /> Crore+</h3>
                                            <p className="text-xl neutral-700">Ad Spend</p>
                                        </div>
                                        <div className="item-number">
                                            <h3 className="heading-2"><CounterUp count={8} /> Crore+</h3>
                                            <p className="text-xl neutral-700">Revenue Generated from Paid Ads</p>
                                        </div>
                                        <div className="item-number">
                                            <h3 className="heading-2"><CounterUp count={100} />+</h3>
                                            <p className="text-xl neutral-700">Ad Campaigns</p>
                                        </div>
                                        <div className="item-number">
                                            <h3 className="heading-2"><CounterUp count={30} />+</h3>
                                            <p className="text-xl neutral-700">Locations</p>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div >
                    </section >
                                </div>
            </Layout>
        </>
    )
}