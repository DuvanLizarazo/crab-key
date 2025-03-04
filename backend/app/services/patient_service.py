from sqlalchemy.orm import Session
from backend.app.models.patient import Patient
from backend.app.schemas.patient import PatientCreate
from backend.app.utils.bsa_calculator import calculate_bsa
from cryptography.fernet import Fernet
import os
import hashlib

# Setup encryptor
cipher = Fernet(os.getenv("SECRET_KEY").encode())

def hash_id(patient_id: int) -> str:
    return hashlib.sha256(str(patient_id).encode()).hexdigest()

def get_patient_by_hashed_id(db: Session, patient_id: int):
    hashed_id = hash_id(patient_id)
    return db.query(Patient).filter(Patient.id_hash == hashed_id).first()

def create_patient(db: Session, patient: PatientCreate):
    existing_patient = get_patient_by_hashed_id(db, patient.id)
    if existing_patient:
        raise ValueError("Patient with this ID already exists")

    encrypted_id = cipher.encrypt(str(patient.id).encode()).decode()
    hashed_id = hash_id(patient.id)
    encrypted_name = cipher.encrypt(patient.name.encode()).decode()

    # Calculate BSA
    body_surface_area = calculate_bsa(patient.weight, patient.height)

    db_patient = Patient(
        id=encrypted_id,
        id_hash=hashed_id,
        name=encrypted_name,
        age=patient.age,
        weight=patient.weight,
        height=patient.height,
        body_surface_area=body_surface_area
    )
    db.add(db_patient)
    db.commit()
    db.refresh(db_patient)
    return db_patient
