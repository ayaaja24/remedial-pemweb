"use client";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [film, setFilm] = useState([
  {
    judul: "Interstellar",
    genre: "Sci-Fi",
    tahun: 2014,
    rating: 9
  }
]);
  return (
    <main>
      <h1>🎬 Rating Film</h1>

      <h2>Daftar Film</h2>
<Link href="/tambah">Tambah Film</Link>
    {film.map((item) => (
  <div key={item.judul}>
    <h3>{item.judul}</h3>
    <p>Genre: {item.genre}</p>
    <p>Tahun: {item.tahun}</p>
    <p>Rating: {item.rating}</p>

   <Link href="/edit/1">Edit</Link>
    <button
  onClick={() =>
    setFilm(film.filter((data) => data.judul !== item.judul))
  }
>
  Hapus
</button>
  </div>
))}

    </main>
  );
}