"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = void 0;
const document = (req, res) => {
    const docs = [
        { id: 1, title: 'Document 1' },
        { id: 2, title: 'Document 2' },
    ];
    res.json(docs);
};
exports.document = document;
