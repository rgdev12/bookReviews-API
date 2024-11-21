import { userModel } from '../models/user.model';
import { compareHash, generateToken } from '../utils';

export class UserService {
  static async registerUser(name: string, email: string, password: string) {
    try {
      const createUser = new userModel({ name, email, password});
      return await createUser.save();
    } catch (error) {
      throw error;
    }
  }

  static async loginUser(email: string, password: string) {
    try {
      const user = await userModel.findOne({ email });

      if (!user) { throw new Error('User not found'); }

      const isPasswordValid = await compareHash(password, user.password);

      if (!isPasswordValid) { throw new Error('Incorrect credentials'); }

      const tokenData = {_id: user._id, email: user.email};
      const token = generateToken(tokenData, '1h');
      
      return { token, user };
    } catch (error) {
      throw error;
    }
  }
}