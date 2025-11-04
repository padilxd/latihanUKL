"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("/api/attendance/summary/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Box title="Hadir" color="green" value={data.hadir} />
        <Box title="Izin" color="yellow" value={data.izin} />
        <Box title="Alfa" color="red" value={data.alfa} />
      </div>

      <div className="bg-white rounded shadow p-4">
        <h2 className="font-semibold mb-3">Rekap Bulan Ini</h2>
        {data.rekap?.length ? (
          <table className="w-full text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Tanggal</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.rekap.map((r: any, i: number) => (
                <tr key={i}>
                  <td className="border p-2">{r.tanggal}</td>
                  <td className="border p-2">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">Belum ada data.</p>
        )}
      </div>
    </div>
  );
}

function Box({ title, value, color }: any) {
  return (
    <div className={`bg-${color}-100 border-l-4 border-${color}-500 p-4 rounded`}>
      <h3 className={`text-${color}-700 font-semibold`}>{title}</h3>
      <p className="text-2xl font-bold">{value ?? 0}</p>
    </div>
  );
}
