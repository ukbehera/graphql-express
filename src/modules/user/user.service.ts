import { apiClient } from "../../config/http.client";
import { User } from "./user.model";

export class UserService {
  static async getUsers(): Promise<User[]> {
    const { data } = await apiClient.get("/users");
    return data;
  }

  static async getUserById(id: number): Promise<User> {
    const { data } = await apiClient.get(`/users/${id}`);
    return data;
  }
}
