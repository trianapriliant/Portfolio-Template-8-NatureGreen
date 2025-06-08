import { ThemeProvider } from './components/theme-provider'
import { Header } from './components/header'
import { HeroSection } from './components/hero-section'
import { AboutSection } from './components/about-section'
import { GallerySection } from './components/gallery-section'
import { SustainabilitySection } from './components/sustainability-section'
import { TestimonialsSection } from './components/testimonials-section'
import { BlogSection } from './components/blog-section'
import { ContactSection } from './components/contact-section'
import { Footer } from './components/footer'
import { Particles } from './components/particles'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="nature-ui-theme">
      <div className="min-h-screen bg-background relative overflow-x-hidden">
        {/* Particles Background */}
        <Particles />
        
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <GallerySection />
          <SustainabilitySection />
          <TestimonialsSection />
          <BlogSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
