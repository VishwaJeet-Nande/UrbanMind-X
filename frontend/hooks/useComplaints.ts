"use client";

import { useEffect, useState } from "react";

import { Complaint } from "@/types/complaint";

import { getComplaints } from "@/services/complaint";

export function useComplaints() {
  const [data, setData] = useState<
    Complaint[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const complaints =
          await getComplaints();

        setData(complaints);
      } catch (error) {
        console.error(error);
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