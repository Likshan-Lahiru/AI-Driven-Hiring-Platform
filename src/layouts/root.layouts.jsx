import Navigation from "@/components/shared/Navigation";
import { Outlet } from "react-router-dom";
import JobPage from "@/pages/job/job.page";
function RootLayout() {
    return ( 
         <>
         <Navigation />
         <Outlet /> 
     </>
     );
}

export default RootLayout;