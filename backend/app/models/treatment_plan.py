from sqlalchemy import Column, String, Float, Integer
from backend.app.database.session import Base

class TreatmentPlan(Base):
    __tablename__ = "treatment_plans"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    patient_id = Column(String, nullable=False, index=True)
    phase = Column(String, nullable=False)
    medication = Column(String, nullable=False)
    total_dose_mg = Column(Float, nullable=False)
    days = Column(Integer, nullable=False)
