"use client";

import { useEffect, useState } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const token =
      localStorage.getItem("access_token");

    setIsAuthenticated(!!token);

    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem(
      "access_token"
    );

    window.location.href = "/login";
  };

  return {
    isAuthenticated,
    loading,
    logout,
  };
}