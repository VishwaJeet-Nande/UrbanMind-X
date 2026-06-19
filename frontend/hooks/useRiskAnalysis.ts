"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

import { RiskAnalysis } from "@/types/risk";

export function useRiskAnalysis() {
  const [data, setData] = useState<
    RiskAnalysis[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response =
          await api.get(
            "/api/v1/risks/wards"
          );

        setData(response.data);
      } catch (error) {
        console.error(
          "Risk analysis error:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
}