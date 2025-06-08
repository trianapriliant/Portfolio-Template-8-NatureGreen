import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Leaf, Globe, Users } from 'lucide-react'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Heart,
      title: "Cinta Alam",
      description: "Menumbuhkan rasa cinta dan apresiasi mendalam terhadap keindahan alam yang mengelilingi kita."
    },
    {
      icon: Leaf,
      title: "Kelestarian",
      description: "Berkomitmen untuk menjaga dan melestarikan alam untuk generasi mendatang."
    },
    {
      icon: Globe,
      title: "Eksplorasi",
      description: "Menjelajahi keajaiban alam dari berbagai belahan dunia dengan perspektif yang berkelanjutan."
    },
    {
      icon: Users,
      title: "Komunitas",
      description: "Membangun komunitas pecinta alam yang saling mendukung dan berbagi pengalaman."
    }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234ade80' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Filosofi
              <span className="gradient-text block">Hidup Bersama Alam</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Alam bukan hanya tempat yang indah untuk dikunjungi, tetapi rumah yang harus kita jaga. 
              Setiap daun yang bergoyang, setiap gelombang yang berdebur, dan setiap puncak gunung 
              yang menjulang tinggi mengajarkan kita tentang keharmonisan, kesabaran, dan kekuatan.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Melalui koneksi yang mendalam dengan alam, kita belajar untuk menghargai keseimbangan 
              kehidupan dan menemukan kedamaian dalam kesederhanaan. Mari bersama-sama menjaga 
              keajaiban ini untuk generasi yang akan datang.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="nature-card p-4 hover-lift"
                >
                  <feature.icon className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-forest.jpeg"
                alt="Peaceful forest"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay with quote */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-8 text-white">
                  <blockquote className="text-xl font-medium mb-2">
                    "Alam tidak tergesa-gesa, namun semuanya tercapai."
                  </blockquote>
                  <cite className="text-green-300">— Lao Tzu</cite>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-green-500/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
