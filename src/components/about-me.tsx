
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const skills = [
  "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", 
  "Python", "HTML5 & CSS3", "Tailwind CSS", "Git & GitHub", 
  "REST APIs", "GraphQL", "Databases (SQL & NoSQL)", "Firebase"
];

export function AboutMe() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">About Me</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-foreground/90">
        <p className="leading-relaxed">
          Hello! I&apos;m a passionate and dedicated web developer with a knack for creating elegant, efficient, and user-friendly digital experiences. My journey in web development started with a fascination for how websites work, and it has grown into a full-blown passion for building innovative solutions.
        </p>
        <p className="leading-relaxed">
          I thrive on challenges and am constantly learning new technologies to stay at the forefront of this ever-evolving field. My experience spans across front-end and back-end development, allowing me to take projects from conception to deployment.
        </p>
        <div>
          <h3 className="text-lg font-semibold mb-3 text-primary">Core Skills</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
            {skills.map(skill => (
              <li key={skill} className="flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2 text-accent" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <p className="leading-relaxed">
          When I&apos;m not coding, you can find me exploring new tech blogs, contributing to open-source projects, or enjoying a good cup of coffee. I&apos;m always excited to connect with fellow developers and potential collaborators!
        </p>
      </CardContent>
    </Card>
  );
}
