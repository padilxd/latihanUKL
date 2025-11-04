"use client";
import { useState } from "react";

export default function AttendanceAnalysisPage() {
  const [data, setData] = useState<any[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    setData([
      {
        group: "XII RPL 1",
        total_present: 22,
        total_izin: 1,
        total_sakit: 0,
        total_alpha: 2,
        attendance_rate: "91%",
      },
      {
        group: "XII RPL 2",
        total_present: 20,
        total_izin: 0,
        total_sakit: 1,
        total_alpha: 4,
        attendance_rate: "83%",
      },
      {
        group: "XII TKJ 1",
        total_present: 23,
        total_izin: 0,
        total_sakit: 0,
        total_alpha: 1,
        attendance_rate: "96%",
      },
    ]);
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Analisis Tingkat Kehadiran
      </h1>

      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-4 border mb-6">
        <div className="mb-3">
          <label className="block mb-1 font-semibold">Tanggal Mulai</label>
          <input type="date" className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="mb-3">
          <label className="block mb-1 font-semibold">Tanggal Akhir</label>
          <input type="date" className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="mb-3">
          <label className="block mb-1 font-semibold">Kelompok Berdasarkan</label>
          <select className="w-full border rounded px-3 py-2" required>
            <option value="kelas">Kelas</option>
            <option value="jabatan">Jabatan</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Lihat Analisis
        </button>
      </form>

      {submitted && (
        <div className="bg-white shadow rounded-lg p-4 border">
          <h2 className="text-xl font-semibold mb-2">Hasil Analisis</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-2">Kelompok</th>
                <th className="border p-2">Hadir</th>
                <th className="border p-2">Izin</th>
                <th className="border p-2">Sakit</th>
                <th className="border p-2">Alpha</th>
                <th className="border p-2">Persentase</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i} className="text-center">
                  <td className="border p-2">{item.group}</td>
                  <td className="border p-2">{item.total_present}</td>
                  <td className="border p-2">{item.total_izin}</td>
                  <td className="border p-2">{item.total_sakit}</td>
                  <td className="border p-2">{item.total_alpha}</td>
                  <td className="border p-2">{item.attendance_rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
