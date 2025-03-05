# backend/app/database/init_db.py
from backend.app.database.session import Base, engine
from backend.app.models.patient import Patient
from backend.app.models.treatment_plan import TreatmentPlan
from backend.app.models.medication_schedule import MedicationSchedule
from backend.app.models.treatment_adjustment import TreatmentAdjustment

def init_db():
    Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    init_db()
    print("Database initialized successfully!")
