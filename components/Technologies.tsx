import { SiReact, SiNextdotjs, SiElectron, SiJavascript, SiNodedotjs, SiDotnet, SiMongodb, SiMysql } from 'react-icons/si'
import { FaRobot } from 'react-icons/fa'
import { GiArtificialIntelligence } from 'react-icons/gi'

const techList = [
  { name: 'React.js', icon: <SiReact className="text-sky-400" size={36} /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" size={36} /> },
  { name: 'Electron.js', icon: <SiElectron className="text-blue-400" size={36} /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" size={36} /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" size={36} /> },
  { name: '.NET', icon: <SiDotnet className="text-purple-500" size={36} /> },
  { name: 'SQL', icon: <SiMysql className="text-blue-600" size={36} /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" size={36} /> },
  { name: 'AI/ML', icon: <GiArtificialIntelligence className="text-pink-500" size={36} /> },
  { name: 'Robotics', icon: <FaRobot className="text-gray-400" size={36} /> },
]

export function Technologies() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-indigo-800">Technologies We Work With</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 justify-items-center">
          {techList.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              {tech.icon}
              <span className="mt-2 text-sm md:text-base font-medium text-gray-700 text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 