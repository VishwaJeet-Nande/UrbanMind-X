from typing import Literal

from pydantic import BaseModel


class CreateComplaintRequest(BaseModel):
    title: str
    description: str
    latitude: float
    longitude: float
    ward_name: str


class UpdateComplaintStatusRequest(BaseModel):
    status: Literal[
        "reported",
        "verified",
        "assigned",
        "in_progress",
        "resolved",
        "closed"
    ]


class ComplaintResponse(BaseModel):
    id: str

    title: str
    description: str

    category: str
    ai_category: str

    priority: str
    severity_score: int

    recommended_department: str

    status: str

    class Config:
        from_attributes = True