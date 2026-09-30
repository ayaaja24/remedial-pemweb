import { NextResponse } from "next/server";

export async function GET() {
  const film = [
    {
      judul: "Interstellar",
      genre: "Sci-Fi",
      tahun: 2014,
      rating: 9
    }
  ];

  return NextResponse.json(film);
}