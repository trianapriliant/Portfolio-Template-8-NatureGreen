import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  image: string
  category: string
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Panduan Lengkap Menjelajahi Hutan Hujan Indonesia",
    excerpt: "Temukan tips dan trik untuk menjelajahi keajaiban hutan hujan tropis Indonesia dengan aman dan bertanggung jawab. Dari persiapan hingga etika berkunjung.",
    author: "Dr. Maya Sari",
    date: "15 November 2024",
    readTime: "8 menit",
    image: "/images/gallery-forest.jpg",
    category: "Petualangan",
    tags: ["Hutan", "Eksplorasi", "Konservasi"]
  },
  {
    id: 2,
    title: "Fenomena Aurora: Keajaiban Cahaya di Langit Malam",
    excerpt: "Pelajari lebih dalam tentang fenomena aurora yang memukau dan bagaimana perubahan iklim mempengaruhi intensitas dan frekuensi kemunculannya.",
    author: "Prof. Andi Rahmawan",
    date: "12 November 2024",
    readTime: "6 menit",
    image: "/images/sunset-sky.jpg",
    category: "Sains",
    tags: ["Aurora", "Atmosfer", "Astronomi"]
  },
  {
    id: 3,
    title: "Konservasi Laut: Melindungi Terumbu Karang Indonesia",
    excerpt: "Mengapa terumbu karang sangat penting bagi ekosistem laut dan apa yang bisa kita lakukan untuk melindungi kekayaan bawah laut Indonesia.",
    author: "Maria Santika",
    date: "10 November 2024",
    readTime: "10 menit",
    image: "/images/gallery-ocean.jpg",
    category: "Konservasi",
    tags: ["Laut", "Terumbu Karang", "Ekosistem"]
  }
]

const categories = ["Semua", "Petualangan", "Konservasi", "Sains", "Fotografi"]

export function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cerita &
            <span className="gradient-text block">Pengetahuan Alam</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jelajahi artikel-artikel menarik tentang alam, sains, konservasi, dan 
            petualangan yang akan memperkaya wawasan Anda tentang dunia natural.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="hover:bg-green-50 hover:border-green-300 dark:hover:bg-green-950"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="nature-card p-0 overflow-hidden hover-lift group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-green-600 text-white rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-secondary rounded-md text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-green-600 hover:text-green-700 group-hover:translate-x-1 transition-transform"
                >
                  Baca Selengkapnya
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="nature-card p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Dapatkan Artikel Terbaru
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Berlangganan newsletter kami untuk mendapatkan artikel-artikel menarik 
            tentang alam, tips petualangan, dan update konservasi langsung ke email Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-2 border border-border rounded-lg bg-background"
            />
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
              Berlangganan
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">
            Kami menghormati privasi Anda. Batalkan kapan saja.
          </p>
        </motion.div>

        {/* View All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950">
            Lihat Semua Artikel
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
