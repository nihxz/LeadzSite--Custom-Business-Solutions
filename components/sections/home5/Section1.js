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
        message: 'Contact form inquiry from home page' 
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
                message: 'Contact form inquiry from home page'
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
                                        <h1 className="display-2 mb-40" style={{ color: 'white' }}>Performance <span className="text-bg-brand-4" style={{ color: 'black' }}>Marketing</span> </h1>
                                        <div className="banner-description text-xl mb-60 mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Leadzsite blends digital marketing, creative designs, and<br className="d-none d-lg-block" /> custom web development solutions to grow your business worldwide.</div>
                                        <div className="box-buttons mb-40">
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
                                            <div className="form-group" style={{ marginBottom: '25px' }}>
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
                                            <div className="form-group" style={{ marginBottom: '25px' }}>
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
                                            <div className="form-group" style={{ marginBottom: '25px' }}>
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
                                            <div className="form-group" style={{ marginBottom: '25px' }}>
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
                                            <div className="form-group" style={{ marginBottom: '25px' }}>
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
                                                        borderRadius: '10px'
                                                    }}
                                                >
                                                    <option value="Performance Marketing">Performance Marketing</option>
                                                    <option value="Video Editing">Video Editing</option>
                                                    <option value="Website Development">Website Development</option>
                                                    <option value="Graphic Design">Graphic Design</option>
                                                    <option value="Mobile App Development">Mobile App Development</option>
                                                </select>
                                            </div>
                                            <div className="form-group mb-20">
                                                <button 
                                                    className="btn btn-green-linear w-100" 
                                                    type="submit" 
                                                    style={{ 
                                                        padding: '14px 18px',
                                                        borderRadius: '10px',
                                                        border: 'none'
                                                    }}
                                                >
                                                    Get Started
                                                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="true" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {submitStatus && 
                                                <div className="text-center mt-25" style={{ 
                                                    color: submitStatus.includes('success') ? '#4CAF50' : '#f44336',
                                                    padding: '10px',
                                                    marginTop: '25px' 
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
            `}</style>

            <a id="scrollUp" href="tel:+918951085496" style={{position: 'fixed', zIndex: 2147483647, bottom: '30px', left: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.975 13.747C16.2383 13.747 15.5266 13.6353 14.8641 13.412C14.5047 13.2887 14.0867 13.3637 13.7891 13.6613L12.3797 14.8073C10.5016 13.4293 9.15531 12.0846 7.79297 10.2211L8.91172 8.8501C9.21094 8.5509 9.28125 8.13674 9.16328 7.78518C8.93906 7.11768 8.82734 6.40584 8.82734 5.67084C8.82734 5.08971 8.35547 4.61784 7.77422 4.61784H5.36797C4.78672 4.61784 4.31484 5.08971 4.31484 5.67084C4.31484 12.3122 9.66797 17.6653 16.3094 17.6653C16.8905 17.6653 17.3623 17.1934 17.3623 16.6122V14.2122C17.3625 13.6311 16.8906 13.747 16.975 13.747Z" fill="#C5FF55"/>
                </svg>
            </a>
        </>
    )
}
