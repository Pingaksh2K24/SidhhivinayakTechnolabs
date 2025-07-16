import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-indigo-100">Please read these terms carefully before using our services.</p>
          </div>
        </div>
        <div className="container mx-auto px-6 py-16 max-w-3xl">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-700 ml-4">By accessing our website or availing our services, you agree to be legally bound by these terms. If you do not agree with any of these terms, please refrain from using the website.</p>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">2. Services</h2>
            <p className="text-gray-700 ml-4">Sidhhivinayak Technolabs provides IT solutions and software development services. We reserve the right to modify, discontinue, or update any part of our services without prior notice.</p>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">3. Intellectual Property</h2>
            <p className="text-gray-700 ml-4">All content, design, logos, and software on this website are the property of Sidhhivinayak Technolabs and protected under applicable intellectual property laws. You may not reproduce or distribute any material without our prior written consent.</p>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">4. User Responsibilities</h2>
            <p className="text-gray-700 ml-4">You agree not to misuse the website, attempt unauthorized access, or engage in any activity that disrupts the website's functionality.</p>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">5. Limitation of Liability</h2>
            <p className="text-gray-700 ml-4">Sidhhivinayak Technolabs shall not be held liable for any direct, indirect, or consequential loss or damage arising from the use of our website or services.</p>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">6. Third-party Links</h2>
            <p className="text-gray-700 ml-4">Our website may contain links to external websites. We are not responsible for the content or privacy practices of those third-party sites.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">7. Governing Law</h2>
            <p className="text-gray-700 ml-4">These terms shall be governed and interpreted according to the laws of India. Any disputes will be subject to the jurisdiction of the courts in Maharashtra.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}