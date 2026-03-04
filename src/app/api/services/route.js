import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Service from '../../../lib/models/Service';

// GET: Saari services fetch karne ke liye
export async function GET() {
  try {
    await connectToDatabase();
    const services = await Service.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: services });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// POST: Nayi service create karne ke liye
export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const service = await Service.create(body);
    return NextResponse.json({ success: true, data: service }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}