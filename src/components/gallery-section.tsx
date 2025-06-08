import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Filter, ZoomIn } from 'lucide-react'
import { Button } from '@/components/ui/button'

type CategoryType = 'semua' | 'hutan' | 'gunung' | 'laut' | 'flora' | 'fauna'

interface GalleryItem {
  id: number
  src: string
  alt: string
  category: CategoryType
  title: string
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/images/gallery-forest.jpg',
    alt: 'Hutan Tropis',
    category: 'hutan',
    title: 'Hutan Hujan Tropis',
    description: 'Keindahan kanopi hijau yang menenangkan'
  },
  {
    id: 2,
    src: '/images/gallery-mountain.jpeg',
    alt: 'Puncak Gunung',
    category: 'gunung',
    title: 'Puncak Bersalju',
    description: 'Kemegahan puncak gunung yang menjulang'
  },
  {
    id: 3,
    src: '/images/gallery-ocean.jpg',
    alt: 'Lautan Biru',
    category: 'laut',
    title: 'Lautan Kristal',
    description: 'Air jernih yang memukau mata'
  },
  {
    id: 4,
    src: '/images/gallery-flora.jpg',
    alt: 'Bunga Liar',
    category: 'flora',
    title: 'Padang Bunga Liar',
    description: 'Hamparan warna-warni alam'
  },
  {
    id: 5,
    src: '/images/gallery-fauna.jpg',
    alt: 'Satwa Liar',
    category: 'fauna',
    title: 'Kehidupan Liar',
    description: 'Keindahan satwa dalam habitat aslinya'
  },
  {
    id: 6,
    src: '/images/sunset-sky.jpg',
    alt: 'Langit Senja',
    category: 'semua',
    title: 'Langit Emas',
    description: 'Momen magis saat hari berganti malam'
  }
]

const categories: { label: string; value: CategoryType }[] = [
  { label: 'Semua', value: 'semua' },
  { label: 'Hutan', value: 'hutan' },
  { label: 'Gunung', value: 'gunung' },
  { label: 'Laut', value: 'laut' },
  { label: 'Flora', value: 'flora' },
  { label: 'Fauna', value: 'fauna' }
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('semua')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredItems = galleryItems.filter(
    item => activeCategory === 'semua' || item.category === activeCategory
  )

  return (
    <section id="gallery" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Galeri
            <span className="gradient-text block">Keajaiban Alam</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jelajahi koleksi foto-foto menakjubkan dari berbagai sudut alam yang 
            akan memukau mata dan menenangkan jiwa Anda.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.value)}
              className={`transition-all duration-300 ${
                activeCategory === category.value
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'hover:bg-green-50 hover:border-green-300 dark:hover:bg-green-950'
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group relative nature-card p-0 overflow-hidden hover-lift cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-card rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 glass-effect"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
