import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Testimonials } from '../components/Testimonials'
import { Technologies } from '../components/Technologies'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Technologies />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

