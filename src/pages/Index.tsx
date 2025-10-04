import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyFCMA from "@/components/WhyFCMA";
import ApplyForm from "@/components/ApplyForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyFCMA />
        <ApplyForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
