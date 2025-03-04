'use client'

import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = []
    const particleCount = 50

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1
      }
    }

    function createParticles() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle())
      }
    }

    function updateParticle(particle: typeof particles[0]) {
      particle.x += particle.speedX
      particle.y += particle.speedY

      if (particle.size > 0.2) particle.size -= 0.05

      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
    }

    function drawParticle(particle: typeof particles[0]) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((particle) => {
        updateParticle(particle)
        drawParticle(particle)
      })
      requestAnimationFrame(animateParticles)
    }

    createParticles()
    animateParticles()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}

