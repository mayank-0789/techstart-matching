import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Globe } from "lucide-react";

interface DeveloperRecommendation {
  name: string;
  expertise: string[];
  githubUrl: string;
  portfolioUrl?: string;
  matchReason: string;
}

const recommendations: DeveloperRecommendation[] = [
  {
    name: "Alex Chen",
    expertise: ["AI/ML", "Python", "TensorFlow"],
    githubUrl: "https://github.com/alexchen",
    portfolioUrl: "https://alexchen.dev",
    matchReason: "Expertise in AI/ML development",
  },
  {
    name: "Sarah Johnson",
    expertise: ["React", "Node.js", "AWS"],
    githubUrl: "https://github.com/sarahj",
    matchReason: "Full-stack development experience",
  },
  {
    name: "Mike Rodriguez",
    expertise: ["Mobile", "React Native", "Firebase"],
    githubUrl: "https://github.com/miker",
    portfolioUrl: "https://miker.io",
    matchReason: "Mobile app development specialist",
  },
];

export const RecommendationSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Recommended Technical Co-Founders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based on your interest in AI and mobile technology, here are some talented developers
            who might be perfect for your startup.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((dev) => (
            <Card key={dev.name} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{dev.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {dev.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-600">{dev.matchReason}</p>
                <div className="flex gap-3">
                  <a
                    href={dev.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  {dev.portfolioUrl && (
                    <a
                      href={dev.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <Button className="w-full">Connect</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};