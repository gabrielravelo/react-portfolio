import { Navbar, StarBackground, ThemeToggle } from "@/components"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}

        {/* Footer */}
    </div>
}

