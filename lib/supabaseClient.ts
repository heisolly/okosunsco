
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ivonqbnvwvqwpqhqmolk.supabase.co';
const supabaseAnonKey = 'sb_publishable_MzOOKgr__mttwL9m4Hp8aQ_0R1qOeP5';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
