import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Building, Eye } from "lucide-react";

interface InterviewExperience {
  id: string;
  company: string;
  role: string;
  year: number;
  studentName: string;
  experienceText: string;
  addedBy: string;
  createdAt: string;
}

interface InterviewCardProps {
  experience: InterviewExperience;
  onView: (experience: InterviewExperience) => void;
}

const InterviewCard = ({ experience, onView }: InterviewCardProps) => {
  const getCompanyColor = (company: string) => {
    const colors = [
      "bg-accent-orange/10 text-accent-orange border-accent-orange/20",
      "bg-accent-green/10 text-accent-green border-accent-green/20",
      "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
      "bg-accent-pink/10 text-accent-pink border-accent-pink/20",
      "bg-primary/10 text-primary border-primary/20",
    ];
    
    // Simple hash function to consistently assign colors
    let hash = 0;
    for (let i = 0; i < company.length; i++) {
      hash = ((hash << 5) - hash) + company.charCodeAt(i);
      hash = hash & hash;
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <Card className="group hover-lift hover-glow transition-all duration-300 border-0 shadow-medium">
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <Badge 
              variant="secondary" 
              className={`${getCompanyColor(experience.company)} font-semibold mb-2`}
            >
              <Building className="w-3 h-3 mr-1" />
              {experience.company}
            </Badge>
            
            <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-1">
              {experience.role}
            </h3>
          </div>
          
          <Badge variant="outline" className="shrink-0">
            {experience.year}
          </Badge>
        </div>

        {/* Experience Preview */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {experience.experienceText}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{experience.studentName}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(experience.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => onView(experience)}
            className="text-primary hover:text-primary-light hover:bg-primary/10"
          >
            <Eye className="w-4 h-4 mr-2" />
            Read More
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default InterviewCard;