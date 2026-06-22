import api from "@/services/api";

import {
  CreateComplaintRequest,
  Complaint,
} from "@/types/complaint";

export async function createComplaint(
  payload: CreateComplaintRequest
) {
  const response = await api.post(
    "/api/v1/complaints/",
    payload
  );

  return response.data;
}

export async function getComplaints(): Promise<
  Complaint[]
> {
  const response = await api.get(
    "/api/v1/complaints/"
  );

  return response.data;
}

export async function getMyComplaints(): Promise<
  Complaint[]
> {
  const response = await api.get(
    "/api/v1/complaints/my"
  );

  return response.data;
}

export async function getComplaintById(
  complaintId: string
): Promise<Complaint> {
  const response = await api.get(
    `/api/v1/complaints/${complaintId}`
  );

  return response.data;
}

export async function updateComplaintStatus(
  complaintId: string,
  status: string
) {
  const response = await api.patch(
    `/api/v1/complaints/${complaintId}/status`,
    {
      status,
    }
  );

  return response.data;
}