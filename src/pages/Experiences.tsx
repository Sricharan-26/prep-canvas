import { useState } from "react";
import Navbar from "@/components/Navbar";
import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Plus, Calendar, User, Building } from "lucide-react";

// Mock data for demonstration
const mockExperiences = [
  {
    id: "1",
    company: "Google",
    role: "Software Engineer",
    year: 2024,
    studentName: "Rahul Kumar",
    experienceText: "The interview process at Google was incredibly thorough and well-structured. It consisted of 5 rounds: an initial screening call, two technical rounds focusing on algorithms and data structures, a system design round, and a behavioral round. The technical questions were challenging but fair, covering topics like dynamic programming, graph algorithms, and tree traversal. The interviewers were very supportive and provided hints when I was stuck. The system design round was particularly interesting where I had to design a URL shortener service. Overall, it was a great learning experience even though the process was intense.",
    addedBy: "admin1",
    createdAt: "2024-01-15T10:30:00Z"
  },
  {
    id: "2",
    company: "Microsoft",
    role: "Product Manager",
    year: 2024,
    studentName: "Priya Sharma",
    experienceText: "Microsoft's PM interview process was focused heavily on product thinking and behavioral questions. The process included 4 rounds: a recruiter screening, a case study round, a technical PM round, and a final round with the hiring manager. I was asked to design a feature for Microsoft Teams and had to walk through the entire product lifecycle. The behavioral questions were based on the STAR method and focused on leadership, collaboration, and problem-solving. The interviewers were very friendly and the process felt more like a conversation than an interrogation.",
    addedBy: "admin2",
    createdAt: "2024-01-10T14:20:00Z"
  },
  {
    id: "3",
    company: "Amazon",
    role: "SDE Intern",
    year: 2023,
    studentName: "Arjun Mehta",
    experienceText: "Amazon's internship interview was quite different from what I expected. It had 3 rounds: an online assessment with coding problems, a technical interview, and a behavioral round focused on Amazon's leadership principles. The coding problems were medium-level on LeetCode and focused on arrays, strings, and basic algorithms. The behavioral round was crucial - they really emphasized the leadership principles like 'Customer Obsession' and 'Ownership'. I had to prepare specific examples from my projects that demonstrated these principles. The process was efficient and I received the offer within a week.",
    addedBy: "student1",
    createdAt: "2023-09-22T16:45:00Z"
  },
  {
    id: "4",
    company: "Flipkart",
    role: "Software Engineer",
    year: 2024,
    studentName: "Sneha Reddy",
    experienceText: "Flipkart's interview process was well-organized and student-friendly. It consisted of 4 rounds: online coding test, two technical rounds, and an HR round. The coding test had 3 problems of easy to medium difficulty. The technical rounds covered data structures, algorithms, and some system design concepts. What I liked most was that the interviewers were very encouraging and helped me when I was stuck. They also asked about my projects in detail and how I handled challenges. The HR round was more about understanding my motivations and cultural fit.",
    addedBy: "student2",
    createdAt: "2024-02-28T11:15:00Z"
  },
  {
    id: "5",
    company: "TCS",
    role: "Systems Engineer",
    year: 2023,
    studentName: "Vikram Singh",
    experienceText: "TCS had a campus recruitment process with multiple stages. First was an online aptitude test covering quantitative ability, reasoning, and verbal skills. Then there was a technical interview focusing on programming fundamentals, DBMS, and computer networks. The questions were mostly theoretical with some basic coding problems. The HR round was about understanding career goals and willingness to relocate. The process was smooth and they provided clear communication throughout. The interview panel was supportive and made me feel comfortable.",
    addedBy: "student3",
    createdAt: "2023-11-05T09:30:00Z"
  }
];

const companies = ["All", "Google", "Microsoft", "Amazon", "Flipkart", "TCS", "Adobe", "Salesforce"];
const years = ["All", "2024", "2023", "2022"];

const Experiences = () => {
  const [user, setUser] = useState(null);
  const [experiences, setExperiences] = useState(mockExperiences);
  const [filteredExperiences, setFilteredExperiences] = useState(mockExperiences);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Filter experiences based on search term, company, and year
  const filterExperiences = (search: string, company: string, year: string) => {
    let filtered = experiences;

    if (search) {
      filtered = filtered.filter(exp => 
        exp.company.toLowerCase().includes(search.toLowerCase()) ||
        exp.role.toLowerCase().includes(search.toLowerCase()) ||
        exp.studentName.toLowerCase().includes(search.toLowerCase()) ||
        exp.experienceText.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (company !== "All") {
      filtered = filtered.filter(exp => exp.company === company);
    }

    if (year !== "All") {
      filtered = filtered.filter(exp => exp.year.toString() === year);
    }

    setFilteredExperiences(filtered);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    filterExperiences(value, selectedCompany, selectedYear);
  };

  const handleCompanyChange = (value: string) => {
    setSelectedCompany(value);
    filterExperiences(searchTerm, value, selectedYear);
  };

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
    filterExperiences(searchTerm, selectedCompany, value);
  };

  const handleViewExperience = (experience: any) => {
    setSelectedExperience(experience);
    setIsDialogOpen(true);
  };

  const handleAuthClick = () => {
    console.log("Auth clicked");
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar user={user} onAuthClick={handleAuthClick} onLogout={handleLogout} />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-12 bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Interview Experiences
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Learn from real interview experiences shared by students who successfully 
                landed jobs at top companies. Get insights, tips, and prepare better.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{experiences.length}</div>
                <div className="text-muted-foreground">Total Experiences</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {new Set(experiences.map(exp => exp.company)).size}
                </div>
                <div className="text-muted-foreground">Companies Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {new Set(experiences.map(exp => exp.studentName)).size}
                </div>
                <div className="text-muted-foreground">Contributors</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-6 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search experiences, companies, roles..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="flex gap-3">
                  <Select value={selectedCompany} onValueChange={handleCompanyChange}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Company" />
                    </SelectTrigger>
                    <SelectContent>
                      {companies.map((company) => (
                        <SelectItem key={company} value={company}>
                          {company}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedYear} onValueChange={handleYearChange}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button variant="hero" className="hover-lift">
                <Plus className="w-4 h-4 mr-2" />
                Share Your Experience
              </Button>
            </div>

            {/* Active Filters */}
            {(selectedCompany !== "All" || selectedYear !== "All" || searchTerm) && (
              <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {searchTerm && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Search: {searchTerm}
                  </Badge>
                )}
                {selectedCompany !== "All" && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Company: {selectedCompany}
                  </Badge>
                )}
                {selectedYear !== "All" && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Year: {selectedYear}
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCompany("All");
                    setSelectedYear("All");
                    setFilteredExperiences(experiences);
                  }}
                  className="text-muted-foreground hover:text-primary"
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Experiences Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredExperiences.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExperiences.map((experience) => (
                  <InterviewCard
                    key={experience.id}
                    experience={experience}
                    onView={handleViewExperience}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No experiences found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search criteria or explore different filters.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCompany("All");
                    setSelectedYear("All");
                    setFilteredExperiences(experiences);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Experience Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedExperience && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedExperience.role} at {selectedExperience.company}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{selectedExperience.studentName}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedExperience.createdAt).toLocaleDateString()}</span>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {selectedExperience.year}
                  </Badge>
                </div>

                <div className="prose max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {selectedExperience.experienceText}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground">
                    Added by: {selectedExperience.addedBy}
                  </div>
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Experiences;