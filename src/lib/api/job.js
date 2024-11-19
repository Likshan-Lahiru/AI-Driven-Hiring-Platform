export const getJobs = async () => {
   // const res =  fetch("http://localhost:8000/api/jobs",{
    //    method: "GET",
   //     headers: {
    //        "Content-Type": "application.json",
    //    },//asinc operations
    //   })
     //  .then((res) =>{
     //       return res.json();
     //  })
     //  .then((data)=> {
     //       console.log(data);
     //  })
     //  .catch((error)=>{
     //       console.log(error);
      // })
    
      const res = await fetch("https://ai-react-project-backend.onrender.com/api/jobs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch jobs");
      }
      const data = await res.json();
      return data;
    };

export const getJobById = async (id) => {
    const res = await fetch(`https://ai-react-project-backend.onrender.com/api/jobs/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch job");
    }
    const data = await res.json();
    return data;
  };

  export const createJobs = async (data) => {
    const token = await window.Clerk?.session?.getToken();
    console.log("Sending job data:", data);
  
    const res = await fetch("https://ai-react-project-backend.onrender.com/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: data.title,
        type: data.type,
        location: data.location,
        description: data.description,
      }),
    });
  

    if (!res.ok) {
      const errorText = await res.text();  
      throw new Error(errorText || "Failed to create job");
    }
  

    let responseData = null;
    if (res.headers.get("Content-Length") !== "0") {
      responseData = await res.json();
    }
  
    console.log("Job created successfully:", responseData);
    return responseData;
  };
  
  
  