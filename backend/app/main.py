from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.auth import router as auth_router
from app.api.complaints import router as complaint_router
from app.api.risks import router as risk_router
from app.api.decision import (router as decision_router)
from app.api.digital_twin import ( router as digital_twin_router)
from app.api.assistant import ( router as assistant_router)
from app.database.base import Base
from app.database.session import engine

# import all models
from app.models.user import User

app = FastAPI(
    title="UrbanMindX API",
    version="1.0.0"
)

@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
      "http://localhost:3000",
      "https://urbanmindx.inovexia.in",
      "https://urban-mind-x.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(complaint_router)
app.include_router(risk_router)
app.include_router(decision_router)
app.include_router(digital_twin_router)
app.include_router(assistant_router)


@app.get("/")
def root():
    return {
        "message": "UrbanMindX API Running"
    }