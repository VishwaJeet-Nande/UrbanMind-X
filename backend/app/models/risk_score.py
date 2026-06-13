import uuid

from datetime import datetime

from sqlalchemy import String
from sqlalchemy import Integer
from sqlalchemy import Float
from sqlalchemy import DateTime

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

from app.database.base import Base


class RiskScore(Base):
    __tablename__ = "risk_scores"

    id: Mapped[str] = mapped_column(
        String,
        primary_key=True,
        default=lambda: str(uuid.uuid4())
    )

    ward_name: Mapped[str] = mapped_column(
        String(100)
    )

    complaint_count: Mapped[int] = mapped_column(
        Integer,
        default=0
    )

    average_severity: Mapped[float] = mapped_column(
        Float,
        default=0.0
    )

    risk_score: Mapped[int] = mapped_column(
        Integer,
        default=0
    )

    recommendation: Mapped[str] = mapped_column(
        String(255),
        default="Monitor"
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow
    )