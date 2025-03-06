import ContactSection from '@/components/ContactSection';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col">
        <ContactSection />
        <Header />
        <Hero />
        <ProjectsSection />
        <SkillsSection />
      </main>
    </div>
  );
}