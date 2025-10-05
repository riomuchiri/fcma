import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  fanvueLevel: z.string().min(1, "Please select your Fanvue level"),
  contactOption: z.string().min(1, "Please select a contact option"),
  contactHandle: z.string().min(1, "Contact handle is required").max(255),
});

type FormData = z.infer<typeof formSchema>;

const ApplyForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
  try {
  const response = await fetch("https://formspree.io/f/mgvnzabr", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    fanvue_level: data.fanvueLevel,
    contact_option: data.contactOption,
    contact_handle: data.contactHandle,
  }),
});

    if (response.ok) {
      setSubmitted(true);
      toast({
        title: "Application Submitted!",
        description: "Thanks for applying! Our team will reach out soon.",
      });
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    toast({
      title: "Something went wrong.",
      description: "Please try again later or email management@fcma.agency.",
      variant: "destructive",
    });
  }
};

  if (submitted) {
    return (
      <section id="apply" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-card p-12 rounded-lg shadow-card">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Thanks for applying!
            </h2>
            <p className="text-xl text-muted-foreground">
              Our team will reach out within 48 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Ready to Grow Your Fanvue Income?
          </h2>
          <p className="text-lg text-muted-foreground">
            We work with select creators to provide personalized attention and results.
            <br />
            Apply below — our team will reach out within 48 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-card p-8 rounded-lg shadow-card space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                {...register("firstName")}
                placeholder="John"
                className={errors.firstName ? "border-destructive" : ""}
              />
              {errors.firstName && (
                <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                {...register("lastName")}
                placeholder="Doe"
                className={errors.lastName ? "border-destructive" : ""}
              />
              {errors.lastName && (
                <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="john@example.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="fanvueLevel">Fanvue Level</Label>
            <Select onValueChange={(value) => setValue("fanvueLevel", value)}>
              <SelectTrigger className={errors.fanvueLevel ? "border-destructive" : ""}>
                <SelectValue placeholder="Select your level" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="starter">Starter Creator</SelectItem>
                <SelectItem value="active">Active Creator</SelectItem>
                <SelectItem value="elite">Elite Creator</SelectItem>
              </SelectContent>
            </Select>
            {errors.fanvueLevel && (
              <p className="text-sm text-destructive mt-1">{errors.fanvueLevel.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="contactOption">Preferred Contact Option</Label>
            <Select onValueChange={(value) => setValue("contactOption", value)}>
              <SelectTrigger className={errors.contactOption ? "border-destructive" : ""}>
                <SelectValue placeholder="Select contact method" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="whatsapp">WhatsApp</SelectItem>
                <SelectItem value="discord">Discord</SelectItem>
                <SelectItem value="telegram">Telegram</SelectItem>
              </SelectContent>
            </Select>
            {errors.contactOption && (
              <p className="text-sm text-destructive mt-1">{errors.contactOption.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="contactHandle">Preferred Contact Handle</Label>
            <Input
              id="contactHandle"
              {...register("contactHandle")}
              placeholder="@username or phone number"
              className={errors.contactHandle ? "border-destructive" : ""}
            />
            {errors.contactHandle && (
              <p className="text-sm text-destructive mt-1">{errors.contactHandle.message}</p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full gradient-primary hover:shadow-glow transition-all duration-300"
          >
            Send Application
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ApplyForm;
