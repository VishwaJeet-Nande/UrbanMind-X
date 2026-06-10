from sqlalchemy.orm import Session

from app.models.complaint import Complaint
from app.schemas.complaint import CreateComplaintRequest
from app.services.ai_complaint_service import analyze_complaint

def create_complaint(
    db: Session,
    user_id: str,
    complaint_data: CreateComplaintRequest
):
    ai_result = analyze_complaint(
        complaint_data.title + " " +
        complaint_data.description
    )

    complaint = Complaint(
        user_id=user_id,
        title=complaint_data.title,
        description=complaint_data.description,

        category=ai_result["category"],
        ai_category=ai_result["category"],

        priority=ai_result["priority"],
        severity_score=ai_result["severity_score"],

        recommended_department=ai_result[
            "recommended_department"
        ],

        latitude=complaint_data.latitude,
        longitude=complaint_data.longitude
    )

    db.add(complaint)

    db.commit()

    db.refresh(complaint)

    return complaint


def get_complaints(
    db: Session
):
    return db.query(Complaint).all()


def get_complaint_by_id(
    db: Session,
    complaint_id: str
):
    return (
        db.query(Complaint)
        .filter(Complaint.id == complaint_id)
        .first()
    )