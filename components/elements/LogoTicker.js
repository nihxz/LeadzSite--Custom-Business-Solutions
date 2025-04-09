'use client'
import Marquee from 'react-fast-marquee'

export default function LogoTicker() {
    return (
        <>
                <Marquee
                    // style={{ width: "auto" }}
                    pauseOnHover={true}
                    direction="left" className="carouselTicker__list list-logos">
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/Baker Creek.png" alt="Baker Creek Digital Marketing Audit" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/UniqueDiariesand Journal.png" alt="Diaries & Journal" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/Aroma streett.png" alt="Aroma Streett Swiggy Setup" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/BCC Clothing.png" alt="BCC CLothing Performance Marketing" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/Classic Services.png" alt="PPC & Google Ads" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/webx.png" alt="Digital Marketing Agency" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/1952coffee.png" alt="Video Editng & Google Ads for 1952 Coffee" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/Ulipsu.png" alt="Perfomance Marketing End-To-End" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo9.png" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/onecommunn.png" alt="Community Management Platform" /></div>
                    </li>
                </Marquee>
        </>
    )
}
