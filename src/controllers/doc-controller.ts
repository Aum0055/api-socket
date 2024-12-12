import { Request, Response } from 'express';

export const document = (req: Request, res: Response) => {
  const { title = '' }: { title?: string } = req.query;
  const docs = [
    { id: 1, title: 'Document 1' },
    { id: 2, title: 'Document 2' },
    { id: 3, title: 'Another Document' },
  ];

  // if (title == '') return res.json(docs);

  // const filteredDocs = title
  //   ? docs.filter((doc) =>
  //     doc.title.toLowerCase().includes((title).toLowerCase())
  //   )
  //   : docs;

  return res.json(docs);
};


export const postdocument = (req: Request, res: Response) => {
  const { title = '' }: { title?: string } = req.query;
  const docs = [
    { id: 1, title: 'Document 1' },
    { id: 2, title: 'Document 2' },
  ];

  console.log(req.body);
  

  // if (title == '') return res.json(docs);

  // const filteredDocs = title
  //   ? docs.filter((doc) =>
  //     doc.title.toLowerCase().includes((title).toLowerCase())
  //   )
  //   : docs;

  return res.json(docs);
};
