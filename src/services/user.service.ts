import { userModel } from '../models/user.model';

export class UserService {
  static async registerUser(name:string, email: string, password: string) {
    try {
      const createUser = new userModel({ name, email, password});
      return await createUser.save();
    } catch (error) {
      throw error;
    }
  }
}