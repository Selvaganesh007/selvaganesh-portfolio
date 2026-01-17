import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementSection";
import CertificationSection from "./components/CertificationSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <Navbar />
      <div className="container mt-24 mx-auto md:px-12 py-4 px-6">
        <HeaderSection />
        <AchievementsSection />
        <WorkExperience />
        <AboutSection />
        <SkillsSection />
        <CertificationSection />
        <ProjectSection />
        <EducationSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
