from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.dependencies import (
    get_db,
    get_current_user
)

from app.models.user import User
from app.models.complaint import Complaint

from app.services.risk_service import (
    calculate_risk_score
)

from app.services.ward_risk_service import (
    calculate_ward_risks
)

router = APIRouter(
    prefix="/api/v1/risks",
    tags=["Risk Intelligence"]
)


@router.get("/")
def get_city_risk(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    complaints = (
        db.query(Complaint)
        .all()
    )

    return calculate_risk_score(
        complaints
    )

@router.get("/wards")
def get_ward_risks(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    complaints = (
        db.query(Complaint)
        .all()
    )

    return calculate_ward_risks(
        complaints
    )