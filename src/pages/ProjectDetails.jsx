import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, DollarSign, User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { mockProjects } from "@/lib/mock-data";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const project = mockProjects.find(p => p.id === id);
  const [bidAmount, setBidAmount] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  
  // Mock freelancer data - in a real app this would come from auth/context
  const freelancer = {
    name: "John Doe",
    resume: "resume.pdf"
  };

  const handleBidSubmit = () => {
    toast({
      title: "Bid Submitted",
      description: `Your bid of $${bidAmount} has been submitted successfully.`
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

            <div className="flex justify-center pt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg">
                    Place Bid
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Submit Your Bid</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="flex items-center gap-2 border p-3 rounded-lg bg-secondary">
                      <User className="h-4 w-4" />
                      <span className="font-medium">{freelancer.name}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Bid Amount</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="number"
                          placeholder="Enter your bid amount"
                          className="pl-9"
                          value={bidAmount}
                          onChange={(e) => setBidAmount(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Delivery Time</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="text"
                          placeholder="e.g., 5 days"
                          className="pl-9"
                          value={deliveryTime}
                          onChange={(e) => setDeliveryTime(e.target.value)}
                        />
                      </div>
                    </div>

                    <Button className="w-full" onClick={() => handleBidSubmit()}>
                      Submit Bid
                    </Button>

                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open(freelancer.resume, '_blank')}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      View Resume
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}