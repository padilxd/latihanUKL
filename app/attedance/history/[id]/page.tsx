"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function AttendanceHistoryPage() {
  const { id } = useParams();
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    // nanti bisa fetch(`/api/attendance/history/${id}`).then(res => res.json()).then(data => setHistory(data.data));
    // sekarang data dummy aja
    setHistory([
      { attendance_id: 1, date: "2025-11-01", time: "08:10:00", status: "hadir" },
      { attendance_id: 2, date: "2025-11-02", time: "08:12:00", status: "izin" },
    ]);
  }, [id]);

  return (
    <main className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Riwayat Presensi Pengguna #{id}
      </h1>

      <table className="w-full border-collapse border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Tanggal</th>
            <th className="border p-2">Waktu</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {history.map((h) => (
            <tr key={h.attendance_id}>
              <td className="border p-2">{h.attendance_id}</td>
              <td className="border p-2">{h.date}</td>
              <td className="border p-2">{h.time}</td>
              <td className="border p-2 capitalize">{h.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <a
        href="/attendance"
        className="block mt-4 text-center bg-gray-00 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Kembali
      </a>
    </main>
  );
}
