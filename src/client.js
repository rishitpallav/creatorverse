import { createClient } from "@supabase/supabase-js";

const URL = "https://rxqvjpyoovjpigzzbnkb.supabase.co";
const API_KEY =
  "API_KEY_HERE";

export const supabase = createClient(URL, API_KEY);
