import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, DollarSign } from "lucide-react";

export default function ProjectCard({ project, onClick }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold tracking-tight mb-2">
          {project.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
          {project.skills.length > 3 && (
            <Badge variant="outline">+{project.skills.length - 3} more</Badge>
          )}
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {project.duration}
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" />
            {project.budget.toLocaleString()}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onClick} className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}