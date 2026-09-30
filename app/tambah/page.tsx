import Link from "next/link";
export default function Tambah() {
  return (
    <main>
      <h1>Tambah Film</h1>

      <form>
        <p>Nama Film</p>
        <input type="text" />

        <p>Genre</p>
        <input type="text" />

        <p>Tahun</p>
        <input type="number" />

        <p>Rating</p>
        <input type="number" />

        <br /><br />

        <button type="submit">Tambah</button>
        <br /><br />

<Link href="/">Kembali</Link>
      </form>
    </main>
  );
}