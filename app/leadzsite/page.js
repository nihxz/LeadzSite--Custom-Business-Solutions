import Image from 'next/image';
import Link from 'next/link';

export default function LeadzsiteLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center" style={{ backgroundImage: "url('/images/agency-hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold text-white leading-tight">Boost Your Leads with Leadzsite</h1>
          <p className="mt-4 text-lg text-gray-300">Your one-stop solution for lead generation and business growth.</p>
          <Link href="/contact">
            <button className="mt-6 px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center">Why Choose Leadzsite?</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transition duration-300">
            <Image src="/assets/imgs/template/icons/ai.svg" unoptimized width={80} height={80} alt="AI Automation" className="mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">AI-Driven Insights</h3>
            <p className="mt-3 text-lg text-gray-600">Maximize lead potential with intelligent analytics.</p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transition duration-300">
            <Image src="/assets/imgs/template/icons/crm.svg?unoptimized" width={80} height={80} alt="CRM Integration" className="mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">Seamless CRM Integration</h3>
            <p className="mt-3 text-lg text-gray-600">Sync effortlessly with all major CRM platforms.</p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transition duration-300">
            <Image src="/assets/imgs/template/icons/analytics.svg?unoptimized" width={80} height={80} alt="Real-time Analytics" className="mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">Real-Time Analytics</h3>
            <p className="mt-3 text-lg text-gray-600">Monitor your lead flow and optimize conversions.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold">What Our Clients Say</h2>
        <p className="mt-4 text-lg text-gray-600">See how businesses have grown with Leadzsite.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <div className="max-w-md p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg italic">"Leadzsite transformed our conversion rates!"</p>
            <p className="mt-4 font-semibold">- Sarah Thompson, CEO</p>
          </div>
          <div className="max-w-md p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg italic">"Unmatched AI-powered lead insights!"</p>
            <p className="mt-4 font-semibold">- John Williams, Marketing Head</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-blue-600 text-white">
        <h2 className="text-4xl font-bold">Start Generating More Leads Today</h2>
        <p className="mt-4 text-lg">Join Leadzsite and transform your business growth.</p>
        <Link href="/signup">
          <button className="mt-6 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
            Sign Up Now
          </button>
        </Link>
      </section>
    </div>
  );
}

