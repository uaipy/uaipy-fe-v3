import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center">
      <div className="max-w-2xl px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          <span className="text-red-500">UAI.</span>
          <span className="text-amber-300">P</span>
          <span className="text-blue-500">Y</span>
        </h1>

        <p className="text-muted-foreground mb-8 text-xl">
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
