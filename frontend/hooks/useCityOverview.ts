"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

export interface CityOverview {
  total_complaints: number;
  high_priority_complaints: number;
  high_risk_wards: number;
  city_risk_score: number;
  top_ward: string;
}

export function useCityOverview() {
  const [data, setData] =
    useState<CityOverview | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(
          "/api/v1/digital-twin/city-overview"
        );

        setData(response.data);
      } catch (error) {
        console.error(
          "City overview error:",
          error
        );

        setData(null);
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