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
  const [data, setData] = useState<CityOverview | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(
          "/api/v1/digital-twin/city-overview"
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return data;
}