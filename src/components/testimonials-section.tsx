import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Testimonial {
  id: number
  name: string
  role: string
  location: string
  quote: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Wijaya",
    role: "Fotografer Alam",
    location: "Jakarta, Indonesia",
    quote: "Melalui platform ini, saya menemukan spot-spot alam tersembunyi yang mengagumkan. Setiap foto yang saya ambil menjadi cerita tentang keindahan Indonesia yang tak terbatas.",
    rating: 5,
    avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgcj0iNzUiIGZpbGw9IiNlNGU3ZWIiLz48Y2lyY2xlIGN4PSI3NSIgY3k9IjYwIiByPSIyNSIgZmlsbD0iIzZiNzI4MCIvPjxwYXRoIGQ9Ik0yNSAxMjVjMC0yNy42IDE0LjQtNTAgNTAtNTBzNTAgMjIuNCA1MCA1MCIgZmlsbD0iIzZiNzI4MCIvPjwvc3ZnPg=="
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "Pendaki Gunung",
    location: "Bandung, Indonesia",
    quote: "Sebagai pendaki berpengalaman, saya sangat terkesan dengan komunitas yang peduli lingkungan di sini. Bersama-sama kita menjaga kelestarian gunung-gunung Indonesia.",
    rating: 5,
    avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgcj0iNzUiIGZpbGw9IiNkMWZhZTUiLz48Y2lyY2xlIGN4PSI3NSIgY3k9IjYwIiByPSIyNSIgZmlsbD0iIzA1OTY2OSIvPjxwYXRoIGQ9Ik0yNSAxMjVjMC0yNy42IDE0LjQtNTAgNTAtNTBzNTAgMjIuNCA1MCA1MCIgZmlsbD0iIzA1OTY2OSIvPjwvc3ZnPg=="
  },
  {
    id: 3,
    name: "Maya Putri",
    role: "Konservasionis",
    location: "Bali, Indonesia",
    quote: "Program konservasi yang disediakan sangat inspiratif. Saya belajar banyak tentang cara melindungi alam sambil tetap menikmati keindahannya dengan bertanggung jawab.",
    rating: 5,
    avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgcj0iNzUiIGZpbGw9IiNmZWY5YzMiLz48Y2lyY2xlIGN4PSI3NSIgY3k9IjYwIiByPSIyNSIgZmlsbD0iIzY1YTMwZCIvPjxwYXRoIGQ9Ik0yNSAxMjVjMC0yNy42IDE0LjQtNTAgNTAtNTBzNTAgMjIuNCA1MCA1MCIgZmlsbD0iIzY1YTMwZCIvPjwvc3ZnPg=="
  },
  {
    id: 4,
    name: "Rizki Pratama",
    role: "Content Creator",
    location: "Yogyakarta, Indonesia",
    quote: "Konten-konten edukatif tentang alam di platform ini membantu saya menyebarkan kesadaran lingkungan kepada followers saya. Dampaknya sangat terasa!",
    rating: 5,
    avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgcj0iNzUiIGZpbGw9IiNkZGY0ZmYiLz48Y2lyY2xlIGN4PSI3NSIgY3k9IjYwIiByPSIyNSIgZmlsbD0iIzI1NjNlYiIvPjxwYXRoIGQ9Ik0yNSAxMjVjMC0yNy42IDE0LjQtNTAgNTAtNTBzNTAgMjIuNCA1MCA1MCIgZmlsbD0iIzI1NjNlYiIvPjwvc3ZnPg=="
  }
]

const inspirationalQuotes = [
  {
    text: "Alam adalah guru terbaik bagi jiwa yang ingin belajar tentang kesabaran dan keindahan.",
    author: "John Muir"
  },
  {
    text: "Bumi tidak warisan dari nenek moyang, tetapi titipan untuk anak cucu kita.",
    author: "Pepatah Native American"
  },
  {
    text: "Dalam setiap jalan setapak di hutan, ada seribu cerita yang menanti untuk ditemukan.",
    author: "Henry David Thoreau"
  }
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentQuote, setCurrentQuote] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Testimoni &
            <span className="gradient-text block">Inspirasi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dengarkan cerita dari para pecinta alam yang telah merasakan manfaat 
            dari koneksi mendalam dengan keajaiban alam Indonesia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="nature-card p-8 relative overflow-hidden">
              {/* Background Quote Icon */}
              <Quote className="absolute top-4 right-4 h-20 w-20 text-green-100 dark:text-green-900/30" />
              
              {/* Testimonial Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-muted-foreground">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="glass-effect"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="glass-effect"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Inspirational Quotes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="nature-card p-8 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-400" />
              </div>
              
              <div className="relative z-10">
                <Quote className="h-12 w-12 text-green-600 mx-auto mb-6" />
                
                <motion.div
                  key={currentQuote}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <blockquote className="text-xl font-medium mb-4 leading-relaxed">
                    "{inspirationalQuotes[currentQuote].text}"
                  </blockquote>
                  <cite className="text-green-600 font-semibold">
                    — {inspirationalQuotes[currentQuote].author}
                  </cite>
                </motion.div>

                <Button
                  variant="ghost"
                  onClick={nextQuote}
                  className="mt-6 text-green-600 hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-950"
                >
                  Quote Selanjutnya
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="nature-card p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">4.9/5</div>
                <div className="text-sm text-muted-foreground">Rating Kepuasan</div>
              </div>
              <div className="nature-card p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">25K+</div>
                <div className="text-sm text-muted-foreground">Testimoni Positif</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="nature-card p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Bagikan Pengalaman Anda</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Ceritakan pengalaman unik Anda dengan alam
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Tulis Testimoni
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
