const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Who We Are
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Fanvue Creators Management Agency (FCMA) is a specialized management team built exclusively 
            for Fanvue creators — from AI influencers and models to podcasters, musicians, and digital entertainers.
          </p>
          
          <p>
            We've mastered the Fanvue platform, algorithms, and monetization model to know exactly what 
            drives engagement and revenue.
          </p>
          
          <p className="text-foreground font-semibold">
            Our mission: to help creators focus on creating, while we handle growth, engagement, and monetization.
          </p>
          
          <p>
            You retain full control, pricing, and creative direction — we provide the systems, insights, 
            and manpower to scale your success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
