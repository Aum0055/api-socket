"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const doc_controller_1 = require("../controllers/doc-controller");
const doc_middleware_1 = require("../middleware/doc-middleware");
const router = express_1.default.Router();
router.get('/doc', doc_middleware_1.authMiddleware, doc_controller_1.document);
exports.default = router;
