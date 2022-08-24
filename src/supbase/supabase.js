import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nuuitcahtqtagltvydlq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51dWl0Y2FodHF0YWdsdHZ5ZGxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA5MzA5NjYsImV4cCI6MTk3NjUwNjk2Nn0.-bLZv27Bu_unVi6u8y8PzdYWog3_0e_IU-usfj-sLW0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)