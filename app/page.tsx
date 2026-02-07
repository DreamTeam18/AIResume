import Hero from '@/components/Hero';
import Header from '@/components/Header';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';
import { FluidBackground } from '@/components/FluidBackground';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Fluid Background */}
      <FluidBackground />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
