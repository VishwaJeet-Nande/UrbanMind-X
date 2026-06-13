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

from app.services.decision_service import (
    get_top_priority_wards
)


router = APIRouter(
    prefix="/api/v1/decision",
    tags=["Decision Intelligence"]
)


@router.get("/top-priority-wards")
def top_priority_wards(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    complaints = (
        db.query(Complaint)
        .all()
    )

    ward_risks = (
        calculate_ward_risks(
            complaints
        )
    )

    return get_top_priority_wards(
        ward_risks
    )