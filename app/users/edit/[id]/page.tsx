"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function EditUserPage() {
  const params = useParams();
  const userId = params.id;

  // data awal pengguna (dummy)
  const [form, setForm] = useState({
    name: "Padil",
    username: "padil11",
    password: "",
    role: "siswa",
  });

  useEffect(() => {
    // kalau backend-nya aktif, di sini kamu ambil data berdasarkan userId
    // fetch(`/api/users/${userId}`).then(...)
  }, [userId]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Data pengguna ${userId} berhasil diupdate:\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Edit Pengguna</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nama Lengkap"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password (kosongkan jika tidak diubah)"
          value={form.password}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="siswa">Siswa</option>
          <option value="guru">Guru</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Simpan Perubahan
        </button>
      </form>
    </main>
  );
}
