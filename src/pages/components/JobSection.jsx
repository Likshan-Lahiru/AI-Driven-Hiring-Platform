
import JobCard from "./jobCard";
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
        },
        {
            _id: "new4",
            title: "Project Manager",
            type: "Full Time",
            location: "Kalutara"
        }
    ];

   

    return ( 
    <section className="py-8 ">
        <h2>Available Jobs</h2>
        <div className="mt-4 flex flex-col gap-y-8">
        {
            jobs.map((job) => {
                return (
                    <JobCard keys = {job._id} job = {job }/>
                );  
        })}    
        </div>
        
   </section>
     );
}

export default JobSection;