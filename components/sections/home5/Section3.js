import CounterUp from '@/components/elements/CounterUp'
import Marquee from "react-fast-marquee"

export default function Section3() {
    return (
        <>
            <section className="section-box wow animate__animated animate__fadeIn box-awards">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-40">
                            <div className="box-number-award"><img alt="Nivia" src="/assets/imgs/page/homepage6/award.svg" />
                                <p className="display-2">+<CounterUp count={500} /></p>
                                <h3 className="heading-3">Brands</h3>
                            </div>
                            <h1 className="heading-1 neutral-0"> Partnering with pioneers across every major industry</h1>
                        </div>
                        <div className="col-lg-7 mb-40">
                            <div className="box-sliders-award mobile-friendly-logos">
                                {/* Desktop View */}
                                <div className="desktop-logos">
                                    <div className="box-sliders-award-inner" />
                                    <div className="box-sliders-award-bottom">
                                        <div className="list-slider-award">
                                            <div className="slider-award-1">
                                                <div className="carouselTicker3 carouselTicker_vertical" id="slide-top-award">
                                                    <li className="carouselTicker__item">
                                                        <div className="item-logo-2"><img src="/assets/imgs/page/homepage6/Network Journey.png" alt="Network Journey" /></div>
                                                    </li>
                                                    <li className="carouselTicker__item">
                                                        <div className="item-logo-2"><img src="/assets/imgs/page/homepage6/Bang Clothing.png" alt="Bang Clothing" /></div>
                                                    </li>
                                                    <li className="carouselTicker__item">
                                                        <div className="item-logo-2"><img src="/assets/imgs/page/homepage6/Aroma Strett Logo.png" alt="Aroma Product Photography" /></div>
                                                    </li>
                                                    <li className="carouselTicker__item">
                                                        <div className="item-logo-2"><img src="/assets/imgs/page/homepage6/Rareseeds.png" alt="Rareseeds" /></div>
                                                    </li>
                                                </div>
                                            </div>
                                            <div className="slider-award-2">
                                                <div className="carouselTicker4 carouselTicker_vertical" id="slide-bottom-award">
                                                    <li className="carouselTicker__item">
                                                        <div className="item-logo-2"><img src="/assets/imgs/page/homepage6/ilmi school.png" alt="Google Ads" /></div>
                                                    </li>
                                                    <li className="carouselTicker__item">
                                                        <div className="item-logo-2"><img src="/assets/imgs/page/homepage6/ulipsu.png" alt="Website Development" /></div>
                                                    </li>
                                                    <li className="carouselTicker__item">
                                                        <div className="item-logo-2"><img src="/assets/imgs/page/homepage6/communn.png" alt="Community Management software" /></div>
                                                    </li>
                                                    <li className="carouselTicker__item">
                                                        <div className="item-logo-2"><img src="/assets/imgs/page/homepage6/Webx.png" alt="Meta Ads Management" /></div>
                                                    </li>
                                                </div>
                                            </div>
                                            <div className="slider-award-3">
                                                <div className="carouselTicker5 carouselTicker_vertical" id="slide-top-award-2">
                                                    <li className="carouselTicker__item">
                                                        <div className="item-logo-2"><img src="/assets/imgs/page/homepage6/emcee.png" alt="Emcee Sons" /></div>
                                                    </li>
                                                    <li className="carouselTicker__item">
                                                        <div className="item-logo-2"><img src="/assets/imgs/page/homepage6/Unique Diaries.png" alt="Unique Diaries" /></div>
                                                    </li>
                                                    <li className="carouselTicker__item">
                                                        <div className="item-logo-2"><img src="/assets/imgs/page/homepage6/sampaadaa.png" alt="Sampaadaa" /></div>
                                                    </li>
                                                    <li className="carouselTicker__item">
                                                        <div className="item-logo-2"><img src="/assets/imgs/page/homepage6/1952.png" alt="1952" /></div>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Mobile View */}
                                <div className="mobile-logos">
                                    <div className="mobile-logos-row">
                                        <Marquee
                                            pauseOnHover={true}
                                            speed={40}
                                            gradient={false}
                                            direction="left"
                                        >
                                            <div className="item-logo-2">
                                                <img src="/assets/imgs/page/homepage6/Network Journey.png" alt="Network Journey" />
                                            </div>
                                            <div className="item-logo-2">
                                                <img src="/assets/imgs/page/homepage6/Bang Clothing.png" alt="Bang Clothing" />
                                            </div>
                                            <div className="item-logo-2">
                                                <img src="/assets/imgs/page/homepage6/Aroma Strett Logo.png" alt="Aroma Product Photography" />
                                            </div>
                                            <div className="item-logo-2">
                                                <img src="/assets/imgs/page/homepage6/Rareseeds.png" alt="Rareseeds" />
                                            </div>
                                            <div className="item-logo-2">
                                                <img src="/assets/imgs/page/homepage6/ilmi school.png" alt="Google Ads" />
                                            </div>
                                            <div className="item-logo-2">
                                                <img src="/assets/imgs/page/homepage6/ulipsu.png" alt="Website Development" />
                                            </div>
                                        </Marquee>
                                    </div>
                                    <div className="mobile-logos-row">
                                        <Marquee
                                            pauseOnHover={true}
                                            speed={40}
                                            gradient={false}
                                            direction="right"
                                        >
                                            <div className="item-logo-2">
                                                <img src="/assets/imgs/page/homepage6/communn.png" alt="Community Management software" />
                                            </div>
                                            <div className="item-logo-2">
                                                <img src="/assets/imgs/page/homepage6/Webx.png" alt="Meta Ads Management" />
                                            </div>
                                            <div className="item-logo-2">
                                                <img src="/assets/imgs/page/homepage6/emcee.png" alt="Emcee Sons" />
                                            </div>
                                            <div className="item-logo-2">
                                                <img src="/assets/imgs/page/homepage6/Unique Diaries.png" alt="Unique Diaries" />
                                            </div>
                                            <div className="item-logo-2">
                                                <img src="/assets/imgs/page/homepage6/sampaadaa.png" alt="Sampaadaa" />
                                            </div>
                                            <div className="item-logo-2">
                                                <img src="/assets/imgs/page/homepage6/1952.png" alt="1952" />
                                            </div>
                                        </Marquee>
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
