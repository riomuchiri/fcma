import { MessageCircle, Heart, BarChart3, Calendar, Settings, UserPlus, Share2, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: MessageCircle,
    title: "Chat Management",
    description: "24/7 chat engagement handled by our trained team — maximizing fan loyalty and tips.",
  },
  {
    icon: Heart,
    title: "Fan Engagement & Upselling",
    description: "Personalized interaction strategies to convert fans into paying subscribers.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking & Reports",
    description: "Transparent dashboards showing engagement growth, top fans, and earnings.",
  },
  {
    icon: Calendar,
    title: "Content Scheduling Support",
    description: "Plan and optimize your posting schedule for the best visibility and timing.",
  },
  {
    icon: Settings,
    title: "Strategy Optimization",
    description: "Continuous testing to improve fan retention and maximize income.",
  },
  {
    icon: UserPlus,
    title: "New Account Setup & Optimization",
    description: "We help new creators build strong profiles and start earning fast.",
  },
  {
    icon: Share2,
    title: "Social Media Funnel Integration",
    description: "Drive traffic from Instagram, X, and Threads straight into your Fanvue.",
  },
  {
    icon: Lock,
    title: "Secure Access Management",
    description: "Manage your account safely with Fanvue's built-in limited-access tools.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Premium Management Services
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          for Fanvue Creators
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-glow transition-all duration-300 border-border/50"
            >
              <CardContent className="p-6">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
