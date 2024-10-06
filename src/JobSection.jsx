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
    <section className="py-8 grid gap-y-4">
        <h2>Available Jobs</h2>
        <div className="mt-4 flex-col gap-y-8">
        {
            jobs.map((job) => {
                return (
                    <Card>
                      <CardHeader>
                        <CardTitle>{job.title}</CardTitle>
                      </CardHeader>
                      <CardContent></CardContent>
                      <CardFooter className="gap-x-4">
                        <div className="flex items-center gap-x-2">
                          <Briefcase />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <MapPin />
                          <span>{job.location}</span>
                        </div>
                      </CardFooter>
                    </Card>
                );  
        })}    
        </div>
        
   </section>
     );
}

export default JobSection;