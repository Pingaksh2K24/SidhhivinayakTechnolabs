import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-indigo-100">Your privacy is important to us. Please read our policy below.</p>
          </div>
        </div>
        <div className="container mx-auto px-6 py-16 max-w-3xl">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">1. Information We Collect</h2>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Name, email address, contact number</li>
              <li>Company details (if applicable)</li>
              <li>Usage data such as IP address, browser type, and visited pages</li>
            </ul>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">2. How We Use Your Data</h2>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Provide and improve our services</li>
              <li>Respond to inquiries or customer support requests</li>
              <li>Send updates, newsletters, or promotional emails (you can opt out anytime)</li>
            </ul>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">3. Data Protection</h2>
            <p className="text-gray-700 ml-4">We implement security measures to protect your data from unauthorized access, alteration, or disclosure.</p>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">4. Cookies</h2>
            <p className="text-gray-700 ml-4">We use cookies to improve your browsing experience. By using our website, you consent to the use of cookies.</p>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">5. Data Sharing</h2>
            <p className="text-gray-700 ml-4">We do not sell or rent your personal data. We may share it with trusted third parties only when necessary for service delivery or legal compliance.</p>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">6. Your Rights</h2>
            <p className="text-gray-700 ml-4">You may request access to, correction, or deletion of your personal data by contacting us at <a href="mailto:info@sidhivinay.com" className="text-indigo-600 underline">info@sidhivinay.com</a>.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">7. Changes to this Policy</h2>
            <p className="text-gray-700 ml-4">We reserve the right to update this policy. Any changes will be posted on this page with a revised effective date.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}