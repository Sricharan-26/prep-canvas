import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  FileText, 
  MessageSquare, 
  Users, 
  Award,
  ArrowRight 
} from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Interview Experiences",
      description: "Read authentic interview experiences from students who landed jobs at top companies. Learn from their journeys and prepare better.",
      link: "/experiences",
      color: "from-accent-orange to-accent-pink",
      bgColor: "bg-accent-orange/10",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Preparation Resources",
      description: "Access curated PDFs, study materials, and guides uploaded by our community and admins to boost your preparation.",
      link: "/pdfs",
      color: "from-accent-green to-primary-light",
      bgColor: "bg-accent-green/10",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Share & Connect",
      description: "Share your own interview experiences and connect with fellow students preparing for their dream careers.",
      link: "/contact",
      color: "from-accent-purple to-primary",
      bgColor: "bg-accent-purple/10",
    },
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, label: "Students Helped", value: "1000+" },
    { icon: <Award className="w-6 h-6" />, label: "Success Stories", value: "200+" },
    { icon: <BookOpen className="w-6 h-6" />, label: "Resources", value: "300+" },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything you need to ace your interviews
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From real interview experiences to comprehensive preparation resources, 
            we've got you covered on your journey to success.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden hover-lift hover-glow border-0 shadow-medium">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative p-8">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 text-primary`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <Link to={feature.link}>
                  <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary-light">
                    Explore <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-card-gradient rounded-2xl shadow-medium p-8 border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;