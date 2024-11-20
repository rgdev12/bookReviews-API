import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const user = await UserService.registerUser(name, email, password);

    if (user) {
      res.status(201).json({
        success: true,
        message: "User Registered Successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      });
    }
  } catch (err) {
    console.log('err', err)
    res.status(500).json({ success: false, message: 'User could not be registered' });
  }
}