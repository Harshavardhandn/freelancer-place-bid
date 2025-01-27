import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { mockProjects } from "@/lib/mock-data";
import { useToast } from "@/components/ui/use-toast";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const project = mockProjects.find(p => p.id === id);

  const handleApply = () => {
    toast({
      title: "Application Submitted",
      description: "Your application has been submitted successfully!",
    });
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Project not found</h1>
          <Button onClick={() => navigate("/")}>Back to Projects</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 animate-in">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Button>

        <Card>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">{project.name}</h1>
              <p className="mt-4 text-muted-foreground">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-secondary rounded-lg">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Clock className="h-4 w-4" />
                  Duration
                </div>
                <p className="mt-1 text-2xl font-semibold">{project.duration}</p>
              </div>

              <div className="p-4 bg-secondary rounded-lg">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <DollarSign className="h-4 w-4" />
                  Budget
                </div>
                <p className="mt-1 text-2xl font-semibold">${project.budget.toLocaleString()}</p>
              </div>

              <div className="p-4 bg-secondary rounded-lg">
                <div className="flex items-center gap-2 text-sm font-medium">
                  Experience Level
                </div>
                <p className="mt-1 text-2xl font-semibold">{project.experienceLevel}</p>
              </div>
            </div>

            <div className="flex justify-end">
              <Button onClick={handleApply} size="lg">
                Apply Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}