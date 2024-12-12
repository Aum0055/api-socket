"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postdocument = exports.document = void 0;
const document = (req, res) => {
    const { title = '' } = req.query;
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
exports.document = document;
const postdocument = (req, res) => {
    const { title = '' } = req.query;
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
exports.postdocument = postdocument;
