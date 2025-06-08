import { motion } from 'framer-motion'
import { 
  Leaf, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Heart,
  ArrowUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const footerSections = [
  {
    title: "Jelajahi",
    links: [
      { name: "Galeri Alam", href: "#gallery" },
      { name: "Program Konservasi", href: "#sustainability" },
      { name: "Testimoni", href: "#testimonials" },
      { name: "Blog & Artikel", href: "#blog" }
    ]
  },
  {
    title: "Komunitas",
    links: [
      { name: "Bergabung", href: "#" },
      { name: "Event & Workshop", href: "#" },
      { name: "Volunteer Program", href: "#" },
      { name: "Mitra Konservasi", href: "#" }
    ]
  },
  {
    title: "Sumber Daya",
    links: [
      { name: "Panduan Petualangan", href: "#" },
      { name: "Tips Fotografi Alam", href: "#" },
      { name: "Konservasi 101", href: "#" },
      { name: "FAQ", href: "#" }
    ]
  },
  {
    title: "Dukungan",
    links: [
      { name: "Pusat Bantuan", href: "#" },
      { name: "Kontak Kami", href: "#contact" },
      { name: "Kebijakan Privasi", href: "#" },
      { name: "Syarat & Ketentuan", href: "#" }
    ]
  }
]

const socialLinks = [
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Youtube, href: "#", name: "YouTube" },
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Twitter, href: "#", name: "Twitter" }
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary/30 border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
                <span className="text-2xl font-bold gradient-text">
                  NatureConnect
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Menghubungkan Anda dengan keajaiban alam Indonesia. Bersama-sama 
                kita menjaga, melestarikan, dan menikmati keindahan alam untuk 
                generasi mendatang.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-green-600" />
                  <span>hello@natureconnect.id</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span>+62 812-3456-7890</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Tetap Terhubung dengan Alam
              </h3>
              <p className="text-muted-foreground">
                Dapatkan update mingguan tentang konservasi, tips petualangan, 
                dan foto-foto alam yang menginspirasi.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-background"
              />
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Berlangganan
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span>© 2024 NatureConnect. Dibuat dengan</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>untuk alam Indonesia.</span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 text-muted-foreground hover:text-green-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>

            {/* Back to Top */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-green-600"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Kembali ke Atas
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
