"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const anth_controller_1 = require("../controllers/anth-controller");
const auth_middleware_1 = require("../middleware/auth-middleware");
const router = express_1.default.Router();
router.post('/auth/login', auth_middleware_1.validateLogin, anth_controller_1.Login);
// router.post('/auth/logout', validateLogin, Logout);
exports.default = router;
