'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Section9() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>

            <section className="section-box box-choose-plan">
                <div className="container">
                    <div className="d-flex align-items-end justify-content-between box-head-plan mb-65">
                        <h2 className="heading-2">Choose The Best Plan<br className="d-none d-lg-block" /> That Fits Your Business</h2>
                        <div className="box-button-plan">
                            <div className="box-buttons-feature-4">
                                <Link className="btn btn-black" href="#">Get a Quote
                                    <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                                    </svg>
                                </Link>
                                <Link className="btn btn-learmore-2" href="#"><span>
                                    <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_24_999)">
                                            <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_24_999">
                                                <rect width={13} height={13} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg></span> Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="box-choose-plan-inner">
                        <div className="box-grid-plan">
                            <div className="grid-plan-left">
                                <h4 className="heading-4 neutral-0">Choose your plan</h4>
                                <ul className="list-choose-plan">
                                    <li className={activeIndex === 1 ? "active" : ""} onClick={() => handleOnClick(1)}>
                                        <label className="radio-container">
                                            <input className="cb-plan" type="radio" name="chooseplan" defaultChecked="checked" />
                                            <span className="checkmark" />Hourly billing
                                        </label>
                                        <span className="text-sm neutral-200">Pay-as-you-go, flexible pricing</span>
                                    </li>
                                    <li className={activeIndex === 2 ? "active" : ""} onClick={() => handleOnClick(2)}>
                                        <label className="radio-container">
                                            <input className="cb-plan" type="radio" name="chooseplan" />
                                            <span className="checkmark" />Monthly Retainer
                                        </label>
                                        <span className="text-sm neutral-200">Save 10% when choosing monthly billing</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="grid-plan-right">
                                <div className="block-pricing">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-pricing card-pricing-2">
                                                <div className="card-image justify-content-between">
                                                    <div className="card-icon-info">
                                                        <h4 className="heading-4">Small Business</h4>
                                                        <p className="text-md neutral-600">For startups & entrepreneurs</p>
                                                    </div>
                                                    <div className="card-icon"><img src="/assets/imgs/page/homepage5/basic.png" alt="Leadzsite" /></div>
                                                </div>
                                                <div className="card-lists">
                                                    <ul className="list-feature">
                                                        <li>Website & Ad Account Setup</li>
                                                        <li>Social Media Platform Setup</li>
                                                        <li>Basic Content Creation</li>
                                                        <li>SEO Optimization</li>
                                                    </ul>
                                                </div>
                                                <div className="card-price">
                                                    <div className="for-hour"><span className="heading-2">{activeIndex === 2 ? "$180/hr" : "$200/hr"}</span></div>
                                                    <span className="text-sm neutral-500">Billed {activeIndex === 2 ? "monthly" : "hourly"}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-pricing card-pricing-2">
                                                <div className="card-image justify-content-between">
                                                    <div className="card-icon-info">
                                                        <h4 className="heading-4">Medium Business</h4>
                                                        <p className="text-md neutral-600">For growing businesses</p>
                                                    </div>
                                                    <div className="card-icon"><img src="/assets/imgs/page/homepage5/professional.png" alt="Leadzsite" /></div>
                                                </div>
                                                <div className="card-lists">
                                                    <ul className="list-feature">
                                                        <li>Advanced Website & Ad Optimization</li>
                                                        <li>Social Media Strategy & Content</li>
                                                        <li>Email Marketing & Automation</li>
                                                        <li>Performance Tracking & Analytics</li>
                                                    </ul>
                                                </div>
                                                <div className="card-price">
                                                    <div className="for-hour"><span className="heading-2">{activeIndex === 2 ? "$315/hr" : "$350/hr"}</span></div>
                                                    <span className="text-sm neutral-500">Billed {activeIndex === 2 ? "monthly" : "hourly"}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-pricing card-pricing-2">
                                                <div className="card-image justify-content-between">
                                                    <div className="card-icon-info">
                                                        <h4 className="heading-4">Enterprise</h4>
                                                        <p className="text-md neutral-600">For large organizations</p>
                                                    </div>
                                                    <div className="card-icon"><img src="/assets/imgs/page/homepage5/enterprise.png" alt="Leadzsite" /></div>
                                                </div>
                                                <div className="card-lists">
                                                    <ul className="list-feature">
                                                        <li>Full Digital Strategy & Execution</li>
                                                        <li>Paid Ads, SEO, and CRM Setup</li>
                                                        <li>Conversion Optimization</li>
                                                        <li>Dedicated Account Manager</li>
                                                        <li>24/7 Customer Support & Reporting</li> 
                                                    </ul>
                                                </div>
                                                <div className="card-price">
                                                    <div className="for-hour"><span className="heading-2">{activeIndex === 2 ? "$540/hr" : "$600/hr"}</span></div>
                                                    <span className="text-sm neutral-500">Billed {activeIndex === 2 ? "monthly" : "hourly"}</span>
                                                </div>
                                            </div>
                                        </div>
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
