import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function GET() {
  try {
    // Supabase ki 'services' table se saara data fetch karna
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    // Frontend ko successfully data bhej dena
    return NextResponse.json({ data: data });
    
  } catch (error) {
    console.error("Supabase Fetch Error:", error.message);
    return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 });
  }
}