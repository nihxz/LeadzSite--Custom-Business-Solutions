
import Link from 'next/link'

export default function Section1() {
    return (
        <>

            {<section className="section-box">
    <div className="banner-hero hero-3" style={{ backgroundImage: "url('/assets/imgs/page/homepage6/banner-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} >
        <div className="banner-inner">
            <div className="container">
                <h1 className="display-2 mb-25">Unlock Your&nbsp;<span className="text-bg-brand-4">Business Potential</span> with Data-Driven Strategies</h1>
                <p className="text-lg mb-25">Leadzsite empowers businesses with AI-driven insights, automation, and real-time analytics to optimize marketing and sales.</p>
                {/* <div className="box-download-app justify-content-center">
                    <Link href="#"><img src="/assets/imgs/page/homepage6/googleplay.png" alt="Leadzsite" /></Link>
                    <Link href="#"><img src="/assets/imgs/page/homepage6/appstore.png" alt="Leadzsite" /></Link>
                </div> */}
            </div>
        </div>
    </div>
</section>

            
            }
            
        </>
    )
}
