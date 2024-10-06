import { Card, CardHeader,CardContent,CardTitle,CardFooter} from "@/components/ui/card";
import { Briefcase, MapPin} from "lucide-react";
function JobSection() {
    
    const jobs = [
        {
            _id: "xyz",
            title: "Intern - Software Engineer",
            type: "Full-time",
            location: "Remote"
        },
        {
            _id: "abc",
            title: "Software Engineer",
            type: "Full Time",
            location: "Colombo, Sri Lanka"
        },
        {
            _id: "efg",
            title: "DevOps Engineer",
            type: "Full Time",
            location: "Panadura, Sri Lanka"
        }
    ];

    return ( 
        <section className="py-8">
            <Card>
        <CardHeader>
         <CardTitle>Intern - Software Engineer</CardTitle>
        </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="gap-x-4">
        <div className="flex items-center gap-x-2">
          <Briefcase />
          <span>Full-time</span>
        </div>
        <div className="flex items-center gap-x-2">
          <MapPin />
          <span>Remote</span>
        </div>
      </CardFooter>
    </Card>
        </section>
     );
}

export default JobSection;