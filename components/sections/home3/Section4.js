import CounterUp from '@/components/elements/CounterUp'
import Link from 'next/link'

export default function Section4() {
    return (
        <>
            <section className="section-box wow animate__animated animate__fadeIn box-our-features-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-40">
                            <div className="internet-icon"><span /> Our Features</div>
                            <h2 className="heading-2 mb-20">Leadzsite – The Ultimate Growth Partner</h2>
                            <p className="text-lg neutral-700">Leadzsite specializes in cutting-edge marketing strategies and technology-driven solutions to help businesses scale efficiently and drive maximum ROI.</p>
                            <div className="row mt-50">
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/marketing.svg" /></div>
                                        <div className="card-info">
                                            <h3 className="text-22-bold">Performance Marketing</h3>
                                            <p className="text-md neutral-700">Data-driven ad campaigns designed to optimize conversions and maximize reach on Meta & Google.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/digital.svg" /></div>
                                        <div className="card-info">
                                            <h3 className="text-22-bold">Web & App Development</h3>
                                            <p className="text-md neutral-700">Custom-built, high-performance websites and mobile apps using Next.js, WordPress, and modern UI/UX principles.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/product.svg" /></div>
                                        <div className="card-info">
                                            <h3 className="text-22-bold">AI & Automation</h3>
                                            <p className="text-md neutral-700">AI-powered tools and automation workflows to streamline lead generation, CRM, and customer engagement.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/social.svg" /></div>
                                        <div className="card-info">
                                            <h3 className="text-22-bold">Sales Funnel Optimization</h3>
                                            <p className="text-md neutral-700">End-to-end funnel strategy and automation to improve conversion rates and maximize revenue.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-buttons-feature-4">
                                <button className="btn btn-black">Get a Quote</button>
                                <button className="btn btn-learmore-2">Learn More</button>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-40">
                            <div className="image-feature-2"><img src="/assets/imgs/page/homepage3/img-feature.png" alt="Leadzsite" />
                                <div className="card-number-feature card-number-bottom">
                                    <h4><CounterUp count={17} />k+</h4>
                                    <p className="text-sm">Happy Clients</p>
                                </div>
                                <div className="card-number-feature card-number-top">
                                    <h4><CounterUp count={12} />k+</h4>
                                    <p className="text-sm">Completed Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}
