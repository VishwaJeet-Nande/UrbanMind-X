"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useAuth } from "@/hooks/useAuth";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const {
    isAuthenticated,
    loading,
  } = useAuth();

  useEffect(() => {
    if (
      !loading &&
      !isAuthenticated
    ) {
      router.push("/login");
    }
  }, [
    loading,
    isAuthenticated,
    router,
  ]);

  if (
    loading ||
    !isAuthenticated
  ) {
    return null;
  }

  return <>{children}</>;
}