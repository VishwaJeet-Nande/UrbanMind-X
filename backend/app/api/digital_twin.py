from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.dependencies import (
    get_db,
    get_current_user
)

from app.models.user import User
from app.models.complaint import Complaint

from app.services.ward_risk_service import (
    calculate_ward_risks
)

from app.services.digital_twin_service import (
    build_city_overview
)


router = APIRouter(
    prefix="/api/v1/digital-twin",
    tags=["Digital Twin"]
)


@router.get("/city-overview")
def city_overview(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    complaints = db.query(
        Complaint
    ).all()

    ward_risks = (
        calculate_ward_risks(
            complaints
        )
    )

    return build_city_overview(
        complaints,
        ward_risks
    )


@router.get("/complaint-points")
def complaint_points(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    complaints = db.query(
        Complaint
    ).all()

    return [
        {
            "id": complaint.id,
            "title": complaint.title,
            "ward_name": complaint.ward_name,
            "latitude": complaint.latitude,
            "longitude": complaint.longitude,
            "severity_score": complaint.severity_score,
            "priority": complaint.priority
        }
        for complaint in complaints
    ]