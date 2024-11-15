import { userModel } from '../models/user.model';

export class UserService {
  static async registerUser(email: string, password: string) {
    try {
      const createUser = new userModel({ email, password});
      return await createUser.save();
    } catch (error) {
      throw error;
    }
  }
}