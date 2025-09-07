import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Award, 
  Star, 
  ArrowRight, 
  Quote 
} from "lucide-react";

// Mock data for demonstration
const recentExperiences = [
  {
    id: "1",
    company: "Google",
    role: "Software Engineer",
    studentName: "Rahul K.",
    rating: 5,
    snippet: "Amazing interview process with focus on problem-solving and system design..."
  },
  {
    id: "2", 
    company: "Microsoft",
    role: "Product Manager",
    studentName: "Priya S.",
    rating: 4,
    snippet: "Great experience with behavioral rounds and case studies..."
  },
  {
    id: "3",
    company: "Amazon",
    role: "SDE Intern",
    studentName: "Arjun M.",
    rating: 5,
    snippet: "Thorough technical rounds with coding and leadership principles..."
  }
];

const testimonials = [
  {
    name: "Sneha Reddy",
    role: "SDE at Microsoft",
    content: "This platform helped me understand what to expect in interviews. The real experiences shared by seniors were invaluable!",
    avatar: "SR"
  },
  {
    name: "Karthik Sharma", 
    role: "PM at Google",
    content: "The preparation resources and interview experiences gave me the confidence I needed to crack my dream job.",
    avatar: "KS"
  },
  {
    name: "Anitha Varma",
    role: "SDE at Amazon",
    content: "Being able to read authentic interview experiences from CBIT students made all the difference in my preparation.",
    avatar: "AV"
  }
];

const Home = () => {
  const [user, setUser] = useState(null);

  const handleAuthClick = () => {
    // This will be implemented with Supabase
    console.log("Auth clicked");
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleGetStarted = () => {
    // Scroll to features or redirect to experiences
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar user={user} onAuthClick={handleAuthClick} onLogout={handleLogout} />
      
      <main>
        {/* Hero Section */}
        <Hero onGetStarted={handleGetStarted} />

        {/* Feature Cards Section */}
        <section id="features">
          <FeatureCards />
        </section>

        {/* Recent Experiences */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Latest Interview Experiences
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fresh insights from students who recently went through interviews at top companies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {recentExperiences.map((exp) => (
                <Card key={exp.id} className="hover-lift border-0 shadow-medium">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {exp.company}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        {[...Array(exp.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent-orange text-accent-orange" />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-2">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {exp.snippet}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">By {exp.studentName}</span>
                      <Button variant="ghost" size="sm" className="text-primary">
                        Read More <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" className="hover-lift">
                View All Experiences <BookOpen className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from students who used our platform to land their dream jobs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-medium">
                  <div className="p-6">
                    <Quote className="w-8 h-8 text-primary/20 mb-4" />
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to ace your interviews?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of students who have successfully landed their dream jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover-lift"
              >
                Browse Experiences <BookOpen className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover-lift"
                onClick={handleAuthClick}
              >
                Join Community <Users className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">IP</span>
                </div>
                <span className="font-bold text-xl text-foreground">InterviewPrep</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Empowering students with authentic interview experiences and comprehensive 
                preparation resources from CBIT Hyderabad and beyond.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/experiences" className="text-muted-foreground hover:text-primary transition-colors">Interview Experiences</a></li>
                <li><a href="/pdfs" className="text-muted-foreground hover:text-primary transition-colors">Preparation PDFs</a></li>
                <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                © 2025 InterviewPrep. All Rights Reserved.
              </div>
              <div className="text-sm text-muted-foreground">
                This website is student-driven and not affiliated with CBIT or companies.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;