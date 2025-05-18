
import { ContactForm } from "@/components/contact-form";
import { FadeInScroll } from "@/components/fade-in-scroll";

export default function ContactPage() {
  return (
    <div className="container max-w-screen-md mx-auto px-4 py-8 md:py-12">
      <FadeInScroll>
        <section>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
            Contact <span className="text-primary">Me</span>
          </h1>
          <ContactForm />
        </section>
      </FadeInScroll>
    </div>
  );
}
