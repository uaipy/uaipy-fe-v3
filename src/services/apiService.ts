import api from './api';

export class ApiService {
  static async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await api.get<T>(endpoint);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Método POST genérico
  static async post<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response = await api.post<T>(endpoint, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Método PUT genérico
  static async put<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response = await api.put<T>(endpoint, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Método DELETE genérico
  static async delete<T>(endpoint: string): Promise<T> {
    try {
      const response = await api.delete<T>(endpoint);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Tratamento de erros centralizado
  private static handleError(error: any): void {
    if (error.response) {
      console.error('Erro na resposta:', error.response.data);
      console.error('Status:', error.response.status);
    } else if (error.request) {
      console.error('Erro na requisição:', error.request);
    } else {
      console.error('Erro:', error.message);
    }
  }
}
