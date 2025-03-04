from sqlalchemy import Column, String, Date, ForeignKey
from backend.app.database.session import Base

class TreatmentAdjustment(Base):
    __tablename__ = "treatment_adjustments"

    id = Column(String, primary_key=True, index=True, unique=True)
    patient_id = Column(String, ForeignKey("patients.id"), nullable=False)
    phase = Column(String, nullable=False)
    medication = Column(String, nullable=False)
    reason = Column(String, nullable=False)  # Ej: "Neutropenia", "Mucositis"
    adjustment = Column(String, nullable=False)  # Ej: "Reduce dose by 20%"
    date = Column(Date, nullable=False)
