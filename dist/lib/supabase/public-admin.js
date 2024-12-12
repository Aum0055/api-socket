"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabaseAdmin = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const process_1 = require("process");
require("dotenv/config");
exports.supabaseAdmin = (0, supabase_js_1.createClient)(process_1.env.SUPABASE_URL, process_1.env.SUPABASE_SERVICE_ROLE_KEY);
