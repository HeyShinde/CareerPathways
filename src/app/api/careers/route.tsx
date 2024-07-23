import connectToDatabase from "../../../lib/mongodb";
import Career from "../../../models/Career";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  try {
    const careers = await Career.find({});
    return NextResponse.json(careers);
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
