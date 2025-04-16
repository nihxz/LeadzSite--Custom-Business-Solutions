'use client';
import LogoTicker from '@/components/elements/LogoTicker'
import Layout from "@/components/layout/Layout"
import Team2Slider from '@/components/slider/Team2Slider'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        phone: '', 
        company: '', 
        designation: '', 
        city: '', 
        state: '', 
        service: 'Performance Marketing', 
        message: 'Contact form inquiry' 
    })
    const [submitStatus, setSubmitStatus] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            setSubmitStatus('Message sent successfully!')
        } else {
            setSubmitStatus('Failed to send message.')
        }
    }

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
                                    <p className="text-md neutral-700 mb-20">Contact us below and we will get back to you shortly.</p>
                                    <div className="form-contact-hero" style={{ 
                                        padding: '30px 25px', 
                                        position: 'relative', 
                                        zIndex: 2,
                                        backgroundColor: 'rgba(8, 11, 40, 0.85)',
                                        borderRadius: '20px',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        width: '100%'
                                    }}>
                                        <form onSubmit={handleSubmit} className="contact-form-hero">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                                        <input 
                                                            className="form-control" 
                                                            type="text" 
                                                            name="name" 
                                                            placeholder="Your Name *" 
                                                            onChange={handleChange}
                                                            required 
                                                            style={{ 
                                                                backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                                                                border: 'none', 
                                                                color: 'white', 
                                                                padding: '12px 15px',
                                                                borderRadius: '10px'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                                        <input 
                                                            className="form-control" 
                                                            type="email" 
                                                            name="email" 
                                                            placeholder="Your Email *" 
                                                            onChange={handleChange}
                                                            required 
                                                            style={{ 
                                                                backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                                                                border: 'none', 
                                                                color: 'white', 
                                                                padding: '12px 15px',
                                                                borderRadius: '10px'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                                        <input 
                                                            className="form-control" 
                                                            type="tel" 
                                                            name="phone" 
                                                            placeholder="Your Phone *" 
                                                            onChange={handleChange}
                                                            required 
                                                            style={{ 
                                                                backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                                                                border: 'none', 
                                                                color: 'white', 
                                                                padding: '12px 15px',
                                                                borderRadius: '10px'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                                        <input 
                                                            className="form-control" 
                                                            type="text" 
                                                            name="company" 
                                                            placeholder="Company Name" 
                                                            onChange={handleChange}
                                                            style={{ 
                                                                backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                                                                border: 'none', 
                                                                color: 'white', 
                                                                padding: '12px 15px',
                                                                borderRadius: '10px'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                                        <input 
                                                            className="form-control" 
                                                            type="text" 
                                                            name="designation" 
                                                            placeholder="Your Designation" 
                                                            onChange={handleChange}
                                                            style={{ 
                                                                backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                                                                border: 'none', 
                                                                color: 'white', 
                                                                padding: '12px 15px',
                                                                borderRadius: '10px'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                                        <input 
                                                            className="form-control" 
                                                            type="text" 
                                                            name="city" 
                                                            placeholder="Your City *" 
                                                            onChange={handleChange}
                                                            required
                                                            style={{ 
                                                                backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                                                                border: 'none', 
                                                                color: 'white', 
                                                                padding: '12px 15px',
                                                                borderRadius: '10px'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                                        <input 
                                                            className="form-control" 
                                                            type="text" 
                                                            name="state" 
                                                            placeholder="Your State *" 
                                                            onChange={handleChange}
                                                            required
                                                            style={{ 
                                                                backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                                                                border: 'none', 
                                                                color: 'white', 
                                                                padding: '12px 15px',
                                                                borderRadius: '10px'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group" style={{ marginBottom: '15px', position: 'relative' }}>
                                                        <select 
                                                            className="form-control" 
                                                            name="service" 
                                                            onChange={handleChange}
                                                            required
                                                            style={{ 
                                                                backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                                                                border: 'none', 
                                                                color: 'white', 
                                                                padding: '12px 15px',
                                                                borderRadius: '10px',
                                                                appearance: 'none',
                                                                WebkitAppearance: 'none',
                                                                MozAppearance: 'none'
                                                            }}
                                                        >
                                                            <option value="Performance Marketing">Performance Marketing</option>
                                                            <option value="Video Editing">Video Editing</option>
                                                            <option value="Website Development">Website Development</option>
                                                            <option value="Graphic Design">Graphic Design</option>
                                                            <option value="Mobile App Development">Mobile App Development</option>
                                                        </select>
                                                        <div style={{
                                                            position: 'absolute',
                                                            right: '15px',
                                                            top: '50%',
                                                            transform: 'translateY(-50%)',
                                                            pointerEvents: 'none'
                                                        }}>
                                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            </svg>
                                            </div>
                                            </div>
                                            </div>
                                                <div className="col-md-12">
                                                    <div className="form-group mb-15">
                                                        <button 
                                                            className="btn btn-green-linear w-100" 
                                                            type="submit" 
                                                            style={{ 
                                                                padding: '12px 15px',
                                                                borderRadius: '10px',
                                                                border: 'none',
                                                                fontWeight: 'bold'
                                                            }}
                                                        >
                                                            Submit Enquiry
                                                    <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                                                    </svg>
                                                </button>
                                            </div>
                                                </div>
                                            </div>
                                            {submitStatus && 
                                                <div className="text-center mt-15" style={{ 
                                                    color: submitStatus.includes('success') ? '#4CAF50' : '#f44336',
                                                    padding: '10px'
                                                }}>
                                                    {submitStatus}
                                                </div>
                                            }
                                        </form>
                                    </div>
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