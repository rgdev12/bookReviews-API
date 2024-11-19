import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    await UserService.registerUser(name, email, password);
    res.json({success: true, message: 'User Registered Successfully'});
  } catch (err) {
    res.status(500).json({ success: false, message: 'User could not be registered' });
  }
}