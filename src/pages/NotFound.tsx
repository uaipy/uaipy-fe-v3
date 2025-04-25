import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-amber-500 mb-4">Pagina em manutenção ou não existe</h1>
        <p className="text-xl text-gray-600 mb-4">Essa pagina ainda não está disponível</p>
        <p className="text-xl text-gray-600 mb-4">Enquanto isso, você pode voltar para o painel ou pode ler um pouco sobre o projeto</p>
        <a href="/dashboard" className="text-blue-500 hover:text-blue-700 underline">
          Voltar para o painel
        </a>
        <br />
        <a href="https://github.com/uaipy" className="text-blue-500 hover:text-blue-700 underline">
          Ler sobre o projeto
        </a>
      </div>
    </div>
  );
};

export default NotFound;
