export const createJobApplication = async (data) => {
    const res = await fetch("http://localhost:8000/api/jobapplications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: data.fullName,
        answers: data.answers,
        job: data.jobId,
      }),
    });
  };