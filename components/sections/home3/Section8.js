'use client'
import Link from 'next/link'
import { useState } from "react"
export default function Section8() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>

            <section className="section-box box-preparing">
                <div className="box-preparing-inner">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="heading-2 mb-20">Empowering Businesses with Data-Driven Marketing & Technology</h2>
                            <p className="text-lg">Leadzsite helps brands scale by leveraging advanced marketing strategies and innovative technology solutions tailored to drive success.</p>
                            <div className="box-button-preparing">
                                <ul className="nav nav-tabs justify-content-center" role="tablist">
                                    <li onClick={() => handleOnClick(1)}><a className={activeIndex === 1 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-1" aria-selected="true">Lead Management</a></li>
                                    <li onClick={() => handleOnClick(2)}><a className={activeIndex === 2 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false">Data Security</a></li>
                                    <li onClick={() => handleOnClick(3)}><a className={activeIndex === 3 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false">Business Growth</a></li>
                                    <li onClick={() => handleOnClick(4)}><a className={activeIndex === 4 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false">Marketing Automation</a></li>
                                    <li onClick={() => handleOnClick(5)}><a className={activeIndex === 5 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false">Custom Solutions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="block-group-preparing">
                            <div className="tab-content">
                                <div  className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-1">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> Our Features</div>
                                            <h2 className="heading-2 mb-20">Optimized Lead Management for Scalable Growth</h2>
                                            <p className="text-lg neutral-700">We streamline lead generation and management with AI-powered automation, ensuring businesses capture and convert leads efficiently.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>Advanced CRM Integration</li>
                                                    <li>Automated Lead Scoring</li>
                                                    <li>Targeted Customer Engagement</li>
                                                    <li>Real-Time Performance Tracking</li>
                                                    <li>Data-Driven Conversion Optimization</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-2">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-2" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> Our Features</div>
                                            <h2 className="heading-2 mb-20">Robust Data Security & Compliance</h2>
                                            <p className="text-lg neutral-700">Leadzsite prioritizes security by implementing the latest encryption, GDPR compliance, and secure data storage to protect your business assets.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>End-to-End Data Encryption</li>
                                                    <li>Secure Cloud Storage</li>
                                                    <li>Multi-Layer Authentication</li>
                                                    <li>Regulatory Compliance</li>
                                                    <li>Risk Assessment & Threat Detection</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-3">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-3" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> Our Features</div>
                                            <h2 className="heading-2 mb-20">Scalable Business Growth Strategies</h2>
                                            <p className="text-lg neutral-700">We help brands scale by combining digital marketing, data insights, and automation tools to ensure continuous revenue growth.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>AI-Powered Analytics</li>
                                                    <li>Conversion Rate Optimization</li>
                                                    <li>Content & SEO Strategies</li>
                                                    <li>Automated Customer Retention</li>
                                                    <li>Performance Marketing Solutions</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={activeIndex == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-4">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-4" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> Our Features</div>
                                            <h2 className="heading-2 mb-20">Marketing Automation for Maximum Efficiency</h2>
                                            <p className="text-lg neutral-700">Leadzsite enables businesses to automate repetitive marketing tasks, nurture leads effectively, and improve engagement with minimal effort.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>Email & SMS Automation</li>
                                                    <li>AI Chatbot Assistance</li>
                                                    <li>Personalized Marketing Campaigns</li>
                                                    <li>Lead Nurturing Funnels</li>
                                                    <li>Automated Social Media Management</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={activeIndex == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-5">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-5" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> Our Features</div>
                                            <h2 className="heading-2 mb-20">Custom Marketing & Tech Solutions</h2>
                                            <p className="text-lg neutral-700">We craft tailor-made strategies and software solutions to match your business needs, ensuring seamless operations and long-term growth.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>Custom Software Development</li>
                                                    <li>AI & Data Science Integration</li>
                                                    <li>Full-Scale Digital Marketing</li>
                                                    <li>Enterprise-Level CRM Solutions</li>
                                                    <li>Scalable Infrastructure Planning</li>
                                                </ul>
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
