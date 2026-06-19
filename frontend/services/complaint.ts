import api from "@/services/api";
import { CreateComplaintRequest } from "@/types/complaint";

export async function createComplaint(
  payload: CreateComplaintRequest
) {
  const response = await api.post(
    "/api/v1/complaints/",
    payload
  );

  return response.data;
}