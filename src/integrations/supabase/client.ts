// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xrkfliefyekwqujcvdtb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhya2ZsaWVmeWVrd3F1amN2ZHRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NzQyNDksImV4cCI6MjA2MDU1MDI0OX0.l_mv9q3dS8jN09OJVzDvA97UkwhUHWPelxPgMIjnsf8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);