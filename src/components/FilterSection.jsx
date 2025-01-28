import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const skills = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Content Creation",
  "Digital Marketing",
  "Data Analysis",
];

const experienceLevels = ["Entry", "Intermediate", "Expert"];

export default function FilterSection({
  selectedSkills,
  setSelectedSkills,
  selectedExperience,
  setSelectedExperience,
  maxBudget,
  setMaxBudget,
}) {
  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <aside className="w-80 border-r bg-card p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant={selectedSkills.includes(skill) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleSkill(skill)}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Experience Level</h2>
          <div className="flex flex-wrap gap-2">
            {experienceLevels.map((level) => (
              <Badge
                key={level}
                variant={selectedExperience === level ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedExperience(level === selectedExperience ? "" : level)}
              >
                {level}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Maximum Budget</h2>
          <div className="space-y-4">
            <Slider
              value={[maxBudget]}
              onValueChange={([value]) => setMaxBudget(value)}
              max={50000}
              step={1000}
            />
            <div className="text-sm text-muted-foreground">
              Up to ${maxBudget.toLocaleString()}
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            setSelectedSkills([]);
            setSelectedExperience("");
            setMaxBudget(50000);
          }}
        >
          Reset Filters
        </Button>
      </div>
    </aside>
  );
}