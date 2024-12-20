import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://nwyhcqmbgoihzgxfitzh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53eWhjcW1iZ29paHpneGZpdHpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5NTYyNDQsImV4cCI6MjA0ODUzMjI0NH0.65vgvHV7ITJSP8HNk2Jl2LuItAKr5hFjF8wnPBWhiHM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Sign up function
export async function signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    return { data, error };
}
// Login function
export async function login(email, password) {
const { data, error } = await supabase.auth.signInWithPassword({ email, password });
return { data, error };
}
// Logout function
export async function logout() {
const { error } = await supabase.auth.signOut();
return { error };
}