import { motion } from 'framer-motion'
import { ChevronDown, TreePine, Waves, Mountain } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('/images/hero-forest-lake.jpg')`,
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating-animation">
        <TreePine className="h-8 w-8 text-green-400/60" />
      </div>
      <div className="absolute top-32 right-20 floating-animation" style={{ animationDelay: '2s' }}>
        <Mountain className="h-10 w-10 text-blue-400/60" />
      </div>
      <div className="absolute bottom-32 left-1/4 floating-animation" style={{ animationDelay: '4s' }}>
        <Waves className="h-6 w-6 text-cyan-400/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow">
            Terhubung Kembali
            <br />
            <span className="gradient-text bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              dengan Alam
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto text-shadow"
        >
          Jelajahi keajaiban alam yang menakjubkan dan temukan kedamaian 
          dalam keindahan yang tak terbatas di sekitar kita.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            onClick={scrollToNext}
          >
            Mulai Jelajahi
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass-effect border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
          >
            Pelajari Lebih Lanjut
          </Button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white text-shadow">2M+</div>
            <div className="text-gray-300">Foto Alam</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white text-shadow">150+</div>
            <div className="text-gray-300">Lokasi Eksotis</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white text-shadow">50K+</div>
            <div className="text-gray-300">Pecinta Alam</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white"
        >
          <span className="text-sm mb-2">Scroll untuk lanjut</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
