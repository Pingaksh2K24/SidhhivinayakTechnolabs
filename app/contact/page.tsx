import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-indigo-100">Get in touch with our team for any inquiries or support.</p>
          </div>
        </div>
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-indigo-700">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <Input type="text" id="name" name="name" required className="mt-1 w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input type="email" id="email" name="email" required className="mt-1 w-full" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <Textarea id="message" name="message" rows={4} required className="mt-1 w-full" />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700">Send Message</Button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-indigo-700">Contact Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-indigo-600">Address:</strong><br />
                  Near Government Polytechnic, Vithhal Nagar Khamgaon, District Buldhana, Maharashtra, 443404.
                </p>
                <p>
                  <strong className="text-indigo-600">Phone:</strong><br />
                  +91 7972392628
                </p>
                <p>
                  <strong className="text-indigo-600">Email:</strong><br />
                  info@sidhivinay.com
                </p>
                <p>
                  <strong className="text-indigo-600">Business Hours:</strong><br />
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

