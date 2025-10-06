import { Mail, Instagram, Twitter, MessageCircle, Send, Facebook } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "management@fcma.agency",
    href: "mailto:management@fcma.agency",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@fcma_agency",
    href: "https://www.instagram.com/fcma_agency?igsh=ejJqaG1mZHltbmNn",
  },
  {
    icon: Twitter,
    label: "X (Twitter)",
    value: "@fcma_agency",
    href: "https://x.com/fcma_agency?t=09Sue6J9Ou8TdEVdnvWxgA&s=09",
  },
  {
    icon: MessageCircle,
    label: "Threads",
    value: "@fcma_agency",
    href: "https://www.threads.com/@fcma_agency",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "Join Our Channel",
    href: "https://t.me/fcma_agency",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "FCMA Official Page",
    href: "https://www.facebook.com/share/1B4j2GBnCV/",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Let's Connect
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card rounded-lg shadow-card hover:shadow-glow transition-all duration-300 border border-border/50 group"
            >
              <contact.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm text-muted-foreground">{contact.label}</p>
                <p className="font-semibold text-foreground">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
