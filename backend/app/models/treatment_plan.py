from sqlalchemy import Column, String, Date, ForeignKey
from sqlalchemy.orm import relationship
from backend.app.database.session import Base

class TreatmentPlan(Base):
    __tablename__ = "treatment_plans"

    id = Column(String, primary_key=True, index=True, unique=True)
    patient_id = Column(String, ForeignKey("patients.id"), nullable=False)
    phase = Column(String, nullable=False)
    start_date = Column(Date, nullable=False)

    patient = relationship("Patient")
