import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "#",
      color: "hover:text-pink-600",
      followers: "125K"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "#",
      color: "hover:text-red-600",
      followers: "89K"
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "#",
      color: "hover:text-blue-600",
      followers: "156K"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "#",
      color: "hover:text-sky-600",
      followers: "67K"
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@natureconnect.id",
      description: "Kirimkan pertanyaan Anda"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 812-3456-7890",
      description: "Senin - Jumat, 09:00 - 17:00"
    },
    {
      icon: MapPin,
      title: "Lokasi",
      content: "Jakarta, Indonesia",
      description: "Kantor pusat kami"
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Terhubung
            <span className="gradient-text block">Bersama Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bergabunglah dengan komunitas pecinta alam dan dapatkan update terbaru 
            tentang konservasi, petualangan, dan keajaiban alam Indonesia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="nature-card p-8">
              <h3 className="text-2xl font-bold mb-4">Newsletter Eksklusif</h3>
              <p className="text-muted-foreground mb-6">
                Dapatkan tips petualangan, update konservasi, dan foto-foto menakjubkan 
                langsung ke inbox Anda setiap minggu.
              </p>

              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-green-600 mb-2">
                    Terima kasih telah berlangganan!
                  </h4>
                  <p className="text-muted-foreground">
                    Anda akan menerima email konfirmasi segera.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Masukkan email Anda"
                      required
                      className="flex-1 px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <Button 
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Berlangganan
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Dengan berlangganan, Anda menyetujui kebijakan privasi kami. 
                    Batalkan kapan saja.
                  </p>
                </form>
              )}

              {/* Benefits */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span className="text-sm">Tips petualangan eksklusif</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span className="text-sm">Update program konservasi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span className="text-sm">Foto alam berkualitas tinggi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span className="text-sm">Event dan workshop eksklusif</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info & Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="nature-card p-8">
              <h3 className="text-2xl font-bold mb-6">Hubungi Kami</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                      <info.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-muted-foreground mb-1">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="nature-card p-8">
              <h3 className="text-2xl font-bold mb-6">Ikuti Kami</h3>
              <p className="text-muted-foreground mb-6">
                Bergabunglah dengan komunitas online kami dan dapatkan inspirasi 
                harian tentang keindahan alam.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className={`flex items-center gap-3 p-4 border border-border rounded-lg hover:border-green-300 transition-all duration-300 hover-lift ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm text-muted-foreground">{social.followers} followers</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="nature-card p-8 text-center"
            >
              <h4 className="text-lg font-semibold mb-4">Bergabung dengan</h4>
              <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-muted-foreground">Pecinta alam Indonesia</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
