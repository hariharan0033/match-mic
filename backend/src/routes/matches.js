import { Router } from 'express';

export const matchRouter = Router();

// Placeholder for match routes
matchRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Matches List' });
});