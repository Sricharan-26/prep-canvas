import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, Calendar, User } from "lucide-react";

interface PDFResource {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  uploadedBy: string;
  createdAt: string;
  category?: string;
}

interface PDFCardProps {
  pdf: PDFResource;
  onView: (pdf: PDFResource) => void;
  onDownload: (pdf: PDFResource) => void;
}

const PDFCard = ({ pdf, onView, onDownload }: PDFCardProps) => {
  const getCategoryColor = (category?: string) => {
    if (!category) return "bg-muted text-muted-foreground";
    
    const colors = {
      "Technical": "bg-accent-orange/10 text-accent-orange border-accent-orange/20",
      "Behavioral": "bg-accent-green/10 text-accent-green border-accent-green/20",
      "Coding": "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
      "System Design": "bg-accent-pink/10 text-accent-pink border-accent-pink/20",
      "General": "bg-primary/10 text-primary border-primary/20",
    };
    
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  return (
    <Card className="group hover-lift hover-glow transition-all duration-300 border-0 shadow-medium">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-semibold text-foreground line-clamp-2 leading-tight">
                {pdf.title}
              </h3>
              
              {pdf.category && (
                <Badge 
                  variant="secondary"
                  className={`${getCategoryColor(pdf.category)} shrink-0 text-xs`}
                >
                  {pdf.category}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {pdf.description}
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onView(pdf)}
            className="flex-1 hover:bg-primary/5 hover:border-primary/20"
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          
          <Button 
            variant="default"
            size="sm"
            onClick={() => onDownload(pdf)}
            className="flex-1 bg-gradient-primary hover:opacity-90"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <User className="w-3 h-3" />
            <span>By {pdf.uploadedBy}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span>{new Date(pdf.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PDFCard;