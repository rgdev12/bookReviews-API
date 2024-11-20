import { Request, Response, NextFunction } from 'express';
import { MongoError } from 'mongodb';
import { Error } from 'mongoose';
import { ValidationError } from 'joi';

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof MongoError) {
    if (err.code === 11000) {
      res.status(400).json({ success: false, message: 'Email already exists. Please use a different email.' });
      return;
    }
  }

  if (err instanceof Error.ValidationError) {
    const messages = Object.values(err.errors).map((error: any) => error.message);
    res.status(400).json({ success: false, message: messages.join('. ') });
    return;
  }

  if (err instanceof ValidationError) {
    res.status(400).json({ success: false, message: err.details.map(detail => detail.message).join('. ') });
    return;
  }

  res.status(500).json({ success: false, message: 'An unexpected error occurred.' });
}
