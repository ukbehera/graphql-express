import { UserService } from "./user.service";

export const UserResolver = {
  users: async () => await UserService.getUsers(),
  user: async ({ id }: { id: number }) => await UserService.getUserById(id),
};
