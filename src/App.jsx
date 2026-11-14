import "./App.css";
import { useState } from "react";

// 1. Komponen Anak
function KartuProduk({ nama, harga, tersedia }) {
  const apaTersedia = tersedia ? "Tersedia" : "Habis";

  return (
    <div>
      <h4>{nama}</h4>
      <p>Harga: Rp {harga}</p>
      <p>Status: {apaTersedia}</p>
    </div>
  );
}

// 2. Komponen Induk
function EtalaseProduk() {
  const [hanyaTersedia, setHanyaTersedia] = useState(false);

  const daftarProduk = [
    { id: 1, nama: "Keyboard Mekanikal", harga: 450000, tersedia: true },
    { id: 2, nama: "Monitor 24 Inch", harga: 1800000, tersedia: false },
    { id: 3, nama: "Mouse Gaming", harga: 250000, tersedia: true }
  ];

  const ubahFilter = () => {
    setHanyaTersedia(!hanyaTersedia);
  };

  const saringProduk = daftarProduk
    .filter((produk) => (hanyaTersedia ? produk.tersedia === true : true))
    .map((produk) => <KartuProduk key={produk.id} {...produk} />);

  const teksButton = hanyaTersedia ? "Tampilkan Semua" : "Filter Tersedia";

  return (
    <div>
      <button onClick={ubahFilter}>{teksButton}</button>
      {saringProduk}
    </div>
  );
}

export default EtalaseProduk;
