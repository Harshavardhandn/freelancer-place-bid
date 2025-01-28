import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Clock, DollarSign } from "lucide-react";

export default function ProjectCard({ project, onClick }) {
  return (
    <Card 
      className="project-card cursor-pointer"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{project.name}</CardTitle>
            <CardDescription className="mt-2">{project.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {project.duration}
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              {project.budget.toLocaleString()}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}