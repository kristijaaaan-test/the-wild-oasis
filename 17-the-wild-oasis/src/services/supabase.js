import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://klblktymkrygckvdpdrj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsYmxrdHlta3J5Z2NrdmRwZHJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxMDI5NzIsImV4cCI6MjAwNzY3ODk3Mn0.y6h1h5S0a2npGJUDwBv_VyoRvJrAxhL8XjWhp2_u9Mg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
