import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToApply = () => {
    const element = document.querySelector("#apply");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 gradient-hero">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          Empowering Fanvue Creators to{" "}
          <span className="text-primary">Earn More</span>, Stress Less.
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
          We're the agency that understands Fanvue. Whether you're an AI influencer, model, 
          podcaster, or entertainer — FCMA helps you grow your revenue while keeping full creative control.
        </p>

        <Button
          onClick={scrollToApply}
          size="lg"
          className="gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 animate-fade-in"
        >
          Apply to Be Managed
        </Button>
      </div>
    </section>
  );
};

export default Hero;
