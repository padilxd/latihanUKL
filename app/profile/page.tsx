"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Ambil token dari localStorage dan fetch data user
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Belum login. Silakan login terlebih dahulu.");
      setLoading(false);
      return;
    }

    fetch("/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Gagal mengambil data profil");
        const data = await res.json();
        setUser(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6 text-gray-600">Memuat profil...</div>;
  if (error)
    return (
      <div className="p-6 text-red-600">
        Terjadi kesalahan: {error}
      </div>
    );

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow rounded p-6">
      <h1 className="text-2xl font-semibold mb-4">Profil Pengguna</h1>

      <div className="space-y-3 text-gray-700">
        <p>
          <span className="font-medium">Nama:</span> {user.name || "Tidak ada"}
        </p>
        <p>
          <span className="font-medium">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-medium">Role:</span>{" "}
          {user.role || "Siswa / Karyawan"}
        </p>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
