import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Target, 
  Users, 
  Heart, 
  BookOpen,
  Award,
  Globe,
  ArrowRight,
  Mail,
  Github,
  Linkedin
} from "lucide-react";

const About = () => {
  const handleAuthClick = () => {
    console.log("Auth clicked");
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const teamMembers = [
    {
      name: "Rahul Kumar",
      role: "Founder & Lead Developer",
      description: "Final year CSE student passionate about helping peers succeed in interviews.",
      avatar: "RK"
    },
    {
      name: "Priya Sharma", 
      role: "Content Curator",
      description: "Specializes in collecting and organizing high-quality preparation resources.",
      avatar: "PS"
    },
    {
      name: "Arjun Mehta",
      role: "Community Manager",
      description: "Ensures our community remains supportive and inclusive for all students.",
      avatar: "AM"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "1000+", label: "Students Helped" },
    { icon: <BookOpen className="w-8 h-8" />, number: "500+", label: "Interview Experiences" },
    { icon: <Award className="w-8 h-8" />, number: "200+", label: "Success Stories" },
    { icon: <Globe className="w-8 h-8" />, number: "50+", label: "Companies Covered" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar user={null} onAuthClick={handleAuthClick} onLogout={handleLogout} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About InterviewPrep
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're a student-driven initiative from CBIT Hyderabad dedicated to helping 
              fellow students succeed in their interview journeys through authentic 
              experiences and comprehensive preparation resources.
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 hover-lift">
              Join Our Mission <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We believe that interview success should be accessible to everyone. By creating 
                  a platform where students can freely share their interview experiences and 
                  access quality preparation materials, we're democratizing career preparation.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Starting from CBIT Hyderabad, our goal is to create the most comprehensive 
                  and authentic repository of interview experiences and resources that helps 
                  students crack their dream jobs.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <Card className="text-center p-6 border-0 shadow-medium">
                    <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Authentic</h3>
                    <p className="text-sm text-muted-foreground">Real experiences from real students</p>
                  </Card>
                  
                  <Card className="text-center p-6 border-0 shadow-medium">
                    <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Community</h3>
                    <p className="text-sm text-muted-foreground">Built by students, for students</p>
                  </Card>
                  
                  <Card className="text-center p-6 border-0 shadow-medium">
                    <Heart className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Free</h3>
                    <p className="text-sm text-muted-foreground">Always free and accessible to all</p>
                  </Card>
                </div>
              </div>

              <div className="lg:pl-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <Card key={index} className="text-center p-6 hover-lift border-0 shadow-medium">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                      <div className="text-muted-foreground text-sm">{stat.label}</div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                How It Started
              </h2>
            </div>
            
            <Card className="p-8 border-0 shadow-medium">
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The idea for InterviewPrep was born during placement season at CBIT Hyderabad. 
                  We noticed that while some students had access to interview experiences and 
                  preparation materials through their networks, many talented individuals were 
                  left to navigate the complex interview landscape alone.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We realized that interview success often depends not just on technical skills, 
                  but also on understanding company cultures, interview formats, and having 
                  access to the right preparation resources. This information was scattered 
                  across personal networks and WhatsApp groups, making it inaccessible to many.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  So, we decided to create a centralized platform where students could freely 
                  share their interview experiences, access curated preparation materials, and 
                  support each other in their career journeys. What started as a simple idea 
                  to help our classmates has now grown into a comprehensive resource for 
                  interview preparation.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're a group of passionate students working together to make interview 
                preparation accessible to everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center p-8 hover-lift border-0 shadow-medium">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                  
                  <div className="flex justify-center space-x-3 mt-6">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and shape the community we're building.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-0 shadow-medium">
                <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-accent-orange" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Transparency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in sharing honest, unfiltered interview experiences that help 
                  students understand what to really expect during the process.
                </p>
              </Card>

              <Card className="p-8 border-0 shadow-medium">
                <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Inclusivity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform welcomes students from all backgrounds, regardless of their 
                  academic performance or previous interview experience.
                </p>
              </Card>

              <Card className="p-8 border-0 shadow-medium">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-accent-purple" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We carefully curate all content to ensure students have access to high-quality, 
                  relevant, and up-to-date preparation materials.
                </p>
              </Card>

              <Card className="p-8 border-0 shadow-medium">
                <div className="w-12 h-12 bg-accent-pink/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-accent-pink" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're constantly evolving based on community feedback and expanding to 
                  serve more students across different colleges and universities.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Disclaimer & Copyright */}
        <section className="py-12 bg-card border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 border-0 shadow-soft">
                <h3 className="text-lg font-semibold text-foreground mb-3">Copyright Notice</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  © 2025 InterviewPrep. All Rights Reserved. All content, interview experiences, 
                  and preparation materials on this platform are contributed by students and 
                  community members for educational purposes.
                </p>
              </Card>

              <Card className="p-6 border-0 shadow-soft">
                <h3 className="text-lg font-semibold text-foreground mb-3">Disclaimer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This website is student-driven and not officially affiliated with CBIT, 
                  any companies mentioned, or their recruitment processes. All interview 
                  experiences are personal accounts and may not represent current practices.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Join Our Growing Community
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Be part of a community that's changing how students prepare for interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover-lift"
              >
                Share Your Experience <Heart className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover-lift"
              >
                Browse Resources <BookOpen className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;