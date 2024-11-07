import { Separator } from "@/components/ui/Separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

function AdminJobCreatePage() {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    location: "",
    description: "",
  });

  const [isJobCreated, setIsJobCreated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store the job locally
    console.log("Job created:", formData);
    
    // Set a success message
    setIsJobCreated(true);
    
    // Clear form fields
    setFormData({
      title: "",
      type: "",
      location: "",
      description: "",
    });
  };

  return (
    <main>
      <div>
        <h2>Admin: Create New Job</h2>
        {isJobCreated && <p className="text-green-500">Job successfully created!</p>}
      </div>
      <Separator />

      <form className="py-8 flex flex-col gap-y-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4">
          <Label>Job Title</Label>
          <Input
            required
            value={formData.title}
            onChange={(event) =>
              setFormData({ ...formData, title: event.target.value })
            }
          />
        </div>

        <div className="flex flex-col gap-y-4">
          <Label>Job Type</Label>
          <Input
            required
            value={formData.type}
            onChange={(event) =>
              setFormData({ ...formData, type: event.target.value })
            }
          />
        </div>

        <div className="flex flex-col gap-y-4">
          <Label>Location</Label>
          <Input
            required
            value={formData.location}
            onChange={(event) =>
              setFormData({ ...formData, location: event.target.value })
            }
          />
        </div>

        <div className="flex flex-col gap-y-4">
          <Label>Description</Label>
          <Textarea
            required
            value={formData.description}
            onChange={(event) =>
              setFormData({ ...formData, description: event.target.value })
            }
          />
        </div>

        <div className="flex gap-x-4 items-center">
          <Button type="submit" className="bg-card text-card-foreground w-fit">
            Create Job
          </Button>
          <Button
            type="button"
            onClick={() =>
              setFormData({
                title: "",
                type: "",
                location: "",
                description: "",
              })
            }
            className="w-fit"
            variant="outline"
          >
            Clear
          </Button>
        </div>
      </form>
    </main>
  );
}

export default AdminJobCreatePage;
