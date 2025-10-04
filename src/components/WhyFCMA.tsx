import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Fanvue-specialized management team",
  "24/7 fan interaction and upsells",
  "Transparent, data-driven strategies",
  "You control content, pricing, and direction",
  "Proven systems for consistent monthly revenue",
];

const WhyFCMA = () => {
  return (
    <section id="why-fcma" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Creators Stay Creative.
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-primary">
          We Handle Growth.
        </h3>

        <div className="space-y-4 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 text-lg"
            >
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        <p className="text-2xl text-muted-foreground italic">
          We're your backstage growth team. <span className="text-primary font-semibold">You shine on stage.</span>
        </p>
      </div>
    </section>
  );
};

export default WhyFCMA;
