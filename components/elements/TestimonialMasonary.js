'use client'
import Isotope from "isotope-layout"
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from "react"

export default function TestimonialMasonary() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".mt-115", {
                itemSelector: ".col-lg-4",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".col-lg-4",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "trans current" : "")
    return (
        <div className="row mt-115">
            <div className="col-lg-4">
                <div className="card-testimonial">
                    <div className="card-rates">
                        {[...Array(5)].map((_, i) => (
                            <img key={i} src="/assets/imgs/template/icons/star.svg" alt="Rating star" />
                        ))}
                    </div>
                    <div className="card-comment">
                        <p className="text-md">"Their performance marketing expertise transformed our business. Our cost per acquisition dropped by 45% while conversion rates increased by 180%. The ROI from their campaigns exceeded our expectations."</p>
                    </div>
                    <div className="card-author">
                        <div className="author-info">
                            <span className="text-md author-name mr-10">Aditya Sharma</span>
                            <span className="text-lg neutral-500">CEO, TechVision Solutions</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card-testimonial">
                    <div className="card-rates">
                        {[...Array(5)].map((_, i) => (
                            <img key={i} src="/assets/imgs/template/icons/star.svg" alt="Rating star" />
                        ))}
                    </div>
                    <div className="card-comment">
                        <p className="text-md">"The website they developed for us is stunning and performs brilliantly. Load times decreased by 70%, and our mobile conversion rate doubled. Their attention to UI/UX details made all the difference."</p>
                    </div>
                    <div className="card-author">
                        <div className="author-info">
                            <span className="text-md author-name mr-10">Meera Patel</span>
                            <span className="text-lg neutral-500">Founder, StyleBazaar</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card-testimonial">
                    <div className="card-rates">
                        {[...Array(5)].map((_, i) => (
                            <img key={i} src="/assets/imgs/template/icons/star.svg" alt="Rating star" />
                        ))}
                    </div>
                    <div className="card-comment">
                        <p className="text-md">"Their product photography elevated our e-commerce presence. The high-quality images increased our product page conversion rates by 85%. Professional, creative, and detail-oriented service."</p>
                    </div>
                    <div className="card-author">
                        <div className="author-info">
                            <span className="text-md author-name mr-10">Arjun Mehta</span>
                            <span className="text-lg neutral-500">Director, Fashion Mantra</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card-testimonial">
                    <div className="card-rates">
                        {[...Array(5)].map((_, i) => (
                            <img key={i} src="/assets/imgs/template/icons/star.svg" alt="Rating star" />
                        ))}
                    </div>
                    <div className="card-comment">
                        <p className="text-md">"Outstanding performance marketing results! They optimized our campaigns across Google Ads and Meta, reducing our ad spend by 35% while increasing lead quality. The data-driven approach was impressive."</p>
                    </div>
                    <div className="card-author">
                        <div className="author-info">
                            <span className="text-md author-name mr-10">Kavita Reddy</span>
                            <span className="text-lg neutral-500">CMO, CloudTech India</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card-testimonial">
                    <div className="card-rates">
                        {[...Array(5)].map((_, i) => (
                            <img key={i} src="/assets/imgs/template/icons/star.svg" alt="Rating star" />
                        ))}
                    </div>
                    <div className="card-comment">
                        <p className="text-md">"Their digital marketing strategy completely transformed our online presence. The combination of SEO, content marketing, and performance ads increased our monthly revenue by 250%."</p>
                    </div>
                    <div className="card-author">
                        <div className="author-info">
                            <span className="text-md author-name mr-10">Rahul Verma</span>
                            <span className="text-lg neutral-500">CEO, Digital Pioneers</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card-testimonial">
                    <div className="card-rates">
                        {[...Array(5)].map((_, i) => (
                            <img key={i} src="/assets/imgs/template/icons/star.svg" alt="Rating star" />
                        ))}
                    </div>
                    <div className="card-comment">
                        <p className="text-md">"The product photography and website development package was perfect for our e-commerce launch. The professional images and fast, responsive website helped us achieve 150% of our first-quarter sales target."</p>
                    </div>
                    <div className="card-author">
                        <div className="author-info">
                            <span className="text-md author-name mr-10">Priya Malhotra</span>
                            <span className="text-lg neutral-500">Founder, Artisans of India</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
