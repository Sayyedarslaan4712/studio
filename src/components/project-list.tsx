
"use client";

import { useState, useMemo } from "react";
import type { Project } from "@/lib/types";
import { mockProjects, allTechnologies } from "@/lib/data";
import { ProjectCard } from "./project-card";
import { ProjectFilter } from "./project-filter";
import { FadeInScroll } from "./fade-in-scroll";

export function ProjectList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const handleTechChange = (tech: string, checked: boolean) => {
    setSelectedTechs((prev) =>
      checked ? [...prev, tech] : prev.filter((t) => t !== tech)
    );
  };

  const filteredProjects = useMemo(() => {
    return mockProjects.filter((project) => {
      const matchesSearchTerm =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTechs =
        selectedTechs.length === 0 ||
        selectedTechs.every((tech) => project.techStack.includes(tech));
      
      return matchesSearchTerm && matchesTechs;
    });
  }, [searchTerm, selectedTechs]);

  return (
    <div>
      <ProjectFilter
        technologies={allTechnologies}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedTechs={selectedTechs}
        onTechChange={handleTechChange}
      />
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <FadeInScroll key={project.id} delay={`delay-${index * 100}`}>
              <ProjectCard project={project} />
            </FadeInScroll>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
