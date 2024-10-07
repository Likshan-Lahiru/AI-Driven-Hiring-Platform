import { useParams } from "react-router-dom";
import { Briefcase, MapPin } from "lucide-react";
import Navigation from "@/components/shared/Navigation";

function JobPage() {
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
        },
        {
            _id: "new4",
            title: "Project Manager",
            type: "Full Time",
            location: "Kalutara"
        }
    ];

    const params = useParams();
    const job = jobs.find((job) => job._id === params._id);
    if(job){
        console.log(job);
    } else{
        console.log("Selected Job is not available")
    }
    
    
        
    


    return ( 
        
        <main className="container px-4">
        <Navigation />
             <div>
        <h2>{job.title}</h2>
        <div className="flex items-center gap-x-4 mt-4">
          <div className="flex items-center gap-x-2">
            <Briefcase />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <MapPin />
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 py-4">
        <p>{job.description}</p>
      </div>
        </main>
     );
}

export default JobPage;