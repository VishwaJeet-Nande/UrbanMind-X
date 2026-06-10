from app.database.session import SessionLocal


def get_db():
    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()

from fastapi import Depends
from fastapi import HTTPException

from fastapi.security import HTTPBearer
from fastapi.security import HTTPAuthorizationCredentials

from sqlalchemy.orm import Session

from app.models.user import User

from app.core.security import decode_access_token


security = HTTPBearer()


def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):
    token = credentials.credentials

    payload = decode_access_token(token)

    if not payload:
        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )

    email = payload.get("sub")

    user = (
        db.query(User)
        .filter(User.email == email)
        .first()
    )

    if not user:
        raise HTTPException(
            status_code=401,
            detail="User not found"
        )

    return user