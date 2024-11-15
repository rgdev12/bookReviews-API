import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    await UserService.registerUser(email, password);
    res.json({status: true, message: 'User Registered Successfully'})
  } catch (err) {
    throw err;
  }
}