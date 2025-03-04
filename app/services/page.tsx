import { Header } from '../../components/Header'
import { Services } from '../../components/Services'
import { Footer } from '../../components/Footer'

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-indigo-100">Discover how we can help your business grow with our innovative solutions.</p>
          </div>
        </div>
        <Services />
      </main>
      <Footer />
    </div>
  )
}

