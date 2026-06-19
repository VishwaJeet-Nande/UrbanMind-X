"use client";

import { useState } from "react";
import api from "@/services/api";

export function useAssistant() {
  const [loading, setLoading] = useState(false);

  async function askAssistant(
    question: string
  ): Promise<string> {
    try {
      setLoading(true);

      const response = await api.get(
        "/api/v1/assistant/ask",
        {
          params: {
            query: question,
          },
        }
      );

      return (
        response.data.answer ??
        "No response received."
      );
    } catch (error) {
      console.error(error);

      return "Assistant unavailable.";
    } finally {
      setLoading(false);
    }
  }

  return {
    askAssistant,
    loading,
  };
}