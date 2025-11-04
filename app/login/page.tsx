"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulasi login tanpa backend
    if (username === "" || password === "") {
      setError("Harap isi semua field!");
    } else {
      setError("");
      alert("Login berhasil (simulasi)!");
      router.push("/dashboard");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 shadow-md rounded-xl p-8 w-80"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          Login Presensi
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border border-gray-700 bg-gray-700 text-white p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-700 bg-gray-700 text-white p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </main>
  );
}
