from pydantic import BaseModel


class RiskScoreResponse(BaseModel):
    ward_name: str
    complaint_count: int
    average_severity: float
    risk_score: int
    recommendation: str

    class Config:
        from_attributes = True