import { useState } from "react";
import Navbar from "@/components/Navbar";
import PDFCard from "@/components/PDFCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Upload, FileText, Download } from "lucide-react";

// Mock data for demonstration
const mockPDFs = [
  {
    id: "1",
    title: "Complete DSA Preparation Guide",
    description: "Comprehensive guide covering all data structures and algorithms topics with 500+ practice problems, solutions, and time complexity analysis. Perfect for technical interview preparation.",
    fileUrl: "/pdfs/dsa-guide.pdf",
    uploadedBy: "Admin Team",
    createdAt: "2024-01-15T10:30:00Z",
    category: "Technical"
  },
  {
    id: "2", 
    title: "System Design Interview Questions",
    description: "Collection of system design questions asked at FAANG companies with detailed solutions and architectural diagrams. Includes scalability concepts and trade-offs discussion.",
    fileUrl: "/pdfs/system-design.pdf",
    uploadedBy: "Prof. Kumar",
    createdAt: "2024-01-10T14:20:00Z",
    category: "System Design"
  },
  {
    id: "3",
    title: "Behavioral Interview Masterclass",
    description: "Master the art of behavioral interviews with STAR method examples, common questions, and sample answers. Includes leadership principles for top tech companies.",
    fileUrl: "/pdfs/behavioral-guide.pdf", 
    uploadedBy: "Career Center",
    createdAt: "2024-01-08T09:15:00Z",
    category: "Behavioral"
  },
  {
    id: "4",
    title: "Coding Interview Patterns",
    description: "Learn the most common coding patterns that appear in technical interviews. Includes sliding window, two pointers, dynamic programming, and graph algorithms with examples.",
    fileUrl: "/pdfs/coding-patterns.pdf",
    uploadedBy: "Senior Student",
    createdAt: "2024-01-05T16:45:00Z", 
    category: "Coding"
  },
  {
    id: "5",
    title: "Resume Writing for Tech Roles",
    description: "Professional guide to writing ATS-friendly resumes for software engineering roles. Includes templates, keywords, and examples from successful candidates.",
    fileUrl: "/pdfs/resume-guide.pdf",
    uploadedBy: "HR Expert",
    createdAt: "2024-01-03T11:30:00Z",
    category: "General"
  },
  {
    id: "6",
    title: "Mock Interview Questions Bank", 
    description: "Database of 1000+ technical and behavioral questions categorized by difficulty and company. Includes solutions and interviewer perspectives.",
    fileUrl: "/pdfs/mock-questions.pdf",
    uploadedBy: "Interview Panel",
    createdAt: "2024-01-01T08:00:00Z",
    category: "Technical"
  }
];

const categories = ["All", "Technical", "Behavioral", "Coding", "System Design", "General"];

const PDFs = () => {
  const [user, setUser] = useState(null);
  const [pdfs, setPdfs] = useState(mockPDFs);
  const [filteredPDFs, setFilteredPDFs] = useState(mockPDFs);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter PDFs based on search term and category
  const filterPDFs = (search: string, category: string) => {
    let filtered = pdfs;

    if (search) {
      filtered = filtered.filter(pdf => 
        pdf.title.toLowerCase().includes(search.toLowerCase()) ||
        pdf.description.toLowerCase().includes(search.toLowerCase()) ||
        pdf.uploadedBy.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      filtered = filtered.filter(pdf => pdf.category === category);
    }

    setFilteredPDFs(filtered);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    filterPDFs(value, selectedCategory);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    filterPDFs(searchTerm, value);
  };

  const handleViewPDF = (pdf: any) => {
    // In a real app, this would open the PDF viewer
    console.log("Viewing PDF:", pdf.title);
    // For demo, we'll show an alert
    alert(`Viewing: ${pdf.title}\n\nIn a real application, this would open the PDF viewer or redirect to the PDF file.`);
  };

  const handleDownloadPDF = (pdf: any) => {
    // In a real app, this would trigger the download
    console.log("Downloading PDF:", pdf.title);
    // For demo, we'll show an alert  
    alert(`Downloading: ${pdf.title}\n\nIn a real application, this would start the file download.`);
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
                Preparation Resources
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Access curated study materials, guides, and resources uploaded by our 
                community to help you prepare for technical interviews and assessments.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{pdfs.length}</div>
                <div className="text-muted-foreground">Total Resources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {pdfs.filter(pdf => pdf.category === "Technical").length}
                </div>
                <div className="text-muted-foreground">Technical Guides</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {pdfs.filter(pdf => pdf.category === "Coding").length}
                </div>
                <div className="text-muted-foreground">Coding Resources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="text-muted-foreground">Downloads</div>
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
                    placeholder="Search resources, titles, descriptions..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button variant="hero" className="hover-lift">
                <Upload className="w-4 h-4 mr-2" />
                Upload Resource
              </Button>
            </div>

            {/* Active Filters */}
            {(selectedCategory !== "All" || searchTerm) && (
              <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {searchTerm && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Search: {searchTerm}
                  </Badge>
                )}
                {selectedCategory !== "All" && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Category: {selectedCategory}
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setFilteredPDFs(pdfs);
                  }}
                  className="text-muted-foreground hover:text-primary"
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-8 bg-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pdfs.slice(0, 3).map((pdf) => (
                <div key={pdf.id} className="relative">
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-2 -right-2 z-10 bg-gradient-accent text-white"
                  >
                    Featured
                  </Badge>
                  <PDFCard
                    pdf={pdf}
                    onView={handleViewPDF}
                    onDownload={handleDownloadPDF}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Resources Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                All Resources ({filteredPDFs.length})
              </h2>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <FileText className="w-4 h-4" />
                <span>Sorted by newest first</span>
              </div>
            </div>

            {filteredPDFs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPDFs.map((pdf) => (
                  <PDFCard
                    key={pdf.id}
                    pdf={pdf}
                    onView={handleViewPDF}
                    onDownload={handleDownloadPDF}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No resources found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search criteria or browse different categories.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setFilteredPDFs(pdfs);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Upload CTA */}
        <section className="py-16 bg-gradient-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Have valuable resources to share?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Help your fellow students by uploading study materials, guides, and preparation resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover-lift"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Resource
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover-lift"
              >
                <Download className="w-4 h-4 mr-2" />
                Browse All
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PDFs;