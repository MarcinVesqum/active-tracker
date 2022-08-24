import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nuuitcahtqtagltvydlq.supabase.co'
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)