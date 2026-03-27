import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const dir = path.join(process.cwd(), "public", "testimonials");

  try {
    const files = fs.readdirSync(dir).filter((f) =>
      /\.(jpe?g|png|webp|gif|avif)$/i.test(f)
    );
    const images = files.map((f) => `/testimonials/${f}`);
    return NextResponse.json({ images });
  } catch {
    return NextResponse.json({ images: [] });
  }
}
