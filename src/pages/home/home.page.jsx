import JobSection from "./components/JobSection";
import Navigation from "@/components/shared/Navigation";
import Hero from "./components/Hero";
function HomePage() {
    return ( 
   <main className="container px-4">
     <Navigation />
      <div>
       <Hero />
       <JobSection />
     </div>
  </main>
     );
}

export default HomePage;