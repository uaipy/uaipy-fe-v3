
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center max-w-2xl px-4">
        
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          <span className="text-red-500">UAI.</span>
          <span className="text-amber-300">P</span>
          <span className="text-blue-500">Y</span>
        </h1>
          
                
    
        <p className="text-xl text-muted-foreground mb-8">
        Monitore e gerencie seus dispositivos conectados com nosso painel IoT.
        </p>
        <Link to="/dashboard">
          <Button size="lg" className="rounded-md">
            Ir para o painel
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
