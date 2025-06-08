import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Recycle, 
  TreePine, 
  Droplets, 
  Wind, 
  Shield, 
  Lightbulb,
  Users,
  Target
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const sustainabilityActions = [
  {
    icon: TreePine,
    title: "Penanaman Pohon",
    description: "Berpartisipasi dalam program penanaman 1 juta pohon untuk mengembalikan hutan yang gundul.",
    impact: "50,000+ pohon ditanam",
    color: "text-green-600"
  },
  {
    icon: Droplets,
    title: "Konservasi Air",
    description: "Melindungi sumber mata air dan ekosistem air tawar dari pencemaran industri.",
    impact: "25 mata air dilindungi",
    color: "text-blue-600"
  },
  {
    icon: Wind,
    title: "Energi Bersih",
    description: "Mendukung transisi ke energi terbarukan untuk mengurangi jejak karbon.",
    impact: "30% pengurangan emisi",
    color: "text-cyan-600"
  },
  {
    icon: Shield,
    title: "Perlindungan Satwa",
    description: "Program perlindungan habitat dan rehabilitasi satwa langka yang terancam punah.",
    impact: "15 spesies terlindungi",
    color: "text-orange-600"
  }
]

const initiatives = [
  {
    icon: Lightbulb,
    title: "Edukasi Lingkungan",
    description: "Workshop dan program edukasi untuk meningkatkan kesadaran lingkungan masyarakat."
  },
  {
    icon: Users,
    title: "Volunteer Program",
    description: "Bergabunglah dengan ribuan relawan untuk aksi nyata menjaga kelestarian alam."
  },
  {
    icon: Target,
    title: "Target 2030",
    description: "Komitmen mencapai netral karbon dan 100% energi terbarukan pada tahun 2030."
  }
]

export function SustainabilitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sustainability" className="py-20 relative overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 parallax-bg opacity-10"
        style={{
          backgroundImage: `url('/images/leaves-detail.jpg')`,
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Konservasi &
            <span className="gradient-text block">Keberlanjutan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bersama-sama kita membangun masa depan yang berkelanjutan. Setiap tindakan kecil 
            memiliki dampak besar untuk planet yang lebih hijau dan sehat.
          </p>
        </motion.div>

        {/* Main Actions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {sustainabilityActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="nature-card p-6 text-center hover-lift group"
            >
              <div className="relative inline-block mb-4">
                <action.icon className={`h-12 w-12 ${action.color} group-hover:scale-110 transition-transform duration-300`} />
                <div className="absolute -inset-4 bg-current opacity-10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{action.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {action.description}
              </p>
              
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium">
                {action.impact}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="nature-card p-8 mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">2.5M</div>
              <div className="text-muted-foreground">Ton CO₂ Berkurang</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">890</div>
              <div className="text-muted-foreground">Proyek Konservasi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">15K+</div>
              <div className="text-muted-foreground">Volunteer Aktif</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-muted-foreground">Komunitas Terlibat</div>
            </div>
          </div>
        </motion.div>

        {/* Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <initiative.icon className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{initiative.title}</h3>
                <p className="text-muted-foreground">{initiative.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Bergabunglah dengan Gerakan Hijau
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Setiap langkah kecil menuju kehidupan yang lebih berkelanjutan adalah 
            investasi untuk masa depan planet kita.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Recycle className="h-5 w-5 mr-2" />
              Mulai Berpartisipasi
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950">
              Pelajari Program Kami
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
