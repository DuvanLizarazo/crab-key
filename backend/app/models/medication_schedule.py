from sqlalchemy import Column, String, Float, Integer, ForeignKey
from backend.app.database.session import Base

class MedicationSchedule(Base):
    __tablename__ = "medication_schedules"

    id = Column(String, primary_key=True, index=True, unique=True)
    treatment_plan_id = Column(String, ForeignKey("treatment_plans.id"), nullable=False)
    name = Column(String, nullable=False)
    dosage_per_bsa = Column(Float, nullable=False)  # mg/m²
    frequency = Column(String, nullable=False)  # Ej: "daily", "weekly"
    duration_days = Column(Integer, nullable=False)
