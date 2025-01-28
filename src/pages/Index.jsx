import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockProjects } from "@/lib/mock-data";
import ProjectCard from "@/components/ProjectCard";
import FilterSection from "@/components/FilterSection";

export default function Index() {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState("");
  const [maxBudget, setMaxBudget] = useState(50000);

  const filteredProjects = mockProjects.filter((project) => {
    const matchesSkills =
      selectedSkills.length === 0 ||
      selectedSkills.some((skill) => project.skills.includes(skill));
    const matchesExperience =
      !selectedExperience || project.experienceLevel === selectedExperience;
    const matchesBudget = project.budget <= maxBudget;

    return matchesSkills && matchesExperience && matchesBudget;
  });

  return (
    <div className="flex min-h-screen bg-background">
      {/* Skills section with reduced width */}
      <div className="w-1/4">
        <FilterSection
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
          selectedExperience={selectedExperience}
          setSelectedExperience={setSelectedExperience}
          maxBudget={maxBudget}
          setMaxBudget={setMaxBudget}
        />
      </div>

      {/* Projects section with 1.5x width */}
      <main className="w-3/4 p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => navigate(`/project/${project.id}`)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}