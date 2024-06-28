import { createClient } from "@supabase/supabase-js";

const SUPABASE_PROJECT_URL = "https://riznyepsjswcwoojsvkv.supabase.co";
const SUPABASE_API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpem55ZXBzanN3Y3dvb2pzdmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1NTM0OTAsImV4cCI6MjAzNTEyOTQ5MH0.6B1YREVhi60NEjw-N7mtlShXziLJTx7E1u3wMK-a0Qk";

export const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_API_KEY);
