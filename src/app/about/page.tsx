
import { AboutMe } from "@/components/about-me";
import { AiAboutReviewer } from "@/components/ai-about-reviewer";
import { FadeInScroll } from "@/components/fade-in-scroll";

export default function AboutPage() {
  return (
    <div className="container max-w-screen-lg mx-auto px-4 py-8 md:py-12">
      <FadeInScroll>
        <section className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
            More About Me & <span className="text-primary">AI Enhancement</span>
          </h1>
          <div className="space-y-12">
            <AboutMe />
            <AiAboutReviewer />
          </div>
        </section>
      </FadeInScroll>
    </div>
  );
}
