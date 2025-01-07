import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProfileGrid } from "@/components/ProfileGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Featured Profiles</h2>
            <p className="text-xl text-gray-600">
              Connect with amazing founders and developers ready to build the next big thing.
            </p>
          </div>
          <ProfileGrid />
        </section>
      </main>
    </div>
  );
};

export default Index;