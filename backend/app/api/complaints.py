from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.dependencies import (
    get_db,
    get_current_user
)

from app.models.user import User

from app.schemas.complaint import (
    CreateComplaintRequest,
    UpdateComplaintStatusRequest
)

from app.services.complaint_service import (
    create_complaint,
    get_complaints,
    get_user_complaints,
    get_complaint_by_id,
    update_complaint_status
)

router = APIRouter(
    prefix="/api/v1/complaints",
    tags=["Complaints"]
)


@router.post("/")
def create_new_complaint(
    complaint_data: CreateComplaintRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        get_current_user
    )
):
    complaint = create_complaint(
        db,
        current_user.id,
        complaint_data
    )

    return complaint


@router.get("/")
def list_complaints(
    db: Session = Depends(get_db),
    current_user: User = Depends(
        get_current_user
    )
):
    return get_complaints(db)

@router.get("/my")
def my_complaints(
    db: Session = Depends(get_db),
    current_user: User = Depends(
        get_current_user
    )
):
    return get_user_complaints(
        db,
        current_user.id
    )

@router.get("/{complaint_id}")
def get_single_complaint(
    complaint_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        get_current_user
    )
):
    complaint = get_complaint_by_id(
        db,
        complaint_id
    )

    if not complaint:
        raise HTTPException(
            status_code=404,
            detail="Complaint not found"
        )

    return complaint


@router.patch("/{complaint_id}/status")
def update_status(
    complaint_id: str,
    payload: UpdateComplaintStatusRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        get_current_user
    )
):
    complaint = update_complaint_status(
        db,
        complaint_id,
        payload.status
    )

    if not complaint:
        raise HTTPException(
            status_code=404,
            detail="Complaint not found"
        )

    return complaint