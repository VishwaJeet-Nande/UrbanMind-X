"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { register } from "@/services/auth";

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  async function handleRegister() {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await register({
        full_name: fullName,
        email,
        password,
      });

      alert(
        "Account created successfully"
      );

      router.push("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="glass glow p-10 rounded-2xl w-[450px]">
        <h1 className="text-3xl font-bold">
          Create Account
        </h1>

        <p className="text-slate-400 mt-2 mb-6">
          Join UrbanMindX
        </p>

        <input
          placeholder="Full Name"
          value={fullName}
          onChange={(e) =>
            setFullName(e.target.value)
          }
          className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 mb-4"
        />

        <input
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
          className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 mb-4"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
          className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 mb-6"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-cyan-500 text-black font-bold p-3 rounded-xl"
        >
          Create Account
        </button>
      </div>
    </main>
  );
}