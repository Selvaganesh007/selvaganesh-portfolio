import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto md:px-12 py-4 px-6">
        <HeaderSection />
        <AchievementsSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <EducationSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
