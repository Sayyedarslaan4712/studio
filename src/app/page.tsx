
import { ProjectList } from "@/components/project-list";
import { FadeInScroll } from "@/components/fade-in-scroll";

export default function HomePage() {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-8 md:py-12">
      <FadeInScroll>
        <section className="text-center mb-12 md:mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Welcome to My <span className="text-primary">Developer Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Showcasing my journey and skills, one project at a time. Explore my work and let&apos;s connect!
          </p>
        </section>
      </FadeInScroll>
      
      <ProjectList />
    </div>
  );
}
