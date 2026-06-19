"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { ComplaintPoint } from "@/types/map";

export function useComplaintPoints() {
  const [data, setData] = useState<ComplaintPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem("access_token");

      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const response = await api.get(
          "/api/v1/digital-twin/complaint-points"
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading };
}