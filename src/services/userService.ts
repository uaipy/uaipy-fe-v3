import { ApiService } from './apiService';

export interface User {
  id: number;
  name: string;
  email: string;
}

export class UserService {
  private static readonly BASE_PATH = '/users';

  static async getUsers(): Promise<User[]> {
    return ApiService.get<User[]>(this.BASE_PATH);
  }

  static async getUserById(id: number): Promise<User> {
    return ApiService.get<User>(`${this.BASE_PATH}/${id}`);
  }

  static async createUser(user: Omit<User, 'id'>): Promise<User> {
    return ApiService.post<User>(this.BASE_PATH, user);
  }

  static async updateUser(id: number, user: Partial<User>): Promise<User> {
    return ApiService.put<User>(`${this.BASE_PATH}/${id}`, user);
  }

  static async deleteUser(id: number): Promise<void> {
    return ApiService.delete(`${this.BASE_PATH}/${id}`);
  }
}
