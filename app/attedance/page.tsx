"use client";
import { useState } from "react";

export default function AttendancePage() {
  const [formData, setFormData] = useState({
    user_id: "",
    date: "",
    time: "",
    status: "hadir",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // nanti ini bisa diganti fetch('/api/attendance', {...})
    console.log("Presensi dikirim:", formData);

    setMessage("✅ Presensi berhasil dicatat!");
    setFormData({ user_id: "", date: "", time: "", status: "hadir" });
  };

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Pencatatan Presensi</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 shadow-md rounded-lg p-4">
        <div className="mb-3">
          <label className="block mb-1 font-medium">User ID</label>
          <input
            type="number"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            className="border rounded w-full p-2"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Tanggal</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border rounded w-full p-2"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Waktu</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border rounded w-full p-2"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border rounded w-full p-2"
          >
            <option value="hadir">Hadir</option>
            <option value="izin">Izin</option>
            <option value="sakit">Sakit</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Simpan Presensi
        </button>
      </form>

      {message && <p className="mt-4 text-green-600">{message}</p>}
    </main>
  );
}
