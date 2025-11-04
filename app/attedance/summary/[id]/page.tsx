"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function AttendanceSummaryPage() {
  const params = useParams();
  const userId = params.id;
  const [summary, setSummary] = useState<any>(null);

  useEffect(() => {
    setSummary({
      user_id: userId,
      month: "2025-11",
      summary: {
        hadir: 18,
        izin: 2,
        sakit: 1,
        alpha: 3,
      },
    });
  }, [userId]);

  if (!summary) return <p className="p-6 text-gray-500">Loading...</p>;

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Rekap Kehadiran Bulanan
      </h1>

      <div className="bg-white shadow rounded-lg p-4 border">
        <p><strong>User ID:</strong> {summary.user_id}</p>
        <p><strong>Bulan:</strong> {summary.month}</p>
        <div className="mt-4 space-y-1">
          <p>✅ Hadir: {summary.summary.hadir}</p>
          <p>📝 Izin: {summary.summary.izin}</p>
          <p>🤒 Sakit: {summary.summary.sakit}</p>
          <p>❌ Alpha: {summary.summary.alpha}</p>
        </div>
      </div>

      <a
        href="/attendance/analysis"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Lihat Analisis Kelas
      </a>
    </main>
  );
}
