import { Button    } from "../ui/button";

function Navigation() {
    return (
      <nav className="flex py-12 justify-between items-center">
        <div>
          <a href={"/"} className="text-4xl font-medium text-underlay-1">
            HirelyAI
          </a>
        </div>
        <div className="flex justify-center gap-x-8 items-center">
          <a href="/">Home</a>
          <div className="flex gap-x-4 items-center">
            <a href={"/sign-in"}>Sign In</a>
            <Button asChild>
            <a href={"/sign-up"}>Sign  Up</a>
            </Button>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navigation;
