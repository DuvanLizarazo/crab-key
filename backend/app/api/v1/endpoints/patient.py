from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app.database.session import SessionLocal
from backend.app.services.patient_service import create_patient, get_patient_by_hashed_id
from backend.app.schemas.patient import PatientCreate, PatientResponse
import hashlib

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
    

@router.get("/{patient_id}", response_model=PatientResponse)
def read(patient_id: int, db: Session = Depends(get_db)):
    patient = get_patient_by_hashed_id(db, patient_id)
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient
