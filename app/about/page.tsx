import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">About Sidhhivinayak Technolabs</h1>
            <p className="text-xl text-indigo-100">Learn about our mission, values, and the team behind our success.</p>
          </div>
        </div>
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-indigo-700">Our Story</h2>
              <p className="mb-4 text-gray-600">
              Founded in 2024, Siddhivinayak Technolabs is dedicated to driving technological innovation in the education sector and beyond.
               Our journey began with a clear mission: to empower educational institutions with cutting-edge ERP solutions, streamlining 
               operations and enhancing efficiency. With a focus on quality and innovation, we strive to deliver robust, scalable, 
               and user-friendly software tailored to the evolving needs of modern education.              
              </p>
              <p className="mb-4 text-gray-600">
              Beyond ERP solutions, we specialize in custom software development, crafting tailored solutions for businesses across various industries. 
              Whether it's automation, enterprise applications, or specialized software, we leverage advanced technologies to build solutions that optimize 
              workflows, enhance productivity, and drive business growth.
              </p>
              <p className="text-gray-600">
              Today, we are proud to have served 7 clients in the fields of Educational ERP and custom software development, helping them 
              streamline their operations and enhance efficiency. Our commitment to innovation and client success drives us to continuously 
              deliver high-quality, tailored solutions.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-indigo-700">Our Values</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Innovation: We constantly push the boundaries of what's possible in software development.</li>
                <li>Integrity: We believe in transparent and ethical business practices.</li>
                <li>Collaboration: We work closely with our clients to ensure their success.</li>
                <li>Excellence: We strive for the highest quality in everything we do.</li>
                <li>Continuous Learning: We stay updated with the latest technologies and industry trends.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

