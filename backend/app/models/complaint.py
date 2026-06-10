import uuid

from datetime import datetime

from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import Float
from sqlalchemy import DateTime
from sqlalchemy import ForeignKey

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

from app.database.base import Base


class Complaint(Base):
    __tablename__ = "complaints"

    id: Mapped[str] = mapped_column(
        String,
        primary_key=True,
        default=lambda: str(uuid.uuid4())
    )

    user_id: Mapped[str] = mapped_column(
        ForeignKey("users.id")
    )

    title: Mapped[str] = mapped_column(
        String(255)
    )

    description: Mapped[str] = mapped_column(
        Text
    )

    category: Mapped[str] = mapped_column(
        String(100),
        default="Uncategorized"
    )

    ai_category: Mapped[str] = mapped_column(
        String(100),
        default="Unknown"
    )

    priority: Mapped[str] = mapped_column(
        String(50),
        default="Medium"
    )

    severity_score: Mapped[int] = mapped_column(
        default=5
    )

    recommended_department: Mapped[str] = mapped_column(
        String(255),
        default="General Administration"
    )

    status: Mapped[str] = mapped_column(
        String(50),
        default="reported"
    )

    latitude: Mapped[float] = mapped_column(
        Float
    )

    longitude: Mapped[float] = mapped_column(
        Float
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )