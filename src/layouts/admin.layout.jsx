import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function AdminLayout() {
  const { isLoaded, isSignedIn, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (!isSignedIn) {
      navigate("/sign-in");
      return;
    }

    if (user?.publicMetadata?.role !== "admin") {
      navigate("/");
    }
  }, [isLoaded, isSignedIn, navigate, user]);
  
  return (
    <div>
      <h1>Admin</h1>
      <Outlet />
    </div>
  );
}

export default AdminLayout;