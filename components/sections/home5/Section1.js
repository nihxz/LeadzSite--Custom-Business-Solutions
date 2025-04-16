'use client';

import Link from 'next/link'
import { useState } from 'react'

export default function Section1() {
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        phone: '', 
        company: '', 
        service: 'Performance Marketing', 
        message: 'Contact form inquiry from home page',
        designation: '',
        city: '',
        state: ''
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
            setFormData({
                name: '', 
                email: '', 
                phone: '', 
                company: '', 
                service: 'Performance Marketing', 
                message: 'Contact form inquiry from home page',
                designation: '',
                city: '',
                state: ''
            })
        } else {
            setSubmitStatus('Failed to send message.')
        }
    }

    return (
        <>
            <section className="section-box">
                <div className="banner-hero hero-1" style={{ marginTop: '160px', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
                    <div className="banner-inner">
                        <span className="bg-circle shape-3" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6" style={{ marginBottom: '40px' }}>
                                    <div className="block-banner">
                                        <h1 className="display-2 mb-40 performance-heading" style={{ color: 'white', fontSize: 'calc(2.2rem + 1vw)' }}>
                                            <div className="heading-container desktop-normal-case">
                                                <span>Performance</span> <span className="marketing-text text-bg-brand-4" style={{ color: 'black', display: 'inline-block', width: 'auto', padding: '0 10px' }}>Marketing</span>
                                            </div>
                                        </h1>
                                        
                                        {/* Mobile-only background image */}
                                        <div className="mobile-only-banner-image">
                                            <img 
                                                src="/assets/imgs/page/homepage6/bg-banner2.png" 
                                                alt="Background" 
                                                style={{
                                                    width: '100%',
                                                    maxWidth: '280px',
                                                    margin: '15px auto',
                                                    display: 'block'
                                                }}
                                            />
                                        </div>
                                        
                                        <div className="banner-description text-xl mb-40 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                            <p style={{ marginTop: '15px', marginBottom: '20px' }}>
                                                AD Account Management for Google & Meta, ROI Optimised. Leadzsite blends digital marketing, creative designs, and<br className="d-none d-lg-block" /> custom web development solutions.
                                            </p>
                                        </div>
                                        
                                        <div className="box-buttons mb-40" style={{ textAlign: 'center' }}>
                                            <Link 
                                                className="btn btn-green-linear" 
                                                href="tel:+918951085496"
                                                style={{ 
                                                    borderRadius: '50px',
                                                    padding: '16px 30px',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '12px',
                                                    marginBottom: '20px'
                                                }}
                                            >
                                                <div style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    overflow: 'hidden'
                                                }}>
                                                    <div style={{ 
                                                        width: '100%', 
                                                        height: '100%', 
                                                        display: 'flex', 
                                                        alignItems: 'center', 
                                                        justifyContent: 'center',
                                                        position: 'relative'
                                                    }}>
                                                        <svg width={29} height={29} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                                                            position: 'absolute',
                                                            top: '50%',
                                                            left: '50%',
                                                            transform: 'translate(calc(-50% - 10px), -50%)'
                                                        }}>
                                                            <path d="M16.975 13.747C16.2383 13.747 15.5266 13.6353 14.8641 13.412C14.5047 13.2887 14.0867 13.3637 13.7891 13.6613L12.3797 14.8073C10.5016 13.4293 9.15531 12.0846 7.79297 10.2211L8.91172 8.8501C9.21094 8.5509 9.28125 8.13674 9.16328 7.78518C8.93906 7.11768 8.82734 6.40584 8.82734 5.67084C8.82734 5.08971 8.35547 4.61784 7.77422 4.61784H5.36797C4.78672 4.61784 4.31484 5.08971 4.31484 5.67084C4.31484 12.3122 9.66797 17.6653 16.3094 17.6653C16.8905 17.6653 17.3623 17.1934 17.3623 16.6122V14.2122C17.3625 13.6311 16.8906 13.747 16.975 13.747Z" fill="white"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                Speak To Ad Expert
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                                    <div className="form-contact-hero" style={{ 
                                        padding: '40px 30px', 
                                        position: 'relative', 
                                        zIndex: 2,
                                        backgroundColor: 'rgba(8, 11, 40, 0.85)',
                                        borderRadius: '20px',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        width: '100%',
                                        marginTop: '40px'
                                    }}>
                                        <div className="form-header text-center">
                                            <h4 className="mb-30" style={{ color: 'white', fontSize: '24px' }}>Get a Free Consultation</h4>
                                            <p className="mb-40" style={{ color: 'rgba(255,255,255,0.8)' }}>Fill out the form to hear from our experts</p>
                                        </div>
                                        <form onSubmit={handleSubmit} className="contact-form-hero">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                                        <input 
                                                            className="form-control" 
                                                            type="text" 
                                                            name="name" 
                                                            placeholder="Your Name *" 
                                                            value={formData.name}
                                                            onChange={handleChange} 
                                                            required 
                                                            style={{ 
                                                                backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                                                                border: 'none', 
                                                                color: 'white', 
                                                                padding: '14px 18px',
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
                                                            value={formData.email}
                                                            onChange={handleChange} 
                                                            required 
                                                            style={{ 
                                                                backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                                                                border: 'none', 
                                                                color: 'white', 
                                                                padding: '14px 18px',
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
                                                            value={formData.phone}
                                                            onChange={handleChange} 
                                                            required 
                                                            style={{ 
                                                                backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                                                                border: 'none', 
                                                                color: 'white', 
                                                                padding: '14px 18px',
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
                                                            value={formData.company}
                                                            onChange={handleChange}
                                                            style={{ 
                                                                backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                                                                border: 'none', 
                                                                color: 'white', 
                                                                padding: '14px 18px',
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
                                                            value={formData.designation}
                                                            onChange={handleChange}
                                                            style={{ 
                                                                backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                                                                border: 'none', 
                                                                color: 'white', 
                                                                padding: '14px 18px',
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
                                                            value={formData.city}
                                                            onChange={handleChange}
                                                            required
                                                            style={{ 
                                                                backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                                                                border: 'none', 
                                                                color: 'white', 
                                                                padding: '14px 18px',
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
                                                            value={formData.state}
                                                            onChange={handleChange}
                                                            required
                                                            style={{ 
                                                                backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                                                                border: 'none', 
                                                                color: 'white', 
                                                                padding: '14px 18px',
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
                                                            value={formData.service}
                                                            onChange={handleChange} 
                                                            required
                                                            style={{ 
                                                                backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                                                                border: 'none', 
                                                                color: 'white', 
                                                                padding: '14px 18px',
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
                                                    <div className="form-group mb-20">
                                                        <button 
                                                            className="btn btn-green-linear w-100" 
                                                            type="submit" 
                                                            style={{ 
                                                                padding: '14px 18px',
                                                                borderRadius: '10px',
                                                                border: 'none',
                                                                fontWeight: 'bold'
                                                            }}
                                                        >
                                                            Submit Enquiry
                                                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="true" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            {submitStatus && 
                                                <div className="text-center mt-15" style={{ 
                                                    color: submitStatus.includes('success') ? '#4CAF50' : '#f44336',
                                                    padding: '10px',
                                                    marginTop: '15px' 
                                                }}>
                                                    {submitStatus}
                                                </div>
                                            }
                                        </form>
                                    </div>
                                    <div className="laptop-image-container" style={{ 
                                        position: 'absolute',
                                        top: '15%',
                                        right: '-15%',
                                        width: '100%',
                                        height: '90%',
                                        zIndex: 1,
                                        pointerEvents: 'none',
                                        opacity: 0.9
                                    }}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/laptop-mockup.png" 
                                            alt="" 
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .banner-hero::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    background-size: contain;
                    background-position: right center;
                    background-repeat: no-repeat;
                    z-index: 1;
                    pointer-events: none;
                }
                
                .desktop-normal-case {
                    text-transform: none;
                }
                
                @media (max-width: 991px) {
                    .banner-hero::after {
                        opacity: 0.4;
                    }
                }

                .laptop-image-container {
                    display: block;
                }
                
                @media (max-width: 991px) {
                    .laptop-image-container {
                        display: none;
                    }
                }

                .banner-hero.hero-1 .banner-inner {
                    padding-top: 5px;
                    padding-bottom: 5px;
                    position: relative;
                }

                @media (max-width: 575.98px) {
                    .banner-hero.hero-1 .banner-inner {
                        padding-top: 0px;
                        padding-bottom: 0px;
                    }
                }
                
                /* Mobile styles for Marketing text */
                @media (max-width: 768px) {
                    .marketing-text {
                        display: inline-block;
                        margin-top: 0;
                        margin-left: 0;
                    }
                    
                    .performance-heading {
                        font-size: calc(1.8rem + 0.5vw) !important;
                        white-space: nowrap;
                    }
                }
                
                /* Mobile-only phone button */
                #scrollUp {
                    position: fixed;
                    z-index: 2147483647;
                    bottom: 30px;
                    left: 30px;
                    display: none;
                    align-items: center;
                    justify-content: center;
                    width: 50px;
                    height: 50px;
                    background-color: rgba(8, 11, 40, 0.8);
                    border-radius: 50%;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                }
                
                @media (max-width: 768px) {
                    #scrollUp {
                        display: flex;
                    }
                }

                /* Mobile-only banner image */
                .mobile-only-banner-image {
                    display: none;
                }
                
                @media (max-width: 991px) {
                    .mobile-only-banner-image {
                        display: block;
                        margin: 10px auto 15px;
                        text-align: center;
                    }
                    
                    .performance-heading {
                        text-align: center;
                        margin-bottom: 5px !important;
                        font-size: calc(2rem + 0.6vw) !important;
                        width: 100%;
                        max-width: 100%;
                        overflow: visible;
                        font-weight: bold !important;
                    }
                    
                    .heading-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        text-transform: uppercase;
                    }
                    
                    .heading-container span {
                        margin: 3px 0;
                        white-space: nowrap;
                    }
                    
                    .marketing-text {
                        display: inline-block !important;
                        margin-top: 5px !important;
                        padding: 2px 15px !important;
                    }
                    
                    .banner-description {
                        margin-bottom: 25px !important;
                        margin-top: 10px !important;
                        padding-top: 0 !important;
                        text-align: center;
                        font-size: 15px !important;
                        line-height: 1.5 !important;
                        opacity: 0.9;
                    }
                    
                    .box-buttons {
                        margin-bottom: 35px !important;
                        margin-top: 10px !important;
                        justify-content: center;
                        display: flex;
                    }
                    
                    .block-banner {
                        padding: 0 10px;
                    }
                }
            `}</style>

            <a id="scrollUp" href="tel:+918951085496">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.975 13.747C16.2383 13.747 15.5266 13.6353 14.8641 13.412C14.5047 13.2887 14.0867 13.3637 13.7891 13.6613L12.3797 14.8073C10.5016 13.4293 9.15531 12.0846 7.79297 10.2211L8.91172 8.8501C9.21094 8.5509 9.28125 8.13674 9.16328 7.78518C8.93906 7.11768 8.82734 6.40584 8.82734 5.67084C8.82734 5.08971 8.35547 4.61784 7.77422 4.61784H5.36797C4.78672 4.61784 4.31484 5.08971 4.31484 5.67084C4.31484 12.3122 9.66797 17.6653 16.3094 17.6653C16.8905 17.6653 17.3623 17.1934 17.3623 16.6122V14.2122C17.3625 13.6311 16.8906 13.747 16.975 13.747Z" fill="#C5FF55"/>
                </svg>
            </a>
        </>
    )
}
