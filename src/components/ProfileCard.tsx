import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProfileCardProps {
  type: "founder" | "developer";
  name: string;
  title: string;
  description: string;
  skills?: string[];
  idea?: string;
  onConnect: () => void;
}

export const ProfileCard = ({
  type,
  name,
  title,
  description,
  skills,
  idea,
  onConnect,
}: ProfileCardProps) => {
  return (
    <Card className="w-full max-w-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{name}</CardTitle>
            <p className="text-gray-600">{title}</p>
          </div>
          <Badge variant={type === "founder" ? "default" : "secondary"}>
            {type === "founder" ? "Founder" : "Developer"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{description}</p>
        {skills && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        )}
        {idea && (
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Startup Idea</h4>
            <p className="text-gray-700">{idea}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={onConnect} className="w-full">
          Connect
        </Button>
      </CardFooter>
    </Card>
  );
};