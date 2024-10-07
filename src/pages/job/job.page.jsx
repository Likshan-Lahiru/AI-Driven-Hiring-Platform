import { useParams } from "react-router-dom";

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
            <h2>Job Page</h2>
        </main>
     );
}

export default JobPage;