import Link from 'next/link'

export default function Section1() {
    return (
        <>
            <section className="section-box">
                <div className="banner-hero hero-3" style={{ 
                    backgroundImage: "url('/assets/imgs/page/homepage6/banner-bg.jpg')", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center",
                    height: "90vh",
                    minHeight: "600px"
                }} >
                    <div className="banner-inner">
                        <div className="container">
                            <h1 className="display-2 mb-40"> &nbsp;<span className="text-bg-brand-4">Performance</span> Marketing</h1>
                            <p className="text-lg mb-50">Built to Perform. Designed to Scale.
                            From strategy to ROI. Data-powered ad campaigns that grow your brand with purpose.</p>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="container mt-100 mb-100">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="internet-icon mb-30"><span /> Our Features</div>
                            <h2 className="heading-2 mb-40">Leadzsite – The Ultimate Growth Partner</h2>
                            <p className="text-lg neutral-700 mb-50">Leadzsite specializes in cutting-edge marketing strategies and technology-driven solutions to help businesses scale efficiently and drive maximum ROI.</p>
                            <div className="row mb-50">
                                <div className="col-lg-6 col-md-6 mb-30">
                                    <div className="card-feature-2">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/marketing.svg" /></div>
                                        <div className="card-info">
                                            <h3 className="text-22-bold mb-15">Performance Marketing</h3>
                                            <p className="text-md neutral-700">Data-driven ad campaigns designed to optimize conversions and maximize Leads & Sales on Meta & Google.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-30">
                                    <div className="card-feature-2">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/digital.svg" /></div>
                                        <div className="card-info">
                                            <h3 className="text-22-bold mb-15">Web & App Development</h3>
                                            <p className="text-md neutral-700">Custom-built, high-performance websites and mobile apps using Next.js, WordPress, and modern UI/UX principles.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-30">
                                    <div className="card-feature-2">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/product.svg" /></div>
                                        <div className="card-info">
                                            <h3 className="text-22-bold mb-15">AI & Automation</h3>
                                            <p className="text-md neutral-700">AI-powered tools and automation workflows to streamline lead generation, CRM, and customer engagement.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-30">
                                    <div className="card-feature-2">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/social.svg" /></div>
                                        <div className="card-info">
                                            <h3 className="text-22-bold mb-15">Sales Funnel Optimization</h3>
                                            <p className="text-md neutral-700">End-to-end funnel strategy and automation to improve conversion rates and maximize revenue.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-buttons-feature-4">
                                <button className="btn btn-black">Get a Quote</button>
                                <Link href="#" className="btn btn-learmore-2">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-feature-2"><img src="/assets/imgs/page/homepage3/img-feature.png" alt="Leadzsite" />
                                <div className="card-number-feature card-number-bottom">
                                    <h4>500+</h4>
                                    <p className="text-sm">Happy Clients</p>
                                </div>
                                <div className="card-number-feature card-number-top">
                                    <h4>3 Million+</h4>
                                    <p className="text-sm">AD Spend</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
