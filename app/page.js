import Layout from "@/components/layout/Layout"
import Section1 from "@/components/sections/home5/Section1"
import Section10 from "@/components/sections/home5/Section10"
import Section2 from "@/components/sections/home5/Section2"
import Section3 from "@/components/sections/home5/Section3"
import Section4 from "@/components/sections/home5/Section4"
import Section8 from "@/components/sections/home5/Section8"

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={3} logoWhite>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section8 />
                <Section10 />
            </Layout>
        </>
    )
}