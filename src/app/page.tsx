import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MockupSection from "@/components/MockupSection";
import ThreeEngines from "@/components/ThreeEngines";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import AppList from "@/components/AppList";
import Logo from "@/components/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DURKKAS | Unified Multi-Tenant Enterprise Hub",
  description: "Scale your business with the DURKKAS ecosystem. Unify CRM, HRMS, and EMS across all your branches and organizations.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <MockupSection />
        <ThreeEngines />
        <AppList />
        <FeaturesShowcase />

        {/* Simple CTA Section */}

        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to unify your business operations?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of organizations scaling their growth with the <Logo inline text="DURKKAS" color="white" /> ecosystem.
            </p>
            <div className="flex justify-center">
              <button className="px-10 py-4 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                Get Started Now
              </button>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
