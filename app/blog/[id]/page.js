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

    const renderContent = (content) => {
        if (!content) return null;
        
        return content.map((item, index) => {
            switch (item.type) {
                case 'text':
                    return <p key={index} style={{ fontSize: '18px', marginBottom: '16px', lineHeight: '1.6', fontFamily: 'Arial, sans-serif', color: '#333' }} dangerouslySetInnerHTML={{ __html: item.value }}></p>;
                case 'image':
                    return <div key={index} style={{ textAlign: 'center', marginBottom: '16px' }}><img src={item.src} alt={item.alt} style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} /></div>;
                case 'headline':
                    return <h3 key={index} style={{ marginBottom: '16px', marginTop: '16px', fontWeight: 'bold', fontSize: '24px', fontFamily: 'Arial, sans-serif', color: '#111' }}>{item.value}</h3>;
                case 'blockquote':
                    return <blockquote key={index} style={{
                        marginBottom: '16px',
                        paddingLeft: '20px',
                        borderLeft: '5px solid #84cc16',
                        fontStyle: 'italic',
                        fontSize: '20px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#333',
                        backgroundColor: '#f9f9f9',
                        padding: '10px 20px',
                        borderRadius: '5px'
                    }}><p>{item.value}</p></blockquote>;
                default:
                    return null;
            }
        });
    };

    return (
        <>
            {blogPost && (
                <Layout headerStyle={1} footerStyle={3} headerCls="header-style-2 header-style-4">
                    <section className="section-box box-content-blog-2 box-content-blog-post">
                        <div className="container">
                            <div className="text-left blog-head">
                                <span className="btn btn-brand-4-sm mb-3">{blogPost.category}</span>
                                <h2 className="heading-2 mb-20 mt-15">{blogPost.title}</h2>
                                <p className="text-muted mb-4">By {blogPost.author} on {blogPost.date}</p>
                                {blogPost.content && renderContent(blogPost.content)}
                            </div>
                            <div className="row">
                                <div className="col-lg-1" />
                                <div className="col-lg-10">
                                    <div className="box-content-detail-blog">
                                        <div className="box-image-header">
                                            <img alt={blogPost.title} src={`/assets/imgs/page/blog/${blogPost.img}`} className="img-fluid rounded mb-4" />
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
                                        <div className="card-image"><Link href={`/blog/${2}`}><img src="/assets/imgs/page/homepage6/aromastreettbanner.png" alt="Swiigy Setup Google Ads" /></Link></div>
                                        <div className="card-info"><Link className="heading-5" href={`/blog/${2}`}>Aroma Streett Cafe - Branding & Content Marketing</Link></div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-news-style-2">
                                        <div className="card-image"><Link href={`/blog/${3}`}><img src="/assets/imgs/page/homepage6/communnbanner.png" alt="Communn Meta Ads and Crm Setip" /></Link></div>
                                        <div className="card-info"><Link className="heading-5" href={`/blog/${3}`}>Communn Io - Community Management Solution Platform Success</Link></div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-news-style-2">
                                        <div className="card-image"><Link href={`/blog/${4}`}><img src="/assets/imgs/page/homepage6/internzvalleybanner.png" alt="Internzvalley Website Design and Digital Marketing" /></Link></div>
                                        <div className="card-info"><Link className="heading-5" href={`/blog/${4}`}>InternzValley - Transcending Knowledge, Empowering Future</Link></div>
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