import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-amber-500">
          Pagina em manutenção ou não existe
        </h1>
        <p className="mb-4 text-xl text-gray-600">
          Essa pagina ainda não está disponível
        </p>
        <p className="mb-4 text-xl text-gray-600">
          Enquanto isso, você pode voltar para o painel ou pode ler um pouco
          sobre o projeto
        </p>
        <a
          href="/dashboard"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Voltar para o painel
        </a>
        <br />
        <a
          href="https://github.com/uaipy"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Ler sobre o projeto
        </a>
      </div>
    </div>
  );
};

export default NotFound;
