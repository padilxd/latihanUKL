"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.status === "success") {
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      } else {
        setError("Username atau password salah!");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Terjadi kesalahan server!");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-g">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 shadow-md rounded-xl p-8 w-80"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Login Presensi</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-3 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </main>
  );
}
