from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app.database.session import SessionLocal
from backend.app.services.patient_service import create_patient, get_patient_by_hashed_id
from backend.app.schemas.patient import PatientCreate, PatientResponse

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=PatientResponse)
def create(patient: PatientCreate, db: Session = Depends(get_db)):
    return create_patient(db, patient)
    

@router.get("/", response_model=list[PatientResponse])
def read(db: Session = Depends(get_db)):
    return get_patient_by_hashed_id(db)
