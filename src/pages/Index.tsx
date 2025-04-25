
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center max-w-2xl px-4">
        <div className="mb-8 w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-white"
          >
            <path d="M7 22V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v18"></path>
            <path d="M18 8v14"></path>
            <path d="M15 8h7"></path>
            <path d="M8 12h6"></path>
          </svg>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">IoT Management Dashboard</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Monitor and manage your connected devices with our minimalist IoT dashboard.
        </p>
        <Link to="/dashboard">
          <Button size="lg" className="rounded-md">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
