"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";

export interface ComplaintPoint {
  id: string;
  title: string;
  ward_name: string;
  latitude: number;
  longitude: number;
  severity_score: number;
  priority: string;
}

export function useComplaintPoints() {
  const [data, setData] =
    useState<ComplaintPoint[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      try {
        const response =
          await api.get(
            "/api/v1/digital-twin/complaint-points"
          );

        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    data,
    loading,
  };
}