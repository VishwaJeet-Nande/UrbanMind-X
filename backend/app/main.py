from fastapi import FastAPI

from app.api.auth import router as auth_router
from app.api.complaints import router as complaint_router

app = FastAPI(
    title="UrbanMindX API",
    version="1.0.0"
)


app.include_router(auth_router)
app.include_router(complaint_router)

@app.get("/")
def root():
    return {
        "message": "UrbanMindX API Running"
    }