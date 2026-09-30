export default function Edit() {
  return (
    <main>
      <h1>Edit Film</h1>

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

        <button type="submit">Simpan</button>
      </form>
    </main>
  );
}