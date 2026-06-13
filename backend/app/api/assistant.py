from fastapi import APIRouter
from fastapi import Depends
from fastapi import Query

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

from app.services.assistant_service import (
    answer_city_query
)

router = APIRouter(
    prefix="/api/v1/assistant",
    tags=["Urban AI Assistant"]
)


@router.get("/ask")
def ask_assistant(
    query: str = Query(...),
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

    return answer_city_query(
        query,
        complaints,
        ward_risks
    )