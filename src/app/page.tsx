import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import Solution from "@/components/Solution";
import SocialProof from "@/components/SocialProof";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden relative">
      {/* Background image with blur and dark overlay */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(6px) brightness(0.25)",
          transform: "scale(1.05)",
        }}
      />
      <Navbar />
      <Hero />
      <Pain />
      <Solution />
      <SocialProof />
      <CTASection />
      <Footer />
    </main>
  );
}
