
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Search } from "lucide-react";

interface ProjectFilterProps {
  technologies: string[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedTechs: string[];
  onTechChange: (tech: string, checked: boolean) => void;
}

export function ProjectFilter({
  technologies,
  searchTerm,
  onSearchChange,
  selectedTechs,
  onTechChange,
}: ProjectFilterProps) {
  return (
    <div className="mb-8 p-6 bg-card rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Label htmlFor="search-projects" className="text-sm font-medium mb-2 block">Search Projects</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="search-projects"
              type="text"
              placeholder="Enter keywords..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <Label className="text-sm font-medium mb-2 block">Filter by Technology</Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 max-h-40 overflow-y-auto p-1 rounded-md border">
            {technologies.map((tech) => (
              <div key={tech} className="flex items-center space-x-2">
                <Checkbox
                  id={`tech-${tech}`}
                  checked={selectedTechs.includes(tech)}
                  onCheckedChange={(checked) => onTechChange(tech, !!checked)}
                />
                <Label htmlFor={`tech-${tech}`} className="text-sm font-normal cursor-pointer">
                  {tech}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
