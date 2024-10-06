import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "./components/shared/Navigation";
import Hero  from "./Hero";

function App() {
  return (
  <main className="container px-4">
     <Navigation />
     <div>
      <Hero />
     </div>
  </main>
   
  )
}

export default App;
  