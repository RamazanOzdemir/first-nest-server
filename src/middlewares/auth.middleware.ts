import { Request, Response, NextFunction } from 'express';

// in nest.js the middleware can written as a function as like as express
export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // The Guards is used for authentication that's way this middleware is useless
  console.log('auth middleware is invoked');
  next();
}
