import CounterUp from '@/components/elements/CounterUp'
import Link from 'next/link'

export default function Section7() {
    return (
        <>
            <section className="section-box box-lead">
                <div className="container">
                    <div className="box-lead-inner">
                        <div className="row">
                            <div className="col-lg-6 mb-30"><Link className="btn btn-border-brand-4 text-linear-3" href="#">Lead
                                Management</Link>
                                <h3 className="heading-2 neutral-0 mt-20 mb-20">Enhance Your Marketing Impact with Proven Strategies</h3>
                                <p className="text-lg neutral-200 mb-35">Leadzsite empowers businesses with data-driven marketing strategies, helping them generate quality leads, optimize campaigns, and achieve better conversion rates.</p>
                                <div className="card-lead-list">
                                    <div className="item-lead">
                                        <div className="card-lead">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/discover.svg" alt="Leadzsite" /></div>
                                            <div className="card-info">
                                                <h3 className="text-22-bold">3000+</h3>
                                                <p className="text-md neutral-200">Successful Marketing Campaigns</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-lead">
                                        <div className="card-lead">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/discover.svg" alt="Leadzsite" /></div>
                                            <div className="card-info">
                                                <h3 className="text-22-bold">500+</h3>
                                                <p className="text-md neutral-200">Satisfied Clients</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-lg neutral-200">We help businesses simplify lead generation, optimize engagement, and streamline marketing efforts with intelligent automation and AI-driven insights.</p>
                            </div>
                            <div className="col-lg-6 mb-30 text-center text-lg-end">
                                <div className="box-border-linear-3 linear-3">
                                    <div className="box-border-linear-3-inner"><img src="/assets/imgs/page/homepage3/img-lead.png" alt="Leadzsite" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
