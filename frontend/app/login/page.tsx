"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/services/auth";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    try {
      setLoading(true);

      const response = await login({
        email,
        password,
      });

      localStorage.setItem(
        "access_token",
        response.access_token
      );

      router.push("/");
    } catch (error) {
      alert("Invalid credentials");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="glass glow p-10 rounded-2xl w-[420px]">
        <h1 className="text-3xl font-bold">
          UrbanMindX Login
        </h1>

        <p className="text-slate-400 mt-2 mb-6">
          Smart City Command Center
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 mb-6"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold p-3 rounded-xl"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
        <div className="mt-6 text-center">
          <p className="text-slate-400">
            Don't have an account?
          </p>

          <Link
            href="/register"
            className="text-cyan-400 font-semibold hover:text-cyan-300"
        >
            Create Account
         </Link>
       </div>
      </div>
    </main>
  );
}