import Hero from '@/components/Hero';
import Header from '@/components/Header';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
