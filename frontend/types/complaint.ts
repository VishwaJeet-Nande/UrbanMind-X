export interface CreateComplaintRequest {
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  ward_name: string;
}

export interface Complaint {
  id: string;

  title: string;
  description: string;

  category: string;
  ai_category: string;

  priority: string;
  severity_score: number;

  recommended_department: string;

  status: string;

  ward_name?: string;

  latitude?: number;
  longitude?: number;

  created_at?: string;
  updated_at?: string;
}