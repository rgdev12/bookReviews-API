import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/user.service';

export const register = async (req: Request, res: Response, next: NextFunction) => {
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
    next(err);
  }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await UserService.loginUser(email, password);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token
    });
  } catch (err) {
    next(err);
  }
}
