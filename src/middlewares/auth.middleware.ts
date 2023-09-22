import { Request, Response, NextFunction } from 'express';

// in nest.js the middleware can written as a function as like as express
export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('auth middleware is invoked');
  next();
}
