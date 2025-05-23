import Layout from "@/components/layout/Layout"
import Section1 from "@/components/sections/home3/Section1"
import Section2 from "@/components/sections/home3/Section2"
import Section3 from "@/components/sections/home3/Section3"
import Section5 from "@/components/sections/home3/Section5"
import Section6 from "@/components/sections/home3/Section6"
import Section7 from "@/components/sections/home3/Section7"
import Section8 from "@/components/sections/home3/Section8"
import Section9 from "@/components/sections/home3/Section9"

export default function WebAgency() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="header-style-2" topBar>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
                <Section9 />
            </Layout>
        </>
    )
} 