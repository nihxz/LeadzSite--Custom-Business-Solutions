'use client'
import Layout from "@/components/layout/Layout"
import data from "@/util/blog.json"
import Link from 'next/link'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function BlogDetails() {
    let Router = useParams()
    const [blogPost, setBlogPost] = useState(null)
    const id = Router.id

    useEffect(() => {
        setBlogPost(data.find((data) => data.id == id))
    }, [id])

    return (
        <>

            {blogPost && (
                <Layout headerStyle={1} footerStyle={1} headerCls="header-style-2 header-style-4" >

                    <section className="section-box box-content-blog-2 box-content-blog-post">
                        <div className="container">
                            <div className="text-center blog-head"><span className="btn btn-brand-4-sm">Technology</span>
                                <h2 className="heading-2 mb-20 mt-15">{blogPost.title}</h2>
                                <p className="text-lg">In today's dynamic education landscape, Ulipsu stands out as a pioneer — a one-of-a-kind platform offering multi-skill learning for school students across India. But behind the scenes of this growing EdTech success story lies a powerful engine driving its reach and engagement — Leadz.site, Ulipsu's performance marketing partner.

Together, this synergy is reshaping how schools discover and adopt 21st-century skill education.

Ulipsu: A Game-Changer in Skill Education
Ulipsu is more than just an EdTech platform. It's a composite skill lab that enables students to explore over 400+ curated modules across 10+ essential skills — from coding and storytelling to entrepreneurship and AI.

Designed to integrate seamlessly with school systems, Ulipsu empowers educators to deliver value-driven, personalized learning without extra infrastructure or manpower.

But to take this vision to scale, Ulipsu needed more than just a great product. It needed the right visibility. That's where Leadz.site came in.

Leadz.site: Fueling Smart, Scalable Growth
As Ulipsu's performance marketing partner, Leadz.site played a key role in:

Targeting and acquiring high-intent leads from A and A+ category schools.

Optimizing ad campaigns across platforms for better cost-per-lead and ROI.

Providing data-driven insights that improved lead quality and conversions.

Through carefully crafted campaigns, Leadz.site helped Ulipsu tap into the right audiences, ensuring that decision-makers in schools saw the true value of Ulipsu's offering.

Results That Speak
Thanks to Leadz.site's focused performance marketing:

Ulipsu saw month-on-month improvement in cost-per-lead.

Engagement from school leaders increased, with more meaningful demos and closures.

Ulipsu expanded its reach to new regions, strengthening its footprint across India.

The Perfect Partnership
What made this partnership work? A shared vision. Ulipsu wanted to transform education, and Leadz.site knew how to get that message across effectively.

This isn't just a client-agency success story — it's a blueprint for how EdTech and performance marketing can come together to create long-term, scalable impact in education.

What's Next?
With continued support from Leadz.site, Ulipsu is now aiming to scale globally, starting with CBSE schools in G7 countries. The future is bright — and skill-first.

Are you an EdTech startup or education brand looking to scale smart?
👉 Partner with Leadz.site — your growth, optimized.

Want to bring Ulipsu's skill lab to your school?
👉 Visit www.ulipsu.com and schedule a free demo today.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-1" />
                                <div className="col-lg-10">
                                    <div className="box-content-detail-blog">
                                        <div className="box-image-header">
                                            <img alt="Nivia" src={`/assets/imgs/page/blog/${blogPost.img}`} /></div>
                                        <div className="box-detail-info">
                                            <p>Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. </p>
                                            <p>Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.</p>
                                            <p>The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? </p><img src="/assets/imgs/page/blog/img-detail2.png" alt="Nivia" />
                                            <p>The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.</p>
                                            <p>Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. </p>
                                            <blockquote>Design comps, layouts, wireframes—we believe that clients will surely accept that you go about things the facile way. It's a matter of time.</blockquote>
                                            <p>Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. </p>
                                            <p>The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.</p>
                                            <p>Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.</p>
                                            <p>Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box box-content-recommended">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="mb-55">Recommended Articles</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card-news-style-2">
                                        <div className="card-image"> <Link href="/blog-post"><img src="/assets/imgs/page/blog/detail.png" alt="Nivia" /></Link></div>
                                        <div className="card-info">
                                            <div className="card-meta"> <Link className="btn btn-tag-sm" href="/blog-post">Technology</Link><span className="date-post">16 October 2023</span></div>
                                            <div className="card-title"> <Link className="link-new" href="/blog-post">Savvy brand marketing: from branding basics to key strategies</Link></div>
                                            <div className="card-more">   <Link className="btn btn-learmore-2" href="/blog-post">Read More
                                                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_599_4830)">
                                                        <path d="M10.6537 3.8149L1.71801 12.7506L0.25 11.2826L9.18469 2.3469H1.31V0.270508H12.7301V11.6906H10.6537V3.8149Z" fill="true" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_599_4830">
                                                            <rect width={13} height={13} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-news-style-2">
                                        <div className="card-image"> <Link href="/blog-post"><img src="/assets/imgs/page/blog/detail2.png" alt="Nivia" /></Link></div>
                                        <div className="card-info">
                                            <div className="card-meta"> <Link className="btn btn-tag-sm" href="/blog-post">Technology</Link><span className="date-post">16 October 2023</span></div>
                                            <div className="card-title"> <Link className="link-new" href="/blog-post">110 drawing ideas to improve your skills you must know in this year</Link></div>
                                            <div className="card-more">   <Link className="btn btn-learmore-2" href="/blog-post">Read More
                                                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_599_4830)">
                                                        <path d="M10.6537 3.8149L1.71801 12.7506L0.25 11.2826L9.18469 2.3469H1.31V0.270508H12.7301V11.6906H10.6537V3.8149Z" fill="true" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_599_4830">
                                                            <rect width={13} height={13} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-news-style-2">
                                        <div className="card-image"> <Link href="/blog-post"><img src="/assets/imgs/page/blog/detail3.png" alt="Nivia" /></Link></div>
                                        <div className="card-info">
                                            <div className="card-meta"> <Link className="btn btn-tag-sm" href="/blog-post">Edu-Tech India</Link><span className="date-post">7 April 2025</span></div>
                                            <div className="card-title"> <Link className="link-new" href="/blog-post">Perfect product images with Generative AI in Nivia platformPowering the Future of Skill Education — How Leadz.site is Accelerating Ulipsu's Mission</Link></div>
                                            <div className="card-more">   <Link className="btn btn-learmore-2" href="/blog-post">Read More
                                                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_599_4830)">
                                                        <path d="M10.6537 3.8149L1.71801 12.7506L0.25 11.2826L9.18469 2.3469H1.31V0.270508H12.7301V11.6906H10.6537V3.8149Z" fill="true" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_599_4830">
                                                            <rect width={13} height={13} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            )}
        </>
    )
}