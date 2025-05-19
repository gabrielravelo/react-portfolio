import { 
    AboutSection, 
    ContactSection, 
    Footer,
    HeroSection, 
    Navbar, 
    ProjectSection, 
    SkillsSection, 
    StarBackground, 
    ThemeToggle, 
} from "@/components"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Background effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            {/* Hero */}
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
    </div>
}

