"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function UserDetailPage() {
  const params = useParams();
  const userId = params.id;

  // data dummy user
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // kalau backend-nya udah aktif, bisa ambil data dari API:
    // fetch(`/api/users/${userId}`).then(res => res.json()).then(setUser);

    // untuk sekarang pakai data dummy aja
    setUser({
      id: userId,
      name: "Padil",
      username: "padil11",
      role: "siswa",
      status: "aktif",
    });
  }, [userId]);

  if (!user) return <p className="p-6 text-gray-500">Loading...</p>;

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Detail Pengguna</h1>
      <div className="bg-white border rounded-lg shadow p-4">
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Nama:</strong> {user.name}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Status:</strong> {user.status}</p>
      </div>

      <div className="mt-6 flex gap-2">
        <a
          href={`/users/edit/${user.id}`}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Edit
        </a>
        <a
          href="/users"
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Kembali
        </a>
      </div>
    </main>
  );
}
