from sqlalchemy import Column, Integer, String, Float, Enum
from backend.app.database.session import Base
from cryptography.fernet import Fernet
import os
from enum import Enum as PyEnum

# Crea el cifrador usando la clave secreta
cipher = Fernet(os.getenv("SECRET_KEY").encode())

class TreatmentPhase(PyEnum):
    INDUCTION = "Induction"
    CONSOLIDATION = "Consolidation"
    REINDUCTION = "Reinduction"
    MAINTENANCE = "Maintenance"

class Patient(Base):
    __tablename__ = "patients"

    id = Column(String, primary_key=True, index=True, unique=True)
    id_hash = Column(String, unique=True, index=True)
    name = Column(String, nullable=False)
    age = Column(Integer, nullable=False)
    weight = Column(Float, nullable=False)
    height = Column(Float, nullable=False)
    body_surface_area = Column(Float, nullable=False)
    current_phase = Column(Enum(TreatmentPhase), nullable=True)

    def set_id(self, plain_id: str):
        self.id = cipher.encrypt(str(plain_id).encode()).decode()

    def get_id(self) -> str:
        return str(cipher.decrypt(self.id.encode()).decode())

    def set_name(self, plain_name: str):
        self.name = cipher.encrypt(plain_name.encode()).decode()

    def get_name(self) -> str:
        return cipher.decrypt(self.name.encode()).decode()
