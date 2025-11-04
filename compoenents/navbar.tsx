"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">Presensi Online</h1>
      <div className="space-x-4">
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <Link href="/profile" className="hover:underline">Profile</Link>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
