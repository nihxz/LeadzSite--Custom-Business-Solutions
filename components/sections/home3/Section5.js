import Link from 'next/link'

export default function Section5() {
    return (
        <>
            <section className="section-box box-companion">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-7 mb-30">
                            <h2 className="heading-1 neutral-0">Your<span className="text-bg-brand-4 neutral-1000">Ultimate</span> Business Intelligence Platform
                            </h2>
                        </div>
                        <div className="col-lg-5 mb-30">
                            <p className="text-xl neutral-700">Transform your data into actionable insights and drive business growth with our AI-powered solutions.</p>
                        </div>
                    </div>
                    <div className="row mt-130">
                        <div className="col-lg-6"><img alt="Leadzsite" src="/assets/imgs/page/homepage3/img-companion6.png" /></div>
                        <div className="col-lg-6">
                            <h2 className="heading-2 neutral-0 mb-20">Gain Real-Time Insights & Optimize Performance</h2>
                            <p className="text-lg neutral-200">Leadzsite provides advanced analytics, automated reporting, and strategic recommendations to help businesses enhance decision-making and efficiency.</p>
                            <div className="box-list-feature mt-55">
                                <div className="card-feature-2 card-feature-brand-4">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/find.svg" /></div>
                                    <div className="card-info">
                                        <h3 className="text-22-bold text-white shadow-md">Extract Actionable Insights</h3>
                                        <p className="text-md neutral-200">Utilize AI-driven data analysis to identify trends, opportunities, and areas for improvement.</p>
                                    </div>
                                </div>
                                <div className="card-feature-2 card-feature-brand-4">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/discover.svg" /></div>
                                    <div className="card-info">
                                        <h3 className="text-22-bold text-white shadow-md">Enhance Audience Targeting</h3>
                                        <p className="text-md neutral-200">Discover high-value customer segments and optimize marketing efforts for maximum engagement.</p>
                                    </div>
                                </div>
                                <div className="card-feature-2 card-feature-brand-4">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/keep.svg" /></div>
                                    <div className="card-info">
                                        <h3 className="text-22-bold text-white shadow-md">Streamline Team Collaboration</h3>
                                        <p className="text-md neutral-200">Keep your team informed with automated reports, real-time dashboards, and workflow integration.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
