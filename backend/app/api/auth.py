from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.schemas.auth import (
    RegisterRequest,
    LoginRequest,
    TokenResponse
)

from app.database.dependencies import get_db

from app.services.auth_service import (
    create_user,
    authenticate_user
)

from app.core.security import create_access_token
from app.database.dependencies import get_current_user
from app.models.user import User


router = APIRouter(
    prefix="/api/v1/auth",
    tags=["Authentication"]
)


@router.post("/register")
def register(
    user_data: RegisterRequest,
    db: Session = Depends(get_db)
):
    try:
        user = create_user(
            db,
            user_data
        )

        return {
            "success": True,
            "message": "User registered successfully",
            "user_id": user.id
        }

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )


@router.post(
    "/login",
    response_model=TokenResponse
)
def login(
    credentials: LoginRequest,
    db: Session = Depends(get_db)
):
    user = authenticate_user(
        db,
        credentials.email ,
        credentials.password
    )

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    token = create_access_token(
        {
            "sub": user.email
        }
    )

    return {
        "access_token": token
    }


# Get current user info
@router.get("/me")
def get_me(
    current_user: User = Depends(get_current_user)
):
    return {
        "id": current_user.id,
        "full_name": current_user.full_name,
        "email": current_user.email,
        "role": current_user.role
    }