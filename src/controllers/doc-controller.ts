import { Request, Response } from 'express';

export const document = (req: Request, res: Response) => {


  const docs = [
    { id: 1, title: 'Document 1' },
    { id: 2, title: 'Document 2' },
  ];
  res.json(docs);
};
