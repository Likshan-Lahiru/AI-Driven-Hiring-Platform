import { useParams } from "react-router-dom";
import { Briefcase, MapPin } from "lucide-react";
import Navigation from "@/components/shared/Navigation";
import { Separator } from "@radix-ui/react-separator";

function JobPage() {
    const jobs = [
        {
            _id: "xyz",
            title: "Intern - Software Engineer",
            type: "Full-time",
            location: "Remote",
            questions: [
                "Share your academic background and highlight key programming concepts you've mastered. How has your education shaped your current tech skill set ?",
                "Describe your professional development, emphasizing any certifications obtained. How have these certifications enriched your technical abilities, and can you provide an example of their practical application ?",
                "Discuss notable projects in your programming experience. What challenges did you face, and how did you apply your skills to overcome them? Highlight the technologies used and the impact of these projects on your overall growth as a prefessional ?",
              ],
        },
        {
            _id: "abc",
            title: "Software Engineer",
            type: "Full Time",
            location: "Colombo, Sri Lanka",
            questions: [
                "Share your academic background and highlight key programming concepts you've mastered. How has your education shaped your current tech skill set ?",
                "Describe your professional development, emphasizing any certifications obtained. How have these certifications enriched your technical abilities, and can you provide an example of their practical application ?",
                "Discuss notable projects in your programming experience. What challenges did you face, and how did you apply your skills to overcome them? Highlight the technologies used and the impact of these projects on your overall growth as a prefessional ?",
              ],
        },
        {
            _id: "efg",
            title: "DevOps Engineer",
            type: "Full Time",
            location: "Panadura, Sri Lanka",
            questions: [
                "Share your academic background and highlight key programming concepts you've mastered. How has your education shaped your current tech skill set ?",
                "Describe your professional development, emphasizing any certifications obtained. How have these certifications enriched your technical abilities, and can you provide an example of their practical application ?",
                "Discuss notable projects in your programming experience. What challenges did you face, and how did you apply your skills to overcome them? Highlight the technologies used and the impact of these projects on your overall growth as a prefessional ?",
              ],
        },
        {
            _id: "new4",
            title: "Project Manager",
            type: "Full Time",
            location: "Kalutara",
            questions: [
                "Share your academic background and highlight key programming concepts you've mastered. How has your education shaped your current tech skill set ?",
                "Describe your professional development, emphasizing any certifications obtained. How have these certifications enriched your technical abilities, and can you provide an example of their practical application ?",
                "Discuss notable projects in your programming experience. What challenges did you face, and how did you apply your skills to overcome them? Highlight the technologies used and the impact of these projects on your overall growth as a prefessional ?",
              ],
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
      <Separator/>
        </main>
     );
}

export default JobPage;