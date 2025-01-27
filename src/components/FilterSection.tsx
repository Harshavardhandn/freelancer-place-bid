import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { skills, experienceLevels } from "@/lib/mock-data";

interface FilterSectionProps {
  selectedSkills: string[];
  setSelectedSkills: (skills: string[]) => void;
  selectedLevels: string[];
  setSelectedLevels: (levels: string[]) => void;
  budget: number;
  setBudget: (budget: number) => void;
}

export default function FilterSection({
  selectedSkills,
  setSelectedSkills,
  selectedLevels,
  setSelectedLevels,
  budget,
  setBudget,
}: FilterSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <Label className="text-base">Skills</Label>
        <div className="mt-3 checkbox-container">
          {skills.map((skill) => (
            <div key={skill} className="flex items-center space-x-2">
              <Checkbox
                id={skill}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedSkills([...selectedSkills, skill]);
                  } else {
                    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
                  }
                }}
              />
              <label
                htmlFor={skill}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {skill}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <Label className="text-base">Experience Level</Label>
        <div className="mt-3 space-y-2">
          {experienceLevels.map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox
                id={level}
                checked={selectedLevels.includes(level)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedLevels([...selectedLevels, level]);
                  } else {
                    setSelectedLevels(selectedLevels.filter((l) => l !== level));
                  }
                }}
              />
              <label
                htmlFor={level}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <Label className="text-base">Maximum Budget</Label>
        <div className="mt-3 space-y-2">
          <input
            type="range"
            min="1000"
            max="50000"
            step="1000"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="range-slider"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${budget.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}