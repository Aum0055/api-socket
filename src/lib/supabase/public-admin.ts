import { createClient } from "@supabase/supabase-js";
import { env } from "process";
import 'dotenv/config'; 

export const supabaseAdmin = createClient(
    env.SUPABASE_URL!,
    env.SUPABASE_SERVICE_ROLE_KEY!
)
